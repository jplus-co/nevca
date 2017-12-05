<?php
/**
 * Photo View Template
 * The wrapper template for photo view.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/pro/photo.php
 *
 * @package TribeEventsCalendar
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?>

<?php do_action( 'tribe_events_before_template' ); ?>

<div class="flex block-md month-calendar">

	<aside class="mt-5 mt-0-sm flex-basis-35 mb-2-md">
		<!-- Tribe Bar -->
		<?php tribe_get_template_part( 'modules/bar' ); ?>
	</aside>

	<div class="flex-1">
		<!-- Main Events Content -->
		<?php tribe_get_template_part( 'pro/photo/content' ) ?>
	</div>

	<?php do_action( 'tribe_events_after_template' ) ?>
</div>
