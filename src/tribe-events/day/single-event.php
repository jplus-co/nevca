<?php
/**
 * Day View Single Event
 * This file contains one event in the day view
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/day/single-event.php
 *
 * @version 4.5.11
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$venue_details = tribe_get_venue_details();

// Venue microformats
$has_venue         = ( $venue_details ) ? ' vcard' : '';
$has_venue_address = ( ! empty( $venue_details['address'] ) ) ? ' location' : '';

// The address string via tribe_get_venue_details will often be populated even when there's
// no address, so let's get the address string on its own for a couple of checks below.
$venue_address = tribe_get_address();
?>

<div class="flex align-items-center mb-3 single-event-item">
	<div class="flex-basis-40 pr-2p list-event-image">
		<!-- Event Image -->
		<?php echo tribe_event_featured_image( null, 'medium' ); ?>
	</div>

	<div class="flex-1 list-event-content">
				<!-- Event Meta -->
				<?php do_action( 'tribe_events_before_the_meta' ) ?>
		<div class="tribe-events-event-meta <?php echo esc_attr( $has_venue . $has_venue_address ); ?>">

			<!-- Schedule & Recurrence Details -->
			<div class="tribe-updated published time-details">
				<?php echo tribe_events_event_schedule_details(); ?>
			</div>

		</div><!-- .tribe-events-event-meta -->

		<div class="rule"></div>
		
		<!-- Event Title -->
		<?php do_action( 'tribe_events_before_the_event_title' ) ?>
		<h2 class="tribe-events-list-event-title summary">
			<a class="url" href="<?php echo esc_url( tribe_get_event_link() ); ?>" title="<?php the_title_attribute() ?>" rel="bookmark">
				<?php the_title() ?>
			</a>
		</h2>
		<?php do_action( 'tribe_events_after_the_event_title' ) ?>

		<?php if ( tribe_get_cost() ) : ?>
			<div class="tribe-events-event-cost">
				<span class="ticket-cost"><?php echo tribe_get_cost( null, true ); ?></span>
				<?php
				/** This action is documented in the-events-calendar/src/views/list/single-event.php */
				do_action( 'tribe_events_inside_cost' )
				?>
			</div>
		<?php endif; ?>

		<?php do_action( 'tribe_events_after_the_meta' ) ?>

		<!-- Event Content -->
		<?php do_action( 'tribe_events_before_the_content' ) ?>
		<div class="tribe-events-list-event-description tribe-events-content description entry-summary">
			<?php echo tribe_events_get_the_excerpt(); ?>
			<a href="<?php echo esc_url( tribe_get_event_link() ); ?>" class="tribe-events-read-more flex align-items-center" rel="bookmark">
				<?php esc_html_e( 'Find out more', 'the-events-calendar' ) ?><span class="pagination__control pagination__control--next"></span>
			</a>
		</div><!-- .tribe-events-list-event-description -->
		<?php do_action( 'tribe_events_after_the_content' ); ?>
	</div>
</div>