<?php

$context = Timber::get_context();
$context['post'] = Timber::get_post();

$members = Timber::get_posts(array(
  'post_type'    => 'member',
  'posts_per_page'  => -1
));

$context['member_groups'] = array_chunk($members, 16);

$events_block = get_field('events_block');

if ( $events_block->customize_featured_events ) {
  $context['featured_events'] = $events_block->featured_posts;
} else {
  $context['featured_events'] = Timber::get_posts(array(
    'post_type'    => 'tribe_events',
    'numberposts'  => 4
  ));
}

Timber::render( 'front-page.twig', $context );
