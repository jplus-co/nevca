<?php

$context = Timber::get_context();

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$context['posts'] = new Timber\PostQuery(array(
  'post_type' => 'press',
  'posts_per_page' => 10,
  'meta_key' => 'publish_date',
  'orderby' => 'meta_value',
  'order' => 'DESC',
  'paged' => $paged
));

Timber::render('archive-press.twig', $context );
