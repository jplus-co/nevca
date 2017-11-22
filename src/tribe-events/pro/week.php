<?php
/**
 * Week View Template
 * The wrapper template for week view.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/pro/week.php
 *
 * @package TribeEventsCalendar
 *
 * @version 4.3.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?>

<?php do_action( 'tribe_events_before_template' ) ?>


<div class="flex block-md month-calendar">

	<aside class="mt-5 mt-0-sm flex-basis-25 mb-2-md">
		<!-- Tribe Bar -->
		<?php tribe_get_template_part( 'modules/bar' ); ?>
	</aside>

	<div class="flex-1">
		<!-- Main Events Content -->
		<?php tribe_get_template_part( 'pro/week/content' ) ?>
	</div>

<?php
do_action( 'tribe_events_after_template' );
?></div>
