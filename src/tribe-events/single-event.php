<?php
/**
* Single Event Template
* A single event. This displays the event title, description, meta, and
* optionally, the Google map for the event.
*
* Override this template in your own theme by creating a file at [your-theme]/tribe-events/single-event.php
*
* @package TribeEventsCalendar
* @version  4.3
*
*/

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$events_label_singular = tribe_get_event_label_singular();
$events_label_plural = tribe_get_event_label_plural();

$event_id = get_the_ID();

?>
<div class="view" namespace="events-single-event">
	<div id="tribe-events-content" class="tribe-events-single">

		<p class="tribe-events-back flex align-items-center">
			<span class="pagination__control pagination__control--prev"></span>
			<a href="<?php echo esc_url( tribe_get_events_link() ); ?>"> <?php printf(esc_html_x( 'All %s', '%s Events plural label', 'the-events-calendar' ), $events_label_plural ); ?></a>
		</p>

		<div class="tribe-events-schedule tribe-clearfix" style="background-image: url(<?php echo tribe_event_featured_image( $event_id, 'full', false, false); ?>)">
			<div class="relative z-index-1 tc">
				<?php the_title( '<h1 class="tribe-events-single-event-title">', '</h1>' ); ?>
				<?php echo tribe_events_event_schedule_details( $event_id, '<h2 class="tribe_events_event_schedule_details">', '</h2>' ); ?>
				<?php if ( tribe_get_cost() ) : ?>
					<div class="tribe-events-cost pt-1"><?php echo tribe_get_cost( null, true ) ?></div>
				<?php endif; ?>
			<!-- Notices -->
				<?php tribe_the_notices() ?>
			</div>
		</div>

	<?php while ( have_posts() ) :  the_post(); ?>
		<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<!-- Event featured image, but exclude link -->

			<!-- Event content -->
			<?php do_action( 'tribe_events_single_event_before_the_content' ) ?>
			<div class="tribe-events-single-event-description tribe-events-content pr-20p pr-sm-0">
				<?php the_content(); ?>
			</div>
			<!-- .tribe-events-single-event-description -->
			<?php do_action( 'tribe_events_single_event_after_the_content' ) ?>

			<!-- Event meta -->
			<?php do_action( 'tribe_events_single_event_before_the_meta' ) ?>
			<?php tribe_get_template_part( 'modules/meta' ); ?>
			<?php do_action( 'tribe_events_single_event_after_the_meta' ) ?>
		</div> <!-- #post-x -->
		<!-- <?php if ( get_post_type() == Tribe__Events__Main::POSTTYPE && tribe_get_option( 'showComments', false ) ) comments_template() ?>
		<?php endwhile; ?> -->

		<!-- Event footer -->
		<div id="tribe-events-footer">
			<!-- Navigation -->
			<h3 class="tribe-events-visuallyhidden"><?php printf( esc_html__( '%s Navigation', 'the-events-calendar' ), $events_label_singular ); ?></h3>
			<ul class="tribe-events-sub-nav">
				<li class="tribe-events-nav-previous"><?php tribe_the_prev_event_link( '<div class="flex align-items-center"><span class="pagination__control pagination__control--prev"></span> %title%</div>' ) ?></li>
				<li class="tribe-events-nav-next"><?php tribe_the_next_event_link( '<div class="flex align-items-center justify-content-end">%title% <span class="pagination__control pagination__control--next"></span></div>' ) ?></li>
			</ul>
			<!-- .tribe-events-sub-nav -->
		</div><!-- #tribe-events-footer -->

	</div><!-- #tribe-events-content -->
</div><!-- .view (barba.js) -->
