<template>
	<div class="modal fade custom-modal" id="edit_time_slot">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Edit Time Slots</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="hours-info">
							<div class="row form-row hours-cont">
								<div class="col-12 col-md-10">
									<div class="row form-row">
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>Start Time</label>
												<select class="form-control">
													<option>-</option>
													<option selected>12.00 am</option>
													<option>12.30 am</option>
													<option>1.00 am</option>
													<option>1.30 am</option>
												</select>
											</div>
										</div>
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>End Time</label>
												<select class="form-control">
													<option>-</option>
													<option>12.00 am</option>
													<option selected>12.30 am</option>
													<option>1.00 am</option>
													<option>1.30 am</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row form-row hours-cont">
								<div class="col-12 col-md-10">
									<div class="row form-row">
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>Start Time</label>
												<select class="form-control">
													<option>-</option>
													<option>12.00 am</option>
													<option selected>12.30 am</option>
													<option>1.00 am</option>
													<option>1.30 am</option>
												</select>
											</div>
										</div>
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>End Time</label>
												<select class="form-control">
													<option>-</option>
													<option>12.00 am</option>
													<option>12.30 am</option>
													<option selected>1.00 am</option>
													<option>1.30 am</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-2">
									<label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>
								</div>
							</div>
							<div class="row form-row hours-cont">
								<div class="col-12 col-md-10">
									<div class="row form-row">
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>Start Time</label>
												<select class="form-control">
													<option>-</option>
													<option>12.00 am</option>
													<option>12.30 am</option>
													<option selected>1.00 am</option>
													<option>1.30 am</option>
												</select>
											</div>
										</div>
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label>End Time</label>
												<select class="form-control">
													<option>-</option>
													<option>12.00 am</option>
													<option>12.30 am</option>
													<option>1.00 am</option>
													<option selected>1.30 am</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-2">
									<label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>
								</div>
							</div>
						</div>
						<div class="add-more mb-3">
							<a href="javascript:void(0);" class="add-hours"><i class="fa fa-plus-circle"></i> Add More</a>
						</div>
						<div class="submit-section text-center">
							<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'UpdateModel',
	
}
</script>