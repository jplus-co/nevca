<?php
/**
 * List View Nav Template
 * This file loads the list view navigation.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/list/nav.php
 *
 * @package TribeEventsCalendar
 * @version 4.2
 *
 */
global $wp_query;

$events_label_plural = tribe_get_event_label_plural();

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?>

<h3 class="screen-reader-text" tabindex="0"><?php echo esc_html( sprintf( esc_html__( '%s List Navigation', 'the-events-calendar' ), $events_label_plural ) ); ?></h3>
<ul class="tribe-events-sub-nav">
	<!-- Left Navigation -->
	<?php if ( tribe_has_previous_event() ) : ?>
			<a class="flex align-items-center" aria-label="previous events link" href="<?php echo esc_url( tribe_get_listview_prev_link() ); ?>" rel="prev"><?php printf( '<span class="pagination__control pagination__control--prev"></span> ' . esc_html__( 'Previous %s', 'the-events-calendar' ), $events_label_plural ); ?></a>
		<!-- .tribe-events-nav-left -->
	<?php endif; ?>


	<!-- Right Navigation -->
	<?php if ( tribe_has_next_event() ) : ?>
			<a class="flex align-items-center justify-content-end" aria-label="next events link" href="<?php echo esc_url( tribe_get_listview_next_link() ); ?>" rel="next"><?php printf( esc_html__( 'Next %s', 'the-events-calendar' ), $events_label_plural . '<span class="pagination__control pagination__control--next"></span> '); ?></a>
		<!-- .tribe-events-nav-right -->
	<?php endif; ?>
</ul>
