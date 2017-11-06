<?php

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();

Timber::render( 'taxonomy-resource_topic.twig', $context );
