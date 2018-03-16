<template>
  <div class="container">
  	<div class="page-header">
  		<div class="row">
  			<div class="col-md-6">
    			<h1>CPR Format</h1>
  			</div>
  			<div class="col-md-6">
  				<div class="text-right">
  					DOC NO. FMT/NUR/37 <br>
  					REV. No. 0.1 <br>
  					WEF 01-11-2014 <br>
  					PAGE NO.
  				</div>
  			</div>
  		</div>
    </div>

  	<form action="" method="post">
  		<div class="row form-group">
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Patient's Name:</label>
  				</div>
  				<div class="col-md-6">
  					<input type="text" class="form-control" name="patient_name" v-model="cprFormatData.patient_name" v-validate="'required'" id="patient_name" value="">
            <span class="help is-danger" v-show="errors.has('patient_name')">
              Field is required
            </span>
  				</div>
  			</div>
  		</div>

      <div class="row form-group">
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>IPD No.:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="ipd_no" v-model="cprFormatData.ipd_no" v-validate="'required'" id="ipd_no" value="">
              <span class="help is-danger" v-show="errors.has('ipd_no')">
                Field is required
              </span>

  					</div>
  				</div>
  				<div class="col-md-6">
  					<div class="col-md-6">
  						<label>Age:</label>
  					</div>
  					<div class="col-md-6">
  						<input type="text" class="form-control" name="age" v-model="cprFormatData.age" v-validate="'required'" id="age" value="">
              <span class="help is-danger" v-show="errors.has('age')">
                Field is required
              </span>

  					</div>
  				</div>
      </div>

  		<div class="row form-group">
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Sex:</label>
  				</div>
  				<div class="col-md-6">
  					<select class="form-control" name="sex" v-model="cprFormatData.sex" v-validate="'required'" value="">
              <option>NA</option>
  						<option>Male</option>
  						<option>Female</option>
  					</select>
            <span class="help is-danger" v-show="errors.has('sex')">
              Field is required
            </span>
  				</div>
  			</div>
  			<div class="col-md-6"></div>
  		</div>

  		<div class="row form-group">
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Date:</label>
  				</div>
  				<div class="col-md-6">
  					<input type="date" class="form-control" name="date" v-model="cprFormatData.date" v-validate="'required'" id="date" value="">
            <span class="help is-danger" v-show="errors.has('date')">
              Field is required
            </span>
  				</div>
  			</div>
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Start Time:</label>
  				</div>
  				<div class="col-md-6">
  					<input type="time" class="form-control" name="start_time" v-model="cprFormatData.start_time" v-validate="'required'" id="start_time" value="">
            <span class="help is-danger" v-show="errors.has('start_time')">
              Field is required
            </span>
  				</div>
  			</div>
  		</div>

  		<div class="row form-group">
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Bed No.:</label>
  				</div>
  				<div class="col-md-6">
  					<input type="text" class="form-control" name="bed_no" v-model="cprFormatData.bed_no" v-validate="'required'" id="bed_no" value="">
            <span class="help is-danger" v-show="errors.has('bed_no')">
              Field is required
            </span>
  				</div>
  			</div>
  		</div>
  		<hr>

  		<table class="table table-bordered">
  			<tr>
  				<th>Diagnosis</th>
  				<td  colspan="6">
  					<div>
  						<input type="text" class="form-control" name="diagnosis" v-model="cprFormatData.diagnosis" v-validate="'required'" id="diagnosis" value="">
              <span class="help is-danger" v-show="errors.has('diagnosis')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  			<tr>
  				<th>Name of Doctor leading CPR</th>
  				<td colspan="6">
  					<div>
  						<input type="text" class="form-control" name="name_doctor" v-model="cprFormatData.name_doctor" v-validate="'required'" id="name_doctor" value="">
              <span class="help is-danger" v-show="errors.has('name_doctor')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  			<tr>
  				<th>CPR Team</th>
  				<td colspan="6">
  					<div>
  						<input type="text" class="form-control" name="cpr_team" v-model="cprFormatData.cpr_team" v-validate="'required'" id="cpr_team" value="">
              <span class="help is-danger" v-show="errors.has('cpr_team')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  			<tr>
  				<th>Intubation Time (if done)</th>
  				<td colspan="6">
  					<div>
  						<input type="time" class="form-control" name="intubation_time" v-model="cprFormatData.intubation_time" v-validate="'required'" id="intubation_time" value="">
              <span class="help is-danger" v-show="errors.has('intubation_time')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  			<tr>
  				<th rowspan="2">Defribillator (if used how many shocks and joules)</th>
  				<th>ECG Rhythm</th>
  				<td><input type="text" class="form-control" name="defib_rhythm_00" v-model="cprFormatData.defib_rhythm_00" v-validate="'required'" id="defib_rhythm_00" value="">
            <span class="help is-danger" v-show="errors.has('defib_rhythm_00')">
              Field is required
            </span>
          </td>
  				<td><input type="text" class="form-control" name="defib_rhythm_01" v-model="cprFormatData.defib_rhythm_01" id="defib_rhythm_01" value=""></td>
  				<td><input type="text" class="form-control" name="defib_rhythm_02" v-model="cprFormatData.defib_rhythm_02" id="defib_rhythm_02" value=""></td>
  				<td><input type="text" class="form-control" name="defib_rhythm_03" v-model="cprFormatData.defib_rhythm_03" id="defib_rhythm_03" value=""></td>
  				<td><input type="text" class="form-control" name="defib_rhythm_04" v-model="cprFormatData.defib_rhythm_04" id="defib_rhythm_04" value=""></td>
  			</tr>
  			<tr>
  				<th>DC Shock</th>
  				<td><input type="text" class="form-control" name="defib_dc_00" v-model="cprFormatData.defib_dc_00" v-validate="'required'" id="defib_dc_00" value="">
            <span class="help is-danger" v-show="errors.has('defib_dc_00')">
              Field is required
            </span>
          </td>
  				<td><input type="text" class="form-control" name="defib_dc_01" v-model="cprFormatData.defib_dc_01" id="defib_dc_01" value=""></td>
  				<td><input type="text" class="form-control" name="defib_dc_02" v-model="cprFormatData.defib_dc_02" id="defib_dc_02" value=""></td>
  				<td><input type="text" class="form-control" name="defib_dc_03" v-model="cprFormatData.defib_dc_03" id="defib_dc_03" value=""></td>
  				<td><input type="text" class="form-control" name="defib_dc_04" v-model="cprFormatData.defib_dc_04" id="defib_dc_04" value=""></td>
  			</tr>
  			<tr>
  				<th rowspan="6">Medication</th>
  				<th>Time</th>
  				<th colspan="5">Medicines</th>
  			</tr>
  			<tr>
  				<td><input type="time" class="form-control" name="medication_time_00" v-model="cprFormatData.medication_time_00" v-validate="'required'" id="medication_time_00" value="">
            <span class="help is-danger" v-show="errors.has('medication_time_00')">
              Field is required
            </span>
          </td>
  				<td colspan="5"><input type="text" class="form-control" name="medication_name_01" v-model="cprFormatData.medication_name_01" v-validate="'required'" id="medication_name_01" value="">
            <span class="help is-danger" v-show="errors.has('medication_name_01')">
              Field is required
            </span>
          </td>
  			</tr>
  			<tr>
  				<td><input type="time" class="form-control" name="medication_time_10" v-model="cprFormatData.medication_time_10" id="medication_time_10" value=""></td>
  				<td colspan="5"><input type="text" class="form-control" name="medication_name_11" v-model="cprFormatData.medication_name_11" id="medication_name_11" value=""></td>
  			</tr>
  			<tr>
  				<td><input type="time" class="form-control" name="medication_time_20" v-model="cprFormatData.medication_time_20" id="medication_time_20" value=""></td>
  				<td colspan="5"><input type="text" class="form-control" name="medication_name_21" v-model="cprFormatData.medication_name_21" id="medication_name_21" value=""></td>
  			</tr>
  			<tr>
  				<td><input type="time" class="form-control" name="medication_time_30" v-model="cprFormatData.medication_time_30" id="medication_time_30"  value=""></td>
  				<td colspan="5"><input type="text" class="form-control" name="medication_name_31" v-model="cprFormatData.medication_name_31" id="medication_name_31" value=""></td>
  			</tr>
  			<tr>
  				<td><input type="time" class="form-control" name="medication_time_40" v-model="cprFormatData.medication_time_40" id="medication_time_40" value=""></td>
  				<td colspan="5"><input type="text" class="form-control" name="medication_name_41" v-model="cprFormatData.medication_name_41" id="medication_name_41" value=""></td>
  			</tr>
  			<tr>
  				<th>Total time of Resuscitation</th>
  				<td colspan="6">
  					<div>
  						<input type="time" class="form-control" name="total_time" v-model="cprFormatData.total_time" v-validate="'required'" id="total_time"  value="">
              <span class="help is-danger" v-show="errors.has('total_time')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  			<tr>
  				<th>Outcome</th>
  				<td colspan="6">
  					<div>
  						<input type="text" class="form-control" name="outcome" v-model="cprFormatData.outcome" v-validate="'required'" id="outcome" value="">
              <span class="help is-danger" v-show="errors.has('outcome')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  			<tr>
  				<th>Doctor Name </th>
  				<td colspan="6"><input type="text" class="form-control" name="doctor_name" v-model="cprFormatData.doctor_name" v-validate="'required'" id="doctor_name" value="">
            <span class="help is-danger" v-show="errors.has('consultant_counseled')">
              Field is required
            </span>
          </td>
  			</tr>
  			<tr>
  				<th>Remarks</th>
  				<td colspan="6">
  					<div>
  						<textarea class="form-control" rows="3" name="remarks" v-model="cprFormatData.remarks" v-validate="'required'"></textarea>
              <span class="help is-danger" v-show="errors.has('remarks')">
                Field is required
              </span>

  					</div>
  				</td>
  			</tr>
  		</table>

  		<div class="row form-group">
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Consultant Counseled:</label>
  				</div>
  				<div class="col-md-6">
  					<input type="text" class="form-control" name="consultant_counseled" v-model="cprFormatData.consultant_counseled" v-validate="'required'" id="consultant_counseled" value="">
            <span class="help is-danger" v-show="errors.has('consultant_counseled')">
              Field is required
            </span>
  				</div>
  			</div>
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Relative's Name:</label>
  				</div>
  				<div class="col-md-6">
  					<input type="text" class="form-control" name="relative_name" v-model="cprFormatData.relative_name" v-validate="'required'" id="relative_name" value="">
            <span class="help is-danger" v-show="errors.has('relative_name')">
              Field is required
            </span>
  				</div>
  			</div>
  		</div>

  		<hr>
  		<div class="row form-group">
  			<table class="table table-bordered table-responsive">
  				<thead>
  					<tr>
  						<th>Initial Time</th>
  						<th rowspan="2">Pulse</th>
  						<th rowspan="2">BP</th>
  						<th rowspan="2">SPO<sub>2</sub></th>
  						<th rowspan="2">RR</th>
  						<th rowspan="2">Chest Compression</th>
  						<th rowspan="2">ECG Rhythm</th>
  						<th rowspan="2">DC Shock</th>
  						<th rowspan="2">Medication</th>
  					</tr>
  					<tr>
  						<th>
  							Initial Time <input type="time" class="form-control" name="initial_time" id="initial_time">
  						</th>
  					</tr>
  				</thead>
  				<tbody>
  					<tr>
  						<th>0 minutes</th>
  						<td><input type="text" class="form-control" name="00_01" id="00_01" value=""></td>
  						<td><input type="text" class="form-control" name="00_02" id="00_02" value=""></td>
  						<td><input type="text" class="form-control" name="00_03" id="00_03" value=""></td>
  						<td><input type="text" class="form-control" name="00_04" id="00_04" value=""></td>
  						<td><input type="text" class="form-control" name="00_05" id="00_05" value=""></td>
  						<td><input type="text" class="form-control" name="00_06" id="00_06" value=""></td>
  						<td><input type="text" class="form-control" name="00_07" id="00_07" value=""></td>
  						<td><textarea class="form-control" cols="2" name="00_08" placeholder="Medicine"></textarea></td>
  					</tr>

  					<tr>
  						<th>5 minutes</th>
  						<td><input type="text" class="form-control" name="01_01" id="01_01" value=""></td>
  						<td><input type="text" class="form-control" name="01_02" id="01_02" value=""></td>
  						<td><input type="text" class="form-control" name="01_03" id="01_03" value=""></td>
  						<td><input type="text" class="form-control" name="01_04" id="01_04" value=""></td>
  						<td><input type="text" class="form-control" name="01_05" id="01_05" value=""></td>
  						<td><input type="text" class="form-control" name="01_06" id="01_06" value=""></td>
  						<td><input type="text" class="form-control" name="01_07" id="01_07" value=""></td>
  						<td><textarea class="form-control" cols="2" name="01_08" placeholder="Medicine"></textarea></td>
  					</tr>

  					<tr>
  						<th>10 minutes</th>
  						<td><input type="text" class="form-control" name="02_01" id="02_01" value=""></td>
  						<td><input type="text" class="form-control" name="02_02" id="02_02" value=""></td>
  						<td><input type="text" class="form-control" name="02_03" id="02_03" value=""></td>
  						<td><input type="text" class="form-control" name="02_04" id="02_04" value=""></td>
  						<td><input type="text" class="form-control" name="02_05" id="02_05" value=""></td>
  						<td><input type="text" class="form-control" name="02_06" id="02_06" value=""></td>
  						<td><input type="text" class="form-control" name="02_07" id="02_07" value=""></td>
  						<td><textarea class="form-control" cols="2" name="02_08" placeholder="Medicine"></textarea></td>
  					</tr>

  					<tr>
  						<th>15 minutes</th>
  						<td><input type="text" class="form-control" name="03_01" id="03_01" value=""></td>
  						<td><input type="text" class="form-control" name="03_02" id="03_02" value=""></td>
  						<td><input type="text" class="form-control" name="03_03" id="03_03" value=""></td>
  						<td><input type="text" class="form-control" name="03_04" id="03_04" value=""></td>
  						<td><input type="text" class="form-control" name="03_05" id="03_05" value=""></td>
  						<td><input type="text" class="form-control" name="03_06" id="03_06" value=""></td>
  						<td><input type="text" class="form-control" name="03_07" id="03_07" value=""></td>
  						<td><textarea class="form-control" cols="2" name="03_08" placeholder="Medicine"></textarea></td>
  					</tr>

  					<tr>
  						<th>20 minutes</th>
  						<td><input type="text" class="form-control" name="04_01" id="04_01" value=""></td>
  						<td><input type="text" class="form-control" name="04_02" id="04_02" value=""></td>
  						<td><input type="text" class="form-control" name="04_03" id="04_03" value=""></td>
  						<td><input type="text" class="form-control" name="04_04" id="04_04" value=""></td>
  						<td><input type="text" class="form-control" name="04_05" id="04_05" value=""></td>
  						<td><input type="text" class="form-control" name="04_06" id="04_06" value=""></td>
  						<td><input type="text" class="form-control" name="04_07" id="04_07" value=""></td>
  						<td><textarea class="form-control" cols="2" name="04_08" placeholder="Medicine"></textarea></td>
  					</tr>

  					<tr>
  						<th>25 minutes</th>
  						<td><input type="text" class="form-control" name="05_01" id="05_01" value=""></td>
  						<td><input type="text" class="form-control" name="05_02" id="05_02" value=""></td>
  						<td><input type="text" class="form-control" name="05_03" id="05_03" value=""></td>
  						<td><input type="text" class="form-control" name="05_04" id="05_04" value=""></td>
  						<td><input type="text" class="form-control" name="05_05" id="05_05" value=""></td>
  						<td><input type="text" class="form-control" name="05_06" id="05_06" value=""></td>
  						<td><input type="text" class="form-control" name="05_07" id="05_07" value=""></td>
  						<td><textarea class="form-control" cols="2" name="05_08" placeholder="Medicine" ></textarea></td>
  					</tr>

  					<tr>
  						<th>30 minutes</th>
  						<td><input type="text" class="form-control" name="06_01" id="06_01"  value=""></td>
  						<td><input type="text" class="form-control" name="06_02" id="06_02"  value=""></td>
  						<td><input type="text" class="form-control" name="06_03" id="06_03"  value=""></td>
  						<td><input type="text" class="form-control" name="06_04" id="06_04"  value=""></td>
  						<td><input type="text" class="form-control" name="06_05" id="06_05"  value=""></td>
  						<td><input type="text" class="form-control" name="06_06" id="06_06"  value=""></td>
  						<td><input type="text" class="form-control" name="06_07" id="06_07"  value=""></td>
  						<td><textarea class="form-control" cols="2" name="06_08" placeholder="Medicine"></textarea></td>
  					</tr>
  				</tbody>
  			</table>
  		</div>
  		<div class="row form-group text-center">
  			<button class="btn btn-success" type="button" @click="saveCptFormat()">Submit</button>
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
                'cprFormatData' : {
                  'patient_name' : '',
                  'ipd_no' : '',
                  'age' : '',
                  'sex' : '',
                  'date' : '',
                  'start_time' : '',
                  'bed_no' : '',
                  'diagnosis' : '',
                  'name_doctor' : '',
                  'cpr_team' : '',
                  'intubation_time' : '',
                  'defib_rhythm_00' : '',
                  'defib_rhythm_01' : '',
                  'defib_rhythm_02' : '',
                  'defib_rhythm_03' : '',
                  'defib_rhythm_04' : '',
                  'defib_dc_00' : '',
                  'defib_dc_01' : '',
                  'defib_dc_02' : '',
                  'defib_dc_03' : '',
                  'defib_dc_04' : '',
                  'medication_time_00' : '',
                  'medication_name_01' : '',
                  'medication_time_10' : '',
                  'medication_name_11' : '',
                  'medication_time_20' : '',
                  'medication_name_21' : '',
                  'medication_time_30' : '',
                  'medication_name_31' : '',
                  'medication_time_40' : '',
                  'medication_name_41' : '',
                  'total_time' : '',
                  'outcome' : '',
                  'doctor_name' : '',
                  'remarks' : '',
                  'consultant_counseled' : '',
                  'relative_name' : '',
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveCptFormat() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveCptFormat(this.cprFormatData).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('CPR details have been saved', 'CPR Format', {timeOut: 5000});
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
