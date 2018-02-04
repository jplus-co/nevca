<?php
/**
 * Day View Template
 * The wrapper template for day view.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/day.php
 *
 * @package TribeEventsCalendar
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

do_action( 'tribe_events_before_template' );
?>
<div class="flex block-md">

	<aside class="mt-5 mt-0-sm flex-basis-35">
		<!-- Tribe Bar -->
		<?php tribe_get_template_part( 'modules/bar' ); ?>
	</aside>

	<div class="flex-1 block-md pl-4p pl-0-md">
		<!-- Main Events Content -->
		<?php tribe_get_template_part( 'day/content' ) ?>
	</div>

</div>

<div class="tribe-clear"></div>

<?php
do_action( 'tribe_events_after_template' );
