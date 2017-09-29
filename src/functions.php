<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});

	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

  return;
}

Timber::$dirname = array('templates', 'templates/partials', 'templates/layouts');

class NEVCASite extends TimberSite {
	function __construct() {
		show_admin_bar(false);

		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

		remove_action( 'template_redirect', 'rest_output_link_header', 11, 0 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
		remove_action( 'wp_head', 'rest_output_link_wp_head' );
		remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'wp_head', 'wlwmanifest_link' );
		remove_action( 'wp_head', 'index_rel_link' );
		remove_action( 'wp_head', 'rsd_link' );
		remove_action( 'wp_head', 'wp_generator' );

		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_filter( 'acf/settings/save_json', array( $this, 'my_acf_json_save_point' ) );
		add_filter( 'enter_title_here', array( $this, 'change_title_text' ) );

		add_action( 'init', array( $this, 'add_custom_options_page' ) );
		add_action( 'wp_footer', array( $this, 'deregister_scripts' ) );

		parent::__construct();
	}

	function my_acf_json_save_point( $path ) {
		$path = get_stylesheet_directory() . '/assets/acf-json';
		return $path;
	}

	function add_custom_options_page() {
		if ( function_exists('acf_add_options_page') ) {
			acf_add_options_page(array(
				'page_title' 	=> 'SEO',
				'menu_title'	=> 'SEO',
				'menu_slug' 	=> 'seo',
				'capability'	=> 'edit_posts',
				'parent_slug' => 'options-general.php',
				'redirect'		=> false
			));
		}
	}

	function add_to_context( $context ) {
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;
		$context['options'] = get_fields('option');
		return $context;
	}

	function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		return $twig;
	}

	function deregister_scripts() {
 		wp_deregister_script( 'wp-embed' );
	}

	function change_title_text( $title ){
		$screen = get_current_screen();

		if  ( 'testimonial' == $screen->post_type ) {
			$title = 'Enter testimonial attribution here';
		}

		if  ( 'team_member' == $screen->post_type ) {
			$title = 'Enter name here';
		}

		if  ( 'job' == $screen->post_type ) {
			$title = 'Enter job title here';
		}

		return $title;
	}
}
new NEVCASite();
