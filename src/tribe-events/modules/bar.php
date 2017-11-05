<?php
/**
 * Events Navigation Bar Module Template
 * Renders our events navigation bar used across our views
 *
 * $filters and $views variables are loaded in and coming from
 * the show funcion in: lib/Bar.php
 *
 * Override this template in your own theme by creating a file at:
 *
 *     [your-theme]/tribe-events/modules/bar.php
 *
 * @package  TribeEventsCalendar
 * @version  4.3.5
 */
?>

<?php

$filters = tribe_events_get_filters();
$views   = tribe_events_get_views();

$current_url = tribe_events_get_current_filter_url();
?>

<?php do_action( 'tribe_events_bar_before_template' ) ?>
<div id="tribe-events-bar" class="mr-3">

	<form id="tribe-bar-form" name="tribe-bar-form" method="post" action="<?php echo esc_attr( $current_url ); ?>">
		<!-- Mobile Filters Toggle -->
		<div id="tribe-bar-collapse-toggle" class="mb-4<?php if ( count( $views ) == 1 ) { ?> ' tribe-bar-collapse-toggle-full-width'<?php } ?>">
			<?php printf( esc_html__( 'Find %s', 'the-events-calendar' ), tribe_get_event_label_plural() ); ?><span class="ml-1">▾</span>
		</div>

		<?php if ( ! empty( $filters ) ) { ?>
			<div class="tribe-bar-filters flex flex-column z-index-1">
					<?php foreach ( $filters as $filter ) : ?>
						<div class="tribe-bar-filter <?php echo esc_attr( $filter['name'] ) ?>-filter">
							<label class="label-<?php echo esc_attr( $filter['name'] ) ?>" for="<?php echo esc_attr( $filter['name'] ) ?>"><?php echo $filter['caption'] ?></label>
							<?php echo $filter['html'] ?>
						</div>
					<?php endforeach; ?>
					<button class="button button--reset mb-4" type="submit" name="submit-bar">
						<span><?php printf( esc_attr__( 'Find %s', 'the-events-calendar' ), tribe_get_event_label_plural() ); ?></span>
					</button>
			</div><!-- .tribe-bar-filters -->
		<?php } // if ( !empty( $filters ) ) ?>

		<!-- Views -->
		<?php if ( count( $views ) > 1 ) { ?>
			<div id="tribe-bar-views" class="mt-4">
				<div class="tribe-bar-views-inner">
					<h3 class="tribe-events-visuallyhidden"><?php esc_html_e( 'Event Views Navigation', 'the-events-calendar' ) ?></h3>
					<label><?php esc_html_e( 'View As', 'the-events-calendar' ); ?></label>
					<select class="tribe-bar-views-select tribe-no-param" name="tribe-bar-view">
						<?php foreach ( $views as $view ) : ?>
							<option <?php echo tribe_is_view( $view['displaying'] ) ? 'selected' : 'tribe-inactive' ?> value="<?php echo esc_attr( $view['url'] ); ?>" data-view="<?php echo esc_attr( $view['displaying'] ); ?>">
								<?php echo $view['anchor']; ?>
							</option>
						<?php endforeach; ?>
					</select>
				</div>
				<!-- .tribe-bar-views-inner -->
			</div><!-- .tribe-bar-views -->
		<?php } // if ( count( $views ) > 1 ) ?>

	</form>
	<!-- #tribe-bar-form -->

</div><!-- #tribe-events-bar -->
<?php
do_action( 'tribe_events_bar_after_template' );
