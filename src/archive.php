<?php

$context = Timber::get_context();

if ( $post->post_type == 'resource' ) {
  $context['resource_topics'] = get_terms(array(
    'taxonomy' => 'resource_topic'
  ));
  $context['resource_types'] = get_terms(array(
    'taxonomy' => 'resource_type'
  ));
} else {
  $context['posts'] = new Timber\PostQuery();
}

Timber::render( 'archive-' . $post->post_type . '.twig', $context );
