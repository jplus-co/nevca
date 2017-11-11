<?php

$context = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render( 'single-team_member.twig', $context );
