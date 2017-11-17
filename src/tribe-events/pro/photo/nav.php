<?php
/**
 * Photo View Nav
 * This file contains the photo view navigation.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/pro/photo/nav.php
 *
 * @package TribeEventsCalendar
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$events_label_plural = tribe_get_event_label_plural();

?>

<h3 class="tribe-events-visuallyhidden"><?php printf( __( '%s List Navigation', 'tribe-events-calendar-pro' ), $events_label_plural ); ?></h3>
<ul class="tribe-events-sub-nav">
	<!-- Display Previous Page Navigation -->
	<?php if ( tribe_has_previous_event() ) : ?>
		<li class="tribe-events-nav-previous">
			<a class="tribe_paged flex align-items-center mb-2 mb-2-md" aria-label="previous events link" href="#" rel="prev"><?php printf( __( '<span class="pagination__control pagination__control--prev"></span>  Previous %s', 'tribe-events-calendar-pro' ), $events_label_plural ); ?></a>
		</li>
		<!-- .tribe-events-nav-left -->
	<?php endif; ?>

	<!-- Display Next Page Navigation -->
	<?php if ( tribe_has_next_event() ) : ?>
		<li class="tribe-events-nav-next">
			<a class="tribe_paged flex align-items-center mb-2 mb-2-md" aria-label="next events link" href="#" rel="prev"><?php printf( __( 'Next %s <span class="pagination__control pagination__control--next"></span>', 'tribe-events-calendar-pro' ), $events_label_plural ); ?></a>
		</li>
	<?php endif; ?>
</ul>
