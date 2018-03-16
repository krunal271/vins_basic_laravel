<template>
<div class="container">
	<div class="page-header">
		<div class="row">
			<div class="col-md-6">
			<h1>ER Observation</h1>
			</div>
			<div class="col-md-6">
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
			<div class="col-md-6">
				<div class="col-md-6">
		      <label for="date">Date : </label>
				</div>
				<div class="col-md-6">
		      <input class="form-control" type="date" name="date" value="" />

				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
		      <label for="triage_category" class="control-label">Triage Category : </label>
				</div>
				<div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "triage_category" name="triage_category" value="" :class="{'is-danger': errors.has('triage_category') }" v-model="erObservationData.triage_category"/>
					<span class="help is-danger" v-show="errors.has('triage_category')">
						Field is required
					</span>

				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
		      <label for="diagnosis" class="control-label">Diagnosis : </label>
				</div>
				<div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "diagnosis" name="diagnosis" value="" :class="{'is-danger': errors.has('diagnosis') }" v-model="erObservationData.diagnosis"/>
	 			 <span class="help is-danger" v-show="errors.has('diagnosis')">
	 								 Field is required
	 							 </span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
		      <label for="investigation" class="control-label">Investigations : </label>
				</div>
				<div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "investigation" name="investigation" value="" :class="{'is-danger': errors.has('investigation') }" v-model="erObservationData.investigation"/>
 				 <span class="help is-danger" v-show="errors.has('investigation')">
 									 Field is required
 								 </span>

				</div>
			</div>
		</div>

		<div class="row form-group">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Time</th>
						<th><input class="form-control" type="time" name="time_01" value=" " />

						</th>
						<th><input class="form-control" type="time" name="time_02" value=" " />

						</th>
						<th><input class="form-control" type="time" name="time_03" value=" " />

						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Pulse </th>
						<td><input class="form-control" type="date" name="pulse_01" value=""  v-model="erObservationData.pulse_01" />


						</td>
						<td><input class="form-control" type="text" name="pulse_02" value=" " v-model="erObservationData.pulse_02" />

						</td>
						<td><input class="form-control" type="text" name="pulse_03" value=" " v-model="erObservationData.pulse_03" />

						</td>
					</tr>
					<tr>
						<th>BP </th>
						<td><input class="form-control" type="text" name="bp_01" value=" " v-model="erObservationData.bp_01"/>

						</td>
						<td><input class="form-control" type="text" name="bp_02" value=" " v-model="erObservationData.bp_02" />

						</td>
						<td><input class="form-control" type="text" name="bp_03" value=" " v-model="erObservationData.bp_03" />

						</td>
					</tr>
					<tr>
						<th>SPO2 </th>
						<td><input class="form-control" type="text" name="spo2_01" value=" " v-model="erObservationData.spo2_01" />

						</td>
						<td><input class="form-control" type="text" name="spo2_02" value=" " v-model="erObservationData.spo2_02" />

						</td>
						<td><input class="form-control" type="text" name="spo2_03" value=" "  v-model="erObservationData.spo2_03"/>

						</td>
					</tr>
					<tr>
						<th>RR </th>
						<td><input class="form-control" type="text" name="rr_01" value=" "  v-model="erObservationData.rr_01"/>

						</td>
						<td><input class="form-control" type="text" name="rr_02" value=" " v-model="erObservationData.rr_02" />

						</td>
						<td><input class="form-control" type="text" name="rr_03" value=" "  v-model="erObservationData.rr_03" />

						</td>
					</tr>
					<tr>
						<th>GCS </th>
						<td><input class="form-control" type="text" name="gcs_01" value=" " v-model="erObservationData.gcs_01" />

						</td>
						<td><input class="form-control" type="text" name="gcs_02" value=" " v-model="erObservationData.gcs_02" />

						</td>
						<td><input class="form-control" type="text" name="gcs_03" value=" " v-model="erObservationData.gcs_03" />

						</td>
					</tr>
					<tr>
						<th>Temprature </th>
						<td><input class="form-control" type="text" name="temp_01" value=" " v-model="erObservationData.temp_01"/>

						</td>
						<td><input class="form-control" type="text" name="temp_02" value=" " v-model="erObservationData.temp_02" />

						</td>
						<td><input class="form-control" type="text" name="temp_03" value=" "  v-model="erObservationData.temp_03" />

						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<hr />

		<div class="row form-group">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th> IV Infusion</th>
						<th> QTY</TH>
						<th> Start Time</th>
						<th> End Time</th>
						<th> Remarks</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="text" name="iv_infusion_01" class="form-control" value=" " v-model="erObservationData.iv_infusion_01" />

					 </td>
						<td><input type="text" name="qty_01" class="form-control" value=" " v-model="erObservationData.qty_01" />

					 </td>
						<td><input type="time" name="time_start_01"  class="form-control" value=" " v-model="erObservationData.time_start_01"/>

					</td>
						<td><input type="time" name="time_end_01"  class="form-control" value=" " v-model="erObservationData.time_end_01"/>

					</td>
						<td><input type="text" name="remarks_01" class="form-control" value=" " v-model="erObservationData.remarks_01"/>

					 </td>
					</tr>
					<tr>
						<td><input type="text" name="iv_infusion_02" class="form-control" value=" "  v-model="erObservationData.iv_infusion_02">

					 </td>
						<td><input type="text" name="qty_02" class="form-control" value=" "  v-model="erObservationData.qty_02">

					 </td>
						<td><input type="time" name="time_start_02"  class="form-control" value=" "  v-model="erObservationData.time_start_02">
					</td>
						<td><input type="time" name="time_end_02"  class="form-control" value=" "  v-model="erObservationData.time_end_02">

					</td>
						<td><input type="text" name="remarks_02" class="form-control" value=" "  v-model="erObservationData.remarks_02">

					 </td>
					</tr>
					<tr>
						<td><input type="text" name="iv_infusion_03" class="form-control" value=" "  v-model="erObservationData.iv_infusion_03">

					 </td>
						<td><input type="text" name="qty_03" class="form-control" value=" "  v-model="erObservationData.qty_03">

					 </td>
						<td><input type="time" name="time_start_03"  class="form-control" value=" "  v-model="erObservationData.time_start_03">

					</td>
						<td><input type="time" name="time_end_03"  class="form-control" value=" "  v-model="erObservationData.time_end_03">

					</td>
						<td><input type="text" name="remarks_03" class="form-control" value=" "  v-model="erObservationData.remarks_03">

					 </td>
					</tr>
					<tr>
						<td><input type="text" name="iv_infusion_04" class="form-control" value=" "  v-model="erObservationData.iv_infusion_04">

					 </td>
						<td><input type="text" name="qty_04" class="form-control" value=" "  v-model="erObservationData.qty_04">

					 </td>
						<td><input type="time" name="time_start_04"  class="form-control" value=" "  v-model="erObservationData.time_start_04">

					</td>
						<td><input type="time" name="time_end_04"  class="form-control" value=" "  v-model="erObservationData.time_end_04">

					</td>
						<td><input type="text" name="remarks_04" class="form-control" value=" "  v-model="erObservationData.remarks_04">

					 </td>
					</tr>
				</tbody>
			</table>
		</div>

		<hr />
		<div class="row">
			<h3>Medication Administration</h3>
		</div>

		<div class="row form-group">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Name of the Drug</th>
						<th>Dosage</TH>
						<th>Routine</th>
						<th>Administration By</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="text" name="name_drug_01" class="form-control" value=" "  v-model="erObservationData.name_drug_01">

						 </td>
						<td><input type="text" name="dosage_01" class="form-control" value=" "  v-model="erObservationData.dosage_01">

						 </td>
						<td><input type="text" name="routine_01" class="form-control" value=" "  v-model="erObservationData.routine_01">

						 </td>
						<td><input type="text" name="administration_by_01"  class="form-control" value=" "  v-model="erObservationData.administration_by_01">

						 </td>
						<td><input type="time" name="medication_time_01" class="form-control" value=" "  v-model="erObservationData.medication_time_01">

						 </td>
				  </tr>
					<tr>
						<td><input type="text" name="name_drug_02" class="form-control" value=" "  v-model="erObservationData.name_drug_02">

						 </td>
						<td><input type="text" name="dosage_02" class="form-control" value=" "  v-model="erObservationData.dosage_02">

						 </td>
						<td><input type="text" name="routine_02" class="form-control" value=" "  v-model="erObservationData.routine_02">

						 </td>
						<td><input type="text" name="administration_by_02"  class="form-control" value=" "  v-model="erObservationData.administration_by_02">

						 </td>
						<td><input type="time" name="medication_time_02" class="form-control" value=" "  v-model="erObservationData.medication_time_02">

						 </td>
				  </tr>
					<tr>
						<td><input type="text" name="name_drug_03" class="form-control" value=" "  v-model="erObservationData.name_drug_03">

						 </td>
						<td><input type="text" name="dosage_03" class="form-control" value=" "  v-model="erObservationData.dosage_03">

						 </td>
						<td><input type="text" name="routine_03" class="form-control" value=" "  v-model="erObservationData.routine_03">

						 </td>
						<td><input type="text" name="administration_by_03"  class="form-control" value=" "  v-model="erObservationData.administration_by_03">

						 </td>
						<td><input type="time" name="medication_time_03" class="form-control" value=" "  v-model="erObservationData.medication_time_03">

						 </td>
				  </tr>
					<tr>
						<td><input type="text" name="name_drug_04" class="form-control" value=" "  v-model="erObservationData.name_drug_04">

						 </td>
						<td><input type="text" name="dosage_04" class="form-control" value=" "  v-model="erObservationData.dosage_04">

						 </td>
						<td><input type="text" name="routine_04" class="form-control" value=" "  v-model="erObservationData.routine_04">

						 </td>
						<td><input type="text" name="administration_by_04"  class="form-control" value=" "  v-model="erObservationData.administration_by_04">

						 </td>
						<td><input type="time" name="medication_time_04" class="form-control" value=" "  v-model="erObservationData.medication_time_04">

						 </td>
				  </tr>
					<tr>
						<td><input type="text" name="name_drug_05" class="form-control" value=" "  v-model="erObservationData.name_drug_05">

						 </td>
						<td><input type="text" name="dosage_05" class="form-control" value=" "  v-model="erObservationData.dosage_05">

						 </td>
						<td><input type="text" name="routine_05" class="form-control" value=" "  v-model="erObservationData.routine_05">

						 </td>
						<td><input type="text" name="administration_by_05"  class="form-control" value=" "  v-model="erObservationData.administration_by_05">

						 </td>
						<td><input type="time" name="medication_time_05" class="form-control" value=" "  v-model="erObservationData.medication_time_05">

						 </td>
				  </tr>
				</tbody>
			</table>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
		      <label for="patient_shifted_to" class="control-label">Patient shifted to :</label>
				</div>
				<div class="col-md-6">
		      <input class="form-control" type = "text" v-validate="'required'" id = "patient_shifted_to" name="patient_shifted_to" value="" :class="{'is-danger': errors.has('patient_shifted_to') }" v-model="erObservationData.patient_shifted_to"/>
					<span class="help is-danger" v-show="errors.has('patient_shifted_to')">
										Field is required
									</span>

				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
		      <label for="er_nurse" class="control-label">ER nurse :</label>
				</div>
				<div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "er_nurse" name="er_nurse" value="" :class="{'is-danger': errors.has('er_nurse') }" v-model="erObservationData.er_nurse"/>
					<span class="help is-danger" v-show="errors.has('er_nurse')">
										Field is required
									</span>
				</div>
			</div>
		</div>
		<div class="form-group text-center">
			<button class="btn btn-success" type="submit">Submit</button>
		</div>
	</form>
</div>
</body>
</template>

<script >
	import User from '../../../api/users.js';
    export default {
        data() {
            return {
                'footer' : 'footer',
                'currentYear': new Date().getFullYear(),
                'erObservationData' : {
									'date':'',
									'triage_category':'',
									'diagnosis':'',
									'investigation':'',
									'time_01':'',
									'time_02':'',
									'time_03':'',
									'pulse_01':'',
									'pulse_02':'',
									'pulse_03':'',
									'bp_01':'',
									'bp_02':'',
									'bp_03':'',
									'spo2_01':'',
									'spo2_02':'',
									'spo2_03':'',
									'rr_01':'',
									'rr_02':'',
									'rr_03':'',
									'gcs_01':'',
									'gcs_02':'',
									'gcs_03':'',
									'temp_01':'',
									'temp_02':'',
									'temp_03':'',
									'iv_infusion_01':'',
									'qty_01':'',
									'time_start_01':'',
									'time_end_01':'',
									'remarks_01':'',
									'iv_infusion_02':'',
									'qty_02':'',
									'time_start_02':'',
									'time_end_02':'',
									'remarks_02':'',
									'iv_infusion_03':'',
									'qty_03':'',
									'time_start_03':'',
									'time_end_03':'',
									'remarks_03':'',
									'iv_infusion_04':'',
									'qty_04':'',
									'time_start_04':'',
									'time_end_04':'',
									'remarks_04':'',
									'name_drug_01':'',
									'dosage_01':'',
									'routine_01':'',
									'administration_by_01':'',
									'medication_time_01':'',
									'name_drug_02':'',
									'dosage_02':'',
									'routine_02':'',
									'administration_by_02':'',
									'medication_time_02':'',
									'name_drug_03':'',
									'dosage_03':'',
									'routine_03':'',
									'administration_by_03':'',
									'medication_time_03':'',
									'name_drug_04':'',
									'dosage_04':'',
									'routine_04':'',
									'administration_by_04':'',
									'medication_time_04':'',
									'name_drug_05':'',
									'dosage_05':'',
									'routine_05':'',
									'administration_by_05':'',
									'medication_time_05':'',
									'patient_shifted_to':'',
									'er_nurse':''
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveerObservation() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveerObservation(this.erObservationData).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('Patient details have been saved', 'er Observation', {timeOut: 5000});
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
