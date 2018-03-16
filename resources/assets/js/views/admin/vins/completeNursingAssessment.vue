<template>
  <div class="container">
		<div class="page-header">
			<div class="row">
				<div class="col-md-6">
				<h1>Complete Nursing Assessment</h1>
				</div>
				<div class="col-md-6">
					<div class="text-right">
						DOC NO. F/IPD/22 <br>
						REV. No. 0.1 <br>
						WEF 05-01-2015
					</div>
				</div>
			</div>
		</div>
  		<form action="" method="post" >
  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label class="control-label col-md-4" for="unit">Unit:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="unit" v-validate="'required'" v-model="completeNursingAssessmentData.unit" value="">
              <span class="help is-danger" v-show="errors.has('unit')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label class="control-label col-md-4" for="date">Date:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="date" class="form-control" name="date" v-model="completeNursingAssessmentData.date" v-validate="'required'" value="">
              <span class="help is-danger" v-show="errors.has('date')">
                Field is required
              </span>
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label class="control-label col-md-4" for="time">Time:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="time" class="form-control" name="time" v-model="completeNursingAssessmentData.time" v-validate="'required'" value="">
              <span class="help is-danger" v-show="errors.has('time')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label class="control-label col-md-6" for="idbandno">ID Band No.:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="idbandno" v-model="completeNursingAssessmentData.idbandno" v-validate="'required'" id="idbandno" value="" />
              <span class="help is-danger" v-show="errors.has('idbandno')">
                Field is required
              </span>
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6" >
  					<div class="col-md-6">
  						<label class="control-label col-md-6" for="call_bell">Call Bell in Reach:</label>
  					</div>
  					<div class="col-md-6">
  						<input class="form-control" type="text" name="call_bell" v-model="completeNursingAssessmentData.call_bell" v-validate="'required'" value="" />
              <span class="help is-danger" v-show="errors.has('call_bell')">
                Field is required
              </span>
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-4">
  						<label class="control-label col-md-3" for="height">Height:</label>
  						<div class="col-md-9">
  							<input type="text" class="form-control" name="height" v-model="completeNursingAssessmentData.height" v-validate="'required'" id="height" placeholder="Height(in cms)" value="">
                <span class="help is-danger" v-show="errors.has('height')">
                	Field is required
                </span>
  						</div>
  						<br><br>
  						<label class="control-label col-md-3" for="weight">Weight:</label>
  						<div class="col-md-9">
  							<input type="text" class="form-control" name="weight" v-model="completeNursingAssessmentData.weight" v-validate="'required'" id="weight" placeholder="Weight(in KGs)" value="">
                <span class="help is-danger" v-show="errors.has('weight')">
                	Field is required
                </span>
  						</div>
  				</div>
  			</div>
  		  <hr>
  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Allergies:</label>
  					</div>
  					<div class="col-md-6">
  						<select class="form-control" name="allergies" v-model="completeNursingAssessmentData.allergies" v-validate="'required'" >
  							<option value="no" >NO</option>
  							<option value="yes" >YES</option>
  							<option value="other" >Other</option>
  						</select>
              <span class="help is-danger" v-show="errors.has('allergies')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>If other:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" name="allergies_other" v-model="completeNursingAssessmentData.allergies_other" id="allergies_other" class="form-control" value="">
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>History Informant:</label>
  					</div>
  					<div class="col-md-6">
  						<select class="form-control" name="history_informant" v-model="completeNursingAssessmentData.history_informant" v-validate="'required'" >
  							<option value="patient" >Patient</option>
  							<option value="other" >Other</option>
  						</select>
              <span class="help is-danger" v-show="errors.has('history_informant')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>If other:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" name="history_informant_other" v-model="completeNursingAssessmentData.history_informant_other" id="history_informant_other" class="form-control">
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Patient Arrived:</label>
  					</div>
  					<div class="col-md-6">
  						<select class="form-control" name="patient_arrived" v-model="completeNursingAssessmentData.patient_arrived" v-validate="'required'" >
  							<option value="ambulatory" >Ambulatory</option>
  							<option value="wheelchair" >Wheelchair</option>
  							<option value="stretcher" >Stretcher</option>
  							<option value="other" >Other</option>
  						</select>
              <span class="help is-danger" v-show="errors.has('patient_arrived')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>If other:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" name="patient_arrived_other" v-model="completeNursingAssessmentData.patient_arrived_other" id="patient_arrived_other" class="form-control">
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Patient Arrived From:</label>
  					</div>
  					<div class="col-md-6">
  						<select class="form-control" name="patient_arrived_from" v-model="completeNursingAssessmentData.patient_arrived_from" v-validate="'required'" >
  							<option value="home" >Home</option>
  							<option value="opd" >OPD</option>
  							<option value="other_hospital" >Other Hospital</option>
  							<option value="other" >Other</option>
  						</select>
              <span class="help is-danger" v-show="errors.has('patient_arrived_from')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>If other:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" name="patient_arrived_from_other" v-model="completeNursingAssessmentData.patient_arrived_from_other" id="patient_arrived_from_other" class="form-control">
  					</div>
  				</div>
  			</div>

  		  <hr />

  			<div class="row">
  					<h3>Vital Signs:</h3>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-4">
  						<label>Temperature:</label>
  					</div>
  					<div class="col-md-4">
  						<input type="text" name="temperature" v-model="completeNursingAssessmentData.temperature" v-validate="'required'" value="" class="form-control">
              <span class="help is-danger" v-show="errors.has('temperature')">
                Field is required
              </span>
  					</div>
  					<div class="col-md-4">
  						<select class="form-control" id="temperature_type" name="temperature_type" v-model="completeNursingAssessmentData.temperature_type" >
  							<option value="oral" > Oral </option>
  							<option value="rectal" > Rectal </option>
  							<option value="auxillary" > Auxillary </option>
  							<option value="tympanic" > Tympanic </option>
  						</select>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Pain:</label>
  					</div>
  					<div class="col-md-6">
  						<select class="form-control" name="pain" v-model="completeNursingAssessmentData.pain" v-validate="'required'" >
  							<option value="opd" >OPD</option>
  							<option value="home" >Home</option>
  						</select>
              <span class="help is-danger" v-show="errors.has('pain')">
                Field is required
              </span>
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Pulse:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="pulse" v-model="completeNursingAssessmentData.pulse" v-validate="'required'" placeholder="(per minute)" value="">
              <span class="help is-danger" v-show="errors.has('pulse')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>RR : </label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="rr" v-model="completeNursingAssessmentData.rr" v-validate="'required'" value="" placeholder="(per minute)">
              <span class="help is-danger" v-show="errors.has('rr')">
                Field is required
              </span>
  					</div>
  				</div>
  			</div>

  			<div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Blood Pressure:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="blood_pressure" v-model="completeNursingAssessmentData.blood_pressure" v-validate="'required'" value="" placeholder="(in mm Hg)">
              <span class="help is-danger" v-show="errors.has('blood_pressure')">
                Field is required
              </span>
  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>SpO<sub>2</sub> :</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="spo2" v-model="completeNursingAssessmentData.spo2" v-validate="'required'" value="">
              <span class="help is-danger" v-show="errors.has('spo2')">
                Field is required
              </span>
  					</div>
  				</div>
  			</div>
        <hr>


				<div class="row">
					<h3>Activities of Daily Living:</h3>
				</div>

				<table class="table table-bordered">
					<thead>
						<tr>
							<th></th>
							<th>Usual Level</th>
							<th>Level on Admission</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Feeding</th>
							<td>
								<select class="form-control" name="feeding_usual" v-model="completeNursingAssessmentData.feeding_usual" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
							<td>
								<select class="form-control" name="feeding_admission" v-model="completeNursingAssessmentData.feeding_admission" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
							<td rowspan="5">
								Level 0 - Independent, requires no Supervision, Assistance or teaching <br><br><br>
								Level 1 - Requires supervision and / or teaching <br><br><br>
								Level 2 - Requires at least minimum assistance from another person <br><br><br>
								Level 3 - Is dependent and does not participate
							</td>
						</tr>
						<tr>
							<th>Bathing</th>
							<td>
								<select class="form-control" name="bathing_usual" v-model="completeNursingAssessmentData.bathing_usual" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
							<td>
								<select class="form-control" name="bathing_admission" v-model="completeNursingAssessmentData.bathing_admission" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>Toileting</th>
							<td>
								<select class="form-control" name="toileting_usual" v-model="completeNursingAssessmentData.toileting_usual" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
							<td>
								<select class="form-control" name="toileting_admission" v-model="completeNursingAssessmentData.toileting_admission" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>General Mobility / Gait</th>
							<td>
								<select class="form-control" name="mobility_usual" v-model="completeNursingAssessmentData.mobility_usual" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
							<td>
								<select class="form-control" name="mobility_admission" v-model="completeNursingAssessmentData.mobility_admission" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>Dressing / Grooming</th>
							<td>
								<select class="form-control" name="dressing_usual" v-model="completeNursingAssessmentData.dressing_usual"  >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
							<td>
								<select class="form-control" name="dressing_admission" v-model="completeNursingAssessmentData.dressing_admission" >
									<option value="0" >Level 0</option>
									<option value="1" >Level 1</option>
									<option value="2" >Level 2</option>
									<option value="3" >Level 3</option>
								</select>
							</td>
						</tr>
					</tbody>
				</table>

				<div class="row">
					<h3>Patient Safety:</h3>
				</div>

				<div class="row form-group">
          <table class="table table-bordered">
  					<thead>
  						<tr>
  							<th colspan="6" class="text-center">Fall Risk Assessment Scale</th>
  						</tr>
  					</thead>
  					<tbody>
  						<tr>
                <td><input type="checkbox" name="hallucinating" v-model="completeNursingAssessmentData.hallucinating" id="hallucinating"  value="20"></td>
  							<th>Confused-disoriented / Hallucinating</th>
                <td><input type="checkbox" name="post_op_condition" v-model="completeNursingAssessmentData.post_op_condition" id="post_op_condition"  value="10"></td>
  							<th>Post-op Condition - Sedated</th>
                <td><input type="checkbox" name="narcotics" v-model="completeNursingAssessmentData.narcotics" id="narcotics"  value="10"></td>
  							<th>Narcotics / Diuretics</th>
  						</tr>
  						<tr>
                <td><input type="checkbox" name="weakness" v-model="completeNursingAssessmentData.weakness" id="weakness"  value="20"></td>
  							<th>Unstable Gait / Weakness</th>
                <td><input type="checkbox" name="drug_or_alcohol_withdrawal" v-model="completeNursingAssessmentData.drug_or_alcohol_withdrawal" id="drug_or_alcohol_withdrawal"  value="10"></td>
  							<th>Drug or Alcohol Withdrawal</th>
                <td><input type="checkbox" name="bowel_bladder" v-model="completeNursingAssessmentData.bowel_bladder" id="bowel_bladder"  value="10"></td>
  							<th>Bowel, bladder urgency, incontinence</th>
  						</tr>
  						<tr>
                <td><input type="checkbox" name="seizures" v-model="completeNursingAssessmentData.seizures" id="seizures"  value="15"></td>
  							<th>History of Syncope or Seizures</th>
                <td><input type="checkbox" name="walker" v-model="completeNursingAssessmentData.walker" id="walker"  value="15"></td>
  							<th>Use of Walker, Cane Crutches etc</th>
                <td><input type="checkbox" name="age_60" v-model="completeNursingAssessmentData.age_60" id="age_60"  value="5"></td>
  							<th>Age 60 more</th>
  						</tr>
  						<tr>
                <td><input type="checkbox" name="recent_hx_falls" v-model="completeNursingAssessmentData.recent_hx_falls" id="recent_hx_falls"  value="15"></td>
  							<th>Recent Hx of falls</th>
                <td><input type="checkbox" name="postural_hypo_tension" v-model="completeNursingAssessmentData.postural_hypo_tension" id="postural_hypo_tension"  value="10"></td>
  							<th>Postural hypo tension</th>
                <td><input type="checkbox" name="uncooperative" v-model="completeNursingAssessmentData.uncooperative" id="uncooperative"  value="5"></td>
  							<th>Uncooperative, impaired judgement</th>
  						</tr>
  						<tr>
                <td><input type="checkbox" name="age_12" v-model="completeNursingAssessmentData.age_12" id="age_12"  value="15"></td>
  							<th>Age 12 or younger</th>
                <td><input type="checkbox" name="poor_eyesight" v-model="completeNursingAssessmentData.poor_eyesight" id="poor_eyesight"  value="10"></td>
  							<th>Poor eyesight</th>
                <td><input type="checkbox" name="language_barrier" v-model="completeNursingAssessmentData.language_barrier" id="language_barrier"  value="5"></td>
  							<th>Language barrier</th>
  						</tr>
  						<tr>
                <td><input type="checkbox" name="paralysis_stroke" v-model="completeNursingAssessmentData.paralysis_stroke" id="paralysis_stroke"  value="15"></td>
  							<th>Paralysis, hemiplegia, Stroke</th>
                <td><input type="checkbox" name="new_medications" v-model="completeNursingAssessmentData.new_medications" id="new_medications"  value="15"></td>
  							<th>New medications (i.e Sedative antihypertensive)</th>
                <td><input type="checkbox" name="poor_hearing" v-model="completeNursingAssessmentData.poor_hearing" id="poor_hearing"  value="5"></td>
  							<th>Poor Hearing</th>
  						</tr>
  					</tbody>
  				</table>
        </div>

				<div class="row form-group">
					<div class="col-md-6">
						If the score > 25, fall prevention to be initiated.
					</div>
					<div class="col-md-6">
            <div class="col-md-6">
              <label>Total Score:</label>
            </div>
						<div class="col-md-6">
            </div>
					</div>
				</div>
				<hr />
				<div class="form-group row">
					<div class="col-md-6">
						<div class="col-md-6">
							<label>Relative Name:</label>
						</div>
						<div class="col-md-6">
							<input type="text" name="relative_name" v-model="completeNursingAssessmentData.relative_name" v-validate="'required'" value="" class="form-control"  />
              <span class="help is-danger" v-show="errors.has('relative_name')">
                Field is required
              </span>
						</div>
					</div>
					<div class="col-md-6">
						<div class="col-md-6">
							<label>Relation:</label>
						</div>
						<div class="col-md-6">
							<input type="text" name="relation" v-model="completeNursingAssessmentData.relation" v-validate="'required'" value="" class="form-control" />
              <span class="help is-danger" v-show="errors.has('relation')">
                Field is required
              </span>
						</div>
					</div>
				</div>
				<div class="text-center form-group">
					<button class="btn btn-success" type="button" @click="saveCompleteNursingAssessment">Submit</button>
				</div>
  		</form>
  	</div>
  </div>
</template>
<script >
	import User from '../../../api/users.js';
    export default {
        data() {
            return {
                'footer' : 'footer',
                'currentYear': new Date().getFullYear(),
                'completeNursingAssessmentData' : {
                  'unit': '',
                  'date': '',
                  'time': '',
                  'idbandno': '',
                  'call_bell': '',
                  'height': '',
                  'weight': '',
                  'allergies': '',
                  'allergies_other': '',
                  'history_informant': '',
                  'history_informant_other': '',
                  'patient_arrived': '',
                  'patient_arrived_other': '',
                  'patient_arrived_from': '',
                  'patient_arrived_from_other': '',
                  'temperature': '',
                  'temperature_type': '',
                  'pain': '',
                  'pulse': '',
                  'rr': '',
                  'blood_pressure': '',
                  'spo2': '',
                  'feeding_usual': '',
                  'feeding_admission': '',
                  'bathing_usual': '',
                  'bathing_admission': '',
                  'toileting_usual': '',
                  'toileting_admission': '',
                  'mobility_usual': '',
                  'mobility_admission': '',
                  'dressing_usual': '',
                  'dressing_admission': '',
                  'hallucinating': '',
                  'post_op_condition': '',
                  'narcotics': '',
                  'weakness': '',
                  'drug_or_alcohol_withdrawal': '',
                  'bowel_bladder': '',
                  'seizures': '',
                  'walker': '',
                  'age_60': '',
                  'recent_hx_falls': '',
                  'postural_hypo_tension': '',
                  'uncooperative': '',
                  'age_12': '',
                  'poor_eyesight': '',
                  'language_barrier': '',
                  'paralysis_stroke': '',
                  'new_medications': '',
                  'poor_hearing': '',
                  'relative_name': '',
                  'relation': '',
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveCompleteNursingAssessment() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveCompleteNursingAssessment(this.completeNursingAssessmentData).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('Complete Nursing Assessment has been saved', 'Complete Nursing Assessment', {timeOut: 5000});
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
