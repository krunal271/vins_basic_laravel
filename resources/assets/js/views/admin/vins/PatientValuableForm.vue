<template id="">
	<div class="container">
		<div class="page-header">
			<div class="row">
				<div class="col">
					<h1>Patient Valuable Form</h1>
				</div>
				<div class="col">
					<div class="text-right">
						F/IPD/41
					</div>
				</div>
			</div>
		</div>

		<hr>

		<form action="" method = "post">
			<div class="row form-group">
				<div class="col">
					<div class="col">
						<label>Unit:</label>
					</div>
					<div class="col">
						<input class="form-control" type="text"  name="unit" v-model="PatientValuableForm.unit" v-validate="'required'" id="unit" value="" >
						<span class="help is-danger" v-show="errors.has('unit')">
							Field is required
						</span>
					</div>
				</div>
			</div>

			<div class="row form-group">
				<div class="col">
					<div class="col">
						<label>Patient's Name:</label>
					</div>
					<div class="col">
						<input class="form-control" type="text"  name="patient_name" v-model="PatientValuableForm.patient_name" v-validate="'required'" id="patient_name" value="" >
						<span class="help is-danger" v-show="errors.has('patient_name')">
							Field is required
						</span>
					</div>
				</div>
				<div class="col">
					<div class="col">
						<label>IP No:</label>
					</div>
					<div class="col">
						<input class="form-control" type="text"  name="ip_no" v-model="PatientValuableForm.ip_no" v-validate="'required'" id="ip_no" value="" >
						<span class="help is-danger" v-show="errors.has('ip_no')">
							Field is required
						</span>
					</div>
				</div>
			</div>

			<div class="row form-group">
				<div class="col">
					<div class="col">
						<label>Items Collected By:</label>
					</div>
					<div class="col">
						<input class="form-control" type="text"  name="items_by" v-model="PatientValuableForm.items_by" v-validate="'required'" id="items_by" value="" >
						<span class="help is-danger" v-show="errors.has('items_by')">
							Field is required
						</span>
					</div>
				</div>
				<div class="col">
					<div class="col">
						<label>Details Of Personal Items Collected:</label>
					</div>
					<div class="col">
						<input class="form-control" type="text"  name="details" v-model="PatientValuableForm.details" v-validate="'required'" id="details" value="" >
						<span class="help is-danger" v-show="errors.has('details')">
							Field is required
						</span>
					</div>
				</div>
			</div>

			<hr>

			<div class="form-group">
				<table class="table">
					<thead>
						<tr>
							<th>Sr. No.</th>
							<th>Description</th>
							<th>Handed to Relative</th>
							<th>Kept in Locker</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input class="form-control" type="text" name="sr_no_00" v-model="PatientValuableForm.sr_no_00" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('sr_no_00')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="description_00" v-model="PatientValuableForm.description_00" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('description_00')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="relative_00" v-model="PatientValuableForm.relative_00" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relative_00')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="locker_00" v-model="PatientValuableForm.locker_00" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('locker_00')">
							Field is required
						</span>

							</td>
						</tr>
						<tr>
							<td>
								<input class="form-control" type="text" name="sr_no_01" v-model="PatientValuableForm.sr_no_01" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('sr_no_01')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="description_01" v-model="PatientValuableForm.description_01" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('description_01')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="relative_01" v-model="PatientValuableForm.relative_01" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relative_01')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="locker_01" v-model="PatientValuableForm.locker_01" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('locker_01')">
							Field is required
						</span>

							</td>
						</tr>
						<tr>
							<td>
								<input class="form-control" type="text" name="sr_no_02" v-model="PatientValuableForm.sr_no_02" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('sr_no_02')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="description_02" v-model="PatientValuableForm.description_02" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('description_02')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="relative_02" v-model="PatientValuableForm.relative_02" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relative_02')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="locker_02" v-model="PatientValuableForm.locker_02" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('locker_02')">
							Field is required
						</span>

							</td>
						</tr>
						<tr>
							<td>
								<input class="form-control" type="text" name="sr_no_03" v-model="PatientValuableForm.sr_no_03" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('sr_no_03')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="description_03" v-model="PatientValuableForm.description_03" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('description_03')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="relative_03" v-model="PatientValuableForm.relative_03" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relative_03')">
							Field is required
						</span>
/
							</td>
							<td>
								<input class="form-control" type="text" name="locker_03" v-model="PatientValuableForm.locker_03" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('locker_03')">
							Field is required
						</span>

							</td>
						</tr>
						<tr>
							<td>
								<input class="form-control" type="text" name="sr_no_04" v-model="PatientValuableForm.sr_no_04" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('sr_no_04')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="description_04" v-model="PatientValuableForm.description_04" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('description_04')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="relative_04" v-model="PatientValuableForm.relative_04" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relative_04')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="locker_04" v-model="PatientValuableForm.locker_04" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('locker_04')">
							Field is required
						</span>

							</td>
						</tr>
						<tr>
							<td>
								<input class="form-control" type="text" name="sr_no_05" v-model="PatientValuableForm.sr_no_05" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('sr_no_05')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="description_05" v-model="PatientValuableForm.description_05" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('description_05')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="relative_05" v-model="PatientValuableForm.relative_05" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relative_05')">
							Field is required
						</span>

							</td>
							<td>
								<input class="form-control" type="text" name="locker_05" v-model="PatientValuableForm.locker_05" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('locker_05')">
							Field is required
						</span>

							</td>
						</tr>

					</tbody>
				</table>
				<div class="row form-group"><hr>
					<div class="col">
						<div class="col">
							<label>Sign Of Unit Nurse:</label>
						</div>
						<div class="col">
							<input class="form-control" type="text"  name="sign_nurse" v-model="PatientValuableForm.sign_nurse" v-validate="'required'" id="sign_nurse" value="" >
						<span class="help is-danger" v-show="errors.has('sign_nurse')">
							Field is required
						</span>
						</div>
					</div>
					<div class="col">
						<div class="col">
							<label> Sign Of Security:</label>
						</div>
						<div class="col">
							<input class="form-control" type="text"  name="sign_security" v-model="PatientValuableForm.sign_security" v-validate="'required'" id="sign_security" value="" >
						<span class="help is-danger" v-show="errors.has('sign_security')">
							Field is required
						</span>
						</div>
					</div>
					<div class="col">
						<div class="col">
							<label> Sign Of Sister In Charge:</label>
						</div>
						<div class="col">
							<input class="form-control" type="text"  name="sign_sister" v-model="PatientValuableForm.sign_sister" v-validate="'required'" id="sign_sister" value="" >
						<span class="help is-danger" v-show="errors.has('sign_sister')">
							Field is required
						</span>
						</div>
					</div>
				</div>
			</div>

			To be filled by when the items are handed over to the patient's relatives:

			<div class="row form-group"><hr>
				<table class="table table-bordered table-responsive">
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Released by: (Name and Sign)</th>
							<th>Name and Address of the Relative</th>
							<th>Relationship with the Patient's</th>
							<th>Name and Sign of the Relative</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input class="form-control" type="date" name="date" v-model="PatientValuableForm.date" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('date')">
							Field is required
						</span>
							</td>
							<td>
								<input class="form-control" type="time" name="time" v-model="PatientValuableForm.time" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('time')">
							Field is required
						</span>
							</td>
							<td>
								<input class="form-control" type="text" name="released_by" v-model="PatientValuableForm.released_by" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('released_by')">
							Field is required
						</span>
							</td>
							<td>
								<input class="form-control" type="text" name="name_address" v-model="PatientValuableForm.name_address" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('name_address')">
							Field is required
						</span>
							</td>
							<td>
								<input class="form-control" type="text" name="relationship" v-model="PatientValuableForm.relationship" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('relationship')">
							Field is required
						</span>
							</td>
							<td>
								<input class="form-control" type="text" name="name_sign" v-model="PatientValuableForm.name_sign" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('name_sign')">
							Field is required
						</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			I have recieved the above mentioned items from the  hospital management in good condition.
			The hospital is not responsible for the loss of any other items and i'm not entitled to claim any other items.<hr>

			Its the policy of the hospital that on admission, all the valuables and belongings of the patient be sent home with patient's relatives.
			The above items are deposited in the understanding that in the event of loss, the hospital shall not be held liable beyond the exercise of ordinary care and deligence.

			The Patient authorizes the hospital to dispose of the property without liability.<hr>
			<div class="row form-group">
				<div class="col text-center">
					<input class="form-group btn btn-success" type="button" value="Submit">
				</div>
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
                'PatientValuableForm' : {
									'unit':'',
									'patient_name':'',
									'ip_no':'',
									'items_by':'',
									'details':'',
									'sr_no_00':'',
									'description_00':'',
									'relative_00':'',
									'locker_00':'',
									'sr_no_01':'',
									'description_01':'',
									'relative_01':'',
									'locker_01':'',
									'sr_no_02':'',
									'description_02':'',
									'relative_02':'',
									'locker_02':'',
									'sr_no_03':'',
									'description_03':'',
									'relative_03':'',
									'locker_03':'',
									'sr_no_04':'',
									'description_04':'',
									'relative_04':'',
									'locker_04':'',
									'sr_no_05':'',
									'description_05':'',
									'relative_05':'',
									'locker_05':'',
									'sign_nurse':'',
									'sign_security':'',
									'sign_sister':'',
									'date':'',
									'time':'',
									'released_by':'',
									'name_address':'',
									'relationship':'',
									'name_sign':'',
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },

        savePatientValuableForm() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
                   User.savePatientValuableForm(this.PatientValuableForm).then(
                         (response) => {
                         	console.log(response)
                         	if(response.data.status == 200) {
                         		toastr.success('Patient Valuable Form has been saved', 'PatientValuableForm', {timeOut: 5000});
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
