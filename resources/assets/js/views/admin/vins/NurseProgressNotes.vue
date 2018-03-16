<template id="">
	<div class="container">
		<div class="page-header">
			<div class="row">
				<div class="col-md-8">
					<h1>Nurse's Progress Notes</h1>
				</div>
				<div class="col-md-4">
					<div class="text-right">
						DOC NO. FMT/HIC/09 <br>
						REV. No. 0.1 <br>
						WEF 10-10-2015
					</div>
				</div>
			</div>
		</div>
		<form action="" method="post">
			<div class="row form-group">
				<table class="table table-bordered table-responsive">
					<thead>
						<tr>
							<th class="text-center">Date</th>
							<th class="text-center">Time</th>
							<th class="text-center">Progress</th>
							<th class="text-center">Staff Name</th>
						</tr>
					</thead>
					<tbody>

						<tr>
							<td>
								<input class="form-control" type="date" name="date_00" v-model="NurseProgressNotes.date_00" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_00')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_00" v-model="NurseProgressNotes.time_00" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_00')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_00" v-model="NurseProgressNotes.progress_00" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_00')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_00" v-model="NurseProgressNotes.staff_name_00" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_00')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_01" v-model="NurseProgressNotes.date_01" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_01')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_01" v-model="NurseProgressNotes.time_01" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_01')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_01" v-model="NurseProgressNotes.progress_01" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_01')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_01" v-model="NurseProgressNotes.staff_name_01" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_01')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_02" v-model="NurseProgressNotes.date_02" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_02')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_02" v-model="NurseProgressNotes.time_02" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_02')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_02" v-model="NurseProgressNotes.progress_02" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_02')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_02" v-model="NurseProgressNotes.staff_name_02" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_02')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_03" v-model="NurseProgressNotes.date_03" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_03')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_03" v-model="NurseProgressNotes.time_03" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_03')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_03" v-model="NurseProgressNotes.progress_03" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_03')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_03" v-model="NurseProgressNotes.staff_name_03" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_03')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_04" v-model="NurseProgressNotes.date_04" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_04')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_04" v-model="NurseProgressNotes.time_04" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_04')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_04" v-model="NurseProgressNotes.progress_04" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_04')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_04" v-model="NurseProgressNotes.staff_name_04" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_04')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_05" v-model="NurseProgressNotes.date_05" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_05')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_05" v-model="NurseProgressNotes.time_05" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_05')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_05" v-model="NurseProgressNotes.progress_05" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_05')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_05" v-model="NurseProgressNotes.staff_name_05" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_05')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_06" v-model="NurseProgressNotes.date_06" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_06')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_06" v-model="NurseProgressNotes.time_06" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_06')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_06" v-model="NurseProgressNotes.progress_06" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_06')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_06" v-model="NurseProgressNotes.staff_name_06" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_06')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_07" v-model="NurseProgressNotes.date_07" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_07')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_07" v-model="NurseProgressNotes.time_07" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_07')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_07" v-model="NurseProgressNotes.progress_07" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_07')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_07" v-model="NurseProgressNotes.staff_name_07" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_07')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_08" v-model="NurseProgressNotes.date_08" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_08')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_08" v-model="NurseProgressNotes.time_08" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_08')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_08" v-model="NurseProgressNotes.progress_08" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_08')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_08" v-model="NurseProgressNotes.staff_name_08" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_08')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_09" v-model="NurseProgressNotes.date_09" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_09')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_09" v-model="NurseProgressNotes.time_09" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_09')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_09" v-model="NurseProgressNotes.progress_09" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_09')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_09" v-model="NurseProgressNotes.staff_name_09" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_09')">
									Staff name is required
								</span>
							</td>

						</tr>
						<tr>
							<td>
								<input class="form-control" type="date" name="date_10" v-model="NurseProgressNotes.date_10" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('date_10')">
									Date is required
								</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time_10" v-model="NurseProgressNotes.time_10" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('time_10')">
									Time is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="progress_10" v-model="NurseProgressNotes.progress_10" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('progress_10')">
									Progress is required
								</span>
							</td>
							<td>
								<input class="form-control" type="text" name="staff_name_10" v-model="NurseProgressNotes.staff_name_10" v-validate="'required'" value="">
								<span class="help is-danger" v-show="errors.has('staff_name_10')">
									Staff name is required
								</span>
							</td>

						</tr>
					</tbody>
				</table>
			</div>
			<div class="row form-group text-center">
				<button class="btn btn-success" type="button" @click="saveNurseProgressNotes()">Submit</button>
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
                'NurseProgressNotes' : {
									'date_00': '',
									'date_01': '',
									'date_02': '',
									'date_03': '',
									'date_04': '',
									'date_05': '',
									'date_06': '',
									'date_07': '',
									'date_08': '',
									'date_09': '',
									'date_10': '',
									'time_00': '',
									'time_01': '',
									'time_02': '',
									'time_03': '',
									'time_04': '',
									'time_05': '',
									'time_06': '',
									'time_07': '',
									'time_08': '',
									'time_09': '',
									'time_10': '',
									'progress_00': '',
									'progress_01': '',
									'progress_02': '',
									'progress_03': '',
									'progress_04': '',
									'progress_05': '',
									'progress_06': '',
									'progress_07': '',
									'progress_08': '',
									'progress_09': '',
									'progress_10': '',
									'staff_name_00': '',
									'staff_name_01': '',
									'staff_name_02': '',
									'staff_name_03': '',
									'staff_name_04': '',
									'staff_name_05': '',
									'staff_name_06': '',
									'staff_name_07': '',
									'staff_name_08': '',
									'staff_name_09': '',
									'staff_name_10': '',
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },

        saveNurseProgressNotes() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
                   User.saveNurseProgressNotes(this.NurseProgressNotes).then(
                         (response) => {
                         	console.log(response)
                         	if(response.data.status == 200) {
                         		toastr.success('Nurse Progress Notes have been saved', 'Nurse Progress Notes', {timeOut: 5000});
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
