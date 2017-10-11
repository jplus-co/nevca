<?php

$context = Timber::get_context();
$context['post'] = Timber::get_post();

$members_block = get_field('members_block');
$events_block = get_field('events_block');

if ( $members_block->customize_featured_members ) {
  $context['featured_members'] = $members_block->featured_posts;
} else {
  $context['featured_members'] = Timber::get_posts(array(
    'post_type'    => 'member',
    'numberposts'  => 15
  ));
}

if ( $events_block->customize_featured_events ) {
  $context['featured_events'] = $events_block->featured_posts;
} else {
  $context['featured_events'] = Timber::get_posts(array(
    'post_type'    => 'tribe_events',
    'numberposts'  => 4
  ));
}

Timber::render( 'front-page.twig', $context );
