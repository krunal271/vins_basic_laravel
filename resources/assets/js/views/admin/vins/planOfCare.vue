<template>
<div class="container">
	<div class="page-header">
		<div class="row">
			<div class="col-md-6">
				<h1>Plan of Care</h1>
			</div>
			<div class="col-md-6">
				<div class="text-right">
					DOC NO. F/IPD/48 <br>
					REV. No. 0.2 <br>
					WEF 31-01-2015
				</div>
			</div>
		</div>
	</div>


	<form method="post">
		<div class="row form-group">
			<div class="col-md-6">
				<label>Diagnosis</label>
			</div>
			<div class="col-md-6">
				<input class="form-control" type="text" name="diagnosis" value="" v-model ="planOfCareData.diagnosis"/>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<label>Patient's Needs and Treatment Goals : </label>
			</div>
			<div class="col-md-6">
				<input class="form-control" type="text" name="needs_goals" value="" v-model ="planOfCareData.needs_goals"/>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<label>Treatment Plan : </label>
			</div>
			<div class="col-md-6">
				<input class="form-control" type="text" name="treatment_plan" value="" v-model ="planOfCareData.treatment_plan"/>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<label>Preventive Aspects : </label>
			</div>
			<div class="col-md-6">
				<textarea class="form-control" name="preventive_aspects" value=""  value="" v-model ="planOfCareData.preventive_aspects"></textarea>
			</div>
		</div>

		<div class="row form-group">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Progress</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_00" value="" v-model ="planOfCareData.progress_00"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_00" value="" v-model ="planOfCareData.date_00"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_01" value="" v-model ="planOfCareData.progress_01"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_01" value="" v-model ="planOfCareData.date_01"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_02" value="" v-model ="planOfCareData.progress_02"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_02" value="" v-model ="planOfCareData.date_02"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_03" value="" v-model ="planOfCareData.progress_03"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_03" value="" v-model ="planOfCareData.date_03"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_04" value="" v-model ="planOfCareData.progress_04"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_04" value="" v-model ="planOfCareData.date_04"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_05" value="" v-model ="planOfCareData.progress_05"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_05" value="" v-model ="planOfCareData.date_05"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_06" value="" v-model ="planOfCareData.progress_06"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_06" value="" v-model ="planOfCareData.date_06"/>
						</td>
					</tr>
					<tr>
						<td>
							<input class="form-control" type="text" name="progress_07" value="" v-model ="planOfCareData.progress_07"/>
						</td>
						<td>
							<input class="form-control" type="date" name="date_07" value="" v-model ="planOfCareData.date_07"/>
						</td>
					</tr>
				</tbody>
			</table>

			<div class="row form-group">
				<div class="col-md-6">
					<label>Note on Discharge : </label>
				</div>
				<div class="col-md-6">
					<textarea class="form-control" name="note_discharge" value="" v-model ="planOfCareData.note_discharge"></textarea>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<button class="btn btn-success" type="button" @click="savePlanOfCare()">Submit</button>
		</div>
	</form>
</div>
</template>


<script >
	import User from '../../../api/users.js';
    export default {
        data() {
            return {
                'footer' : 'footer',
                'currentYear': new Date().getFullYear(),
                'planOfCareData' : {
									'diagnosis' :'' ,
					        'needs_goals' :'',
					        'treatment_plan':'',
					        'preventive_aspects' :'',
					        'progress_00' :'',
					        'date_00' :'',
					        'progress_01' :'',
					        'date_01' :'',
					        'progress_02':'',
					        'date_02':'',
					        'progress_03' :'',
					        'date_03' :'',
					        'progress_04' :'',
					        'date_04' :'',
					        'progress_05' :'',
					        'date_05' :'',
					        'progress_06' :'',
					        'date_06' :'',
					        'progress_07' :'',
					        'date_07':'',
					        'note_discharge' :'',
                }
            }
        },
				methods: {
				GetSelectComponent(componentName) {
					 this.$router.push({name: componentName})
				},
				savePlanOfCare() {
					this.$validator.validateAll().then(
							(response) => {
								if (!this.errors.any()) {
									 $("body .js-loader").removeClass('d-none');
							User.savePlanOfCare(this.planOfCareData).then(
										(response) => {
											if(response.data.code == 200) {
												toastr.success('Plan Of Care details have been saved', 'plan of care detail', {timeOut: 5000});
											}
											 $("body .js-loader").addClass('d-none');

										},
										(error) => {
											 $("body .js-loader").addClass('d-none');

										}
										)
						}
					},
								(error) => {
								}
								)

			}
			},

		}
</script>
