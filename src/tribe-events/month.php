<?php
/**
 * Month View Template
 * The wrapper template for month view.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/month.php
 *
 * @package TribeEventsCalendar
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

do_action( 'tribe_events_before_template' );

?>

<div class="flex">

	<aside class="pt-2p flex-basis-25">
		<!-- Tribe Bar -->
		<?php tribe_get_template_part( 'modules/bar' ) ?>
	</aside>

	<div class="flex-1 pl-4p">
		<!-- Main Events Content -->
		<?php tribe_get_template_part( 'month/content' ) ?>
	</div>

</div>

<?php do_action( 'tribe_events_after_template' ) ?>
