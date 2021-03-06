<?php

@ini_set( 'max_input_vars', '3000' );

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
				'page_title'   => 'SEO',
				'menu_title'   => 'SEO',
				'menu_slug'    => 'seo',
				'capability'   => 'edit_posts',
				'parent_slug'  => 'options-general.php',
				'redirect'     => false
			));

			acf_add_options_page(array(
				'page_title'   => 'Press Page Options',
				'menu_title'   => 'Press Page Options',
				'menu_slug'    => 'press_page_options',
				'capability'   => 'edit_posts',
				'parent_slug'  => 'edit.php?post_type=press',
				'redirect'     => false
			));

			acf_add_options_page(array(
				'page_title'   => 'FAQ Page Options',
				'menu_title'   => 'FAQ Page Options',
				'menu_slug'    => 'faq_page_options',
				'capability'   => 'edit_posts',
				'parent_slug'  => 'edit.php?post_type=faq',
				'redirect'     => false
			));

			acf_add_options_page(array(
				'page_title'   => '404',
				'menu_title'   => '404',
				'menu_slug'    => 'not_found_page',
				'capability'   => 'edit_posts',
				'icon_url'     => 'dashicons-no',
				'redirect'     => false
			));

			acf_add_options_page(array(
				'page_title'   => 'Footer',
				'menu_title'   => 'Footer',
				'menu_slug'    => 'nevca_footer',
				'capability'   => 'edit_posts',
				'icon_url'     => 'dashicons-arrow-down',
				'redirect'     => false
			));

			acf_add_options_page(array(
				'page_title'   => 'Testimonial Settings',
				'menu_title'   => 'Testimonial Settings',
				'menu_slug'    => 'testimonial_settings',
				'capability'   => 'edit_posts',
				'parent_slug'  => 'edit.php?post_type=testimonial',
				'redirect'     => false
			));

			acf_add_options_page(array(
				'page_title'   => 'Archive Options',
				'menu_title'   => 'Archive Options',
				'menu_slug'    => 'impact_reports_page_options',
				'capability'   => 'edit_posts',
				'parent_slug'  => 'edit.php?post_type=impact_report',
				'redirect'     => false
			));
		}
	}

	function add_to_context( $context ) {
		$context['menu'] = new TimberMenu('Primary Navigation');
		$context['mobile_menu'] = new TimberMenu('Mobile Menu');
		$context['footer_menu'] = new TimberMenu('Footer');
		$context['site'] = $this;
		$context['options'] = get_fields('option');
		$context['colors'] = array(
			'white'      => '#FFFFFF',
			'black'      => '#181920',
			'gold'       => '#D9A03E',
			'light_gold' => '#F8D57C',
			'blue'       => '#363D4F',
			'light_blue' => '#BDC4CB'
		);
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


// Changes the text labels for Google Calendar and iCal buttons on a single event page
remove_action( 'tribe_events_single_event_after_the_content', array( tribe( 'tec.iCal' ), 'single_event_links' ) );
add_action( 'tribe_events_single_event_after_the_content', 'customized_tribe_single_event_links' );
function customized_tribe_single_event_links()	{

	if ( is_single() && post_password_required() ) {
		return;
	}
	echo '<div class="tribe-events-cal-links">';
	echo '<a class="button" href="' . tribe_get_gcal_link() . '" title="' . __( 'Add to Google Calendar', 'tribe-events-calendar-pro' ) . '"><span>+ Export to Google Calendar</span></a>';
	echo '<a class="button" href="' . tribe_get_single_ical_link() . '"><span>+ Export to iCal</span></a>';
	echo '</div>';
}

// Filters the website link for Tribe Events
add_filter('tribe_get_event_website_link','my_custom_website_link');
function my_custom_website_link( $html ){
  $post_id = is_object($event) && isset($event->tribe_is_event) && $event->tribe_is_event ? $event->ID : $event;
  $post_id = !empty($post_id) ? $post_id : get_the_ID();
  $url = tribe_get_event_meta( $post_id, '_EventURL', true );
  if( !empty($url) ) {
    $label = is_null($label) ? $url : $label;
    if( !empty( $url )) {
      $parseUrl = parse_url($url);
      if (empty($parseUrl['scheme']))
        $url = "http://$url";
    }
    $html = $url;
  } else {
    $html = '';
  }
  return $html;
}


add_action( 'wp_default_scripts', function( $scripts ) {
	if ( ! empty( $scripts->registered['jquery'] ) ) {
		$scripts->registered['jquery']->deps = array_diff( $scripts->registered['jquery']->deps, array( 'jquery-migrate' ) );
	}
} );
