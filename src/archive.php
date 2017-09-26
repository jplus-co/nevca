<?php

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();

Timber::render( 'archive-' . $post->post_type . '.twig', $context );
