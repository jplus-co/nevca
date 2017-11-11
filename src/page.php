<?php

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

if ( $post->post_name == ('nevca-jobs' || 'vc-jobs') ) {
  $context['posts'] = new Timber\PostQuery(array(
    'tax_query' => array(
        array(
            'taxonomy' => 'job_type',
            'field' => 'slug',
            'terms' => array( $post->post_name )
        ),
    ),
    'post_type' => 'job'
  ));
}

Timber::render( array( 'page-' . $post->post_name . '.twig', 'page.twig' ), $context );