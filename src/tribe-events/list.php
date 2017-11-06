<?php
/**
 * List View Template
 * The wrapper template for a list of events. This includes the Past Events and Upcoming Events views
 * as well as those same views filtered to a specific category.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/list.php
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

 	<aside class="mt-5 mt-0-sm flex-basis-25">
 		<!-- Tribe Bar -->
 		<?php tribe_get_template_part( 'modules/bar' ) ?>
 	</aside>

 	<div class="flex-1 block-md pl-4p pl-0-md">
 		<!-- Main Events Content -->
 		<?php tribe_get_template_part( 'list/content' ) ?>
 	</div>

 </div>

 <?php do_action( 'tribe_events_after_template' ) ?>
