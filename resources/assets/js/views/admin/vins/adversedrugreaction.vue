<template>
  <div class="container">
  	<div class="page-header">
  		<div class="row">
  			<div class="col-md-6">
  			<h1>Adverse Drug Reaction Form</h1>
  			</div>
  			<div class="col-md-6">
  				<div class="text-right">
  					DOC NO. FMT/IPD/42 <br>
  					REV. No. 0.1 <br>
  					WEF 01-10-2014 <br>
  					PAGE NO. 01 OF 02
  				</div>
  			</div>
  		</div>
  	</div>
  	<form action="" method="post">
      <div class="row form-group">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name Of The Suspected Drug</th>
              <th>Reason For Use</th>
              <th> Dosage And Frequency </th>
              <th>Route of Administration</th>
              <th>Date of Starting</th>
              <th>Date of Cessation</th>
              <th>Manufacturer Name</th>
              <th>Lot And Expiry</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.name_00" name="name_00" value=""/>
                <span class="help is-danger" v-show="errors.has('name_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.reason_00" name="reason_00" value=""/>
                <span class="help is-danger" v-show="errors.has('reason_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.dosage_freq_00" name="dosage_freq_00" value=""/>
                <span class="help is-danger" v-show="errors.has('dosage_freq_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.route_00" name="route_00" value=""/>
                <span class="help is-danger" v-show="errors.has('route_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="date" v-validate="'required'" v-model="adverseDrugReaction.date_start_00" name="date_start_00" value=""/>
                <span class="help is-danger" v-show="errors.has('date_start_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="date" v-validate="'required'" v-model="adverseDrugReaction.date_cessation_00" name="date_cessation_00" value=""/>
                <span class="help is-danger" v-show="errors.has('date_cessation_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.manufacturer_name_00" name="manufacturer_name_00" value=""/>
                <span class="help is-danger" v-show="errors.has('manufacturer_name_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.lot_expiry_00" name="lot_expiry_00" value=""/>
                <span class="help is-danger" v-show="errors.has('lot_expiry_00')">
                	Field is required
              	</span>
              </td>
            </tr>

            <tr>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.name_01" name="name_01" value=""/>
                <span class="help is-danger" v-show="errors.has('name_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.reason_01" name="reason_01" value=""/>
                <span class="help is-danger" v-show="errors.has('reason_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.dosage_freq_01" name="dosage_freq_01" value=""/>
                <span class="help is-danger" v-show="errors.has('dosage_freq_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.route_01" name="route_01" value=""/>
                <span class="help is-danger" v-show="errors.has('route_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="date" v-validate="'required'" v-model="adverseDrugReaction.date_start_01" name="date_start_01" value=""/>
                <span class="help is-danger" v-show="errors.has('date_start_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="date" v-validate="'required'" v-model="adverseDrugReaction.date_cessation_01" name="date_cessation_01" value=""/>
                <span class="help is-danger" v-show="errors.has('date_cessation_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.manufacturer_name_01" name="manufacturer_name_01" value=""/>
                <span class="help is-danger" v-show="errors.has('manufacturer_name_01')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.lot_expiry_01" name="lot_expiry_01" value=""/>
                <span class="help is-danger" v-show="errors.has('lot_expiry_01')">
                	Field is required
              	</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Other Relavant History : </label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="adverseDrugReaction.relevant_history" name="relevant_history" />
        </div>
      </div>

      <div class="row">
        <h3>Other medications prescribed in patient:</h3>
      </div>

      <div class="row form-group">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Other Medications</th>
              <th>Dose and Frequency</th>
              <th>Route of Administration</th>
              <th>Time Of Administration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.other_medications_00" name="other_medications_00" value=""/>
                <span class="help is-danger" v-show="errors.has('other_medications_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.dose_freq_00" name="dose_freq_00" value=""/>
                <span class="help is-danger" v-show="errors.has('dose_freq_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.route_administration_00" name="route_administration_00" value=""/>
                <span class="help is-danger" v-show="errors.has('route_administration_00')">
                	Field is required
              	</span>
              </td>
              <td>
                <input class="form-control" type="time" v-validate="'required'" v-model="adverseDrugReaction.time_administration_00" name="time_administration_00" value=""/>
                <span class="help is-danger" v-show="errors.has('time_administration_00')">
                	Field is required
              	</span>
              </td>
            </tr>
            <tr>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.other_medications_01" name="other_medications_01" value=""/></td>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.dose_freq_01" name="dose_freq_01" value=""/></td>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.route_administration_01" name="route_administration_01" value=""/></td>
              <td><input class="form-control" type="time" v-model="adverseDrugReaction.time_administration_01" name="time_administration_01" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.other_medications_02" name="other_medications_02" value=""/></td>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.dose_freq_02" name="dose_freq_02" value=""/></td>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.route_administration_02" name="route_administration_02" value=""/></td>
              <td><input class="form-control" type="time" v-model="adverseDrugReaction.time_administration_02" name="time_administration_02" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.other_medications_03" name="other_medications_03" value=""/></td>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.dose_freq_03" name="dose_freq_03" value=""/></td>
              <td><input class="form-control" type="text" v-model="adverseDrugReaction.route_administration_03" name="route_administration_03" value=""/></td>
              <td><input class="form-control" type="time" v-model="adverseDrugReaction.time_administration_03" name="time_administration_03" value=""/></td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Description Of Adverse Drug Reaction:</label>
        </div>
        <div class="form-control">
          <input class="form-control" type="text" v-model="adverseDrugReaction.description" name="description" id="description" value="" />
        </div>
      </div>


      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Date Of Event:</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="date" v-validate="'required'" v-model="adverseDrugReaction.date_event" name="date_event" id="date_event" value="" >
            <span class="help is-danger" v-show="errors.has('date_event')">
              Field is required
            </span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Date Of Report:</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="date" v-validate="'required'" v-model="adverseDrugReaction.date_report" name="date_report" id="date_report" value="" >
            <span class="help is-danger" v-show="errors.has('date_report')">
              Field is required
            </span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Types of ADR:</label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="adr_types" v-model="adverseDrugReaction.adr_types">
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Specification:</label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="specification" v-model="adverseDrugReaction.specification" >
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Outcome Attributed to ADR:</label>
        </div>
        <div class="col-md-6">
          <select class="form-control" name="outcome_adr" v-validate="'required'" v-model="adverseDrugReaction.outcome_adr" >
            <option value="Death">Death</option>
            <option value="life_threatening">Life Threatening</option>
            <option value="birth_defect">Congenital Anomaly/Birth Defect</option>
            <option value="hospitalization">Hospitalization- Initial or Prolonged</option>
            <option value="other_serious_event">Other Serious Events</option>
            <option value="requred_intervention">Required Intervention to prevent permanent impairment</option>
          </select>
          <span class="help is-danger" v-show="errors.has('outcome_adr')">
            Field is required
          </span>
        </div>
      </div>

      <div class="row">
        <h3>TREATMENT OF REACATION:</h3>
      </div>
      <hr>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Remedical Medication given:</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" v-validate="'required'" v-model="adverseDrugReaction.remedical_medication" name="remedical_medication" value=""  />
            <span class="help is-danger" v-show="errors.has('outcome_adr')">
              Field is required
            </span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Alteration(in dose, frequency) Discontinuation(if any) of Medication:</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="adverseDrugReaction.alteration_medication" name="alteration_medication" id="alteration_medication" value=""  />
          </div>
        </div>
      </div>


      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Events Abated After Use Stopped or Dose Reduced ?:</label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="events_abated" v-model="adverseDrugReaction.events_abated" >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="NA">Doesn't Apply</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Events reappeared after Reintroduction ?:</label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="events_reappear" v-model="adverseDrugReaction.events_reappear " >
              <option value="">Yes</option>
              <option value="">No</option>
              <option value="">Doesn't Apply</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row form-group">
  			<div class="col-md-4">
  				<div class="col-md-6">
  					<label>Name of the Nurse Administration:</label>
  				</div>
  				<div class="col-md-6">
  					<input class="form-control" type="text"  v-validate="'required'" v-model="adverseDrugReaction.nurse_admin" name="nurse_admin" id="nurse_admin" value="" >
            <span class="help is-danger" v-show="errors.has('nurse_admin')">
              Field is required
            </span>
  				</div>
        </div>
  			<div class="col-md-4">
  				<div class="col-md-6">
  					<label>Unit/Ward:</label>
  				</div>
  				<div class="col-md-6">
  					<input class="form-control" type="text"  v-validate="'required'" v-model="adverseDrugReaction.unit_ward" name="unit_ward" id="unit_ward" value="" >
            <span class="help is-danger" v-show="errors.has('unit_ward')">
              Field is required
            </span>
  				</div>
        </div>
        <div class="col-md-4">
          <div class="col-md-6">
            <label>Name Of RMO/Consultant:</label>
  				</div>
  				<div class="col-md-6">
  					<input class="form-control" type="text"  v-validate="'required'" v-model="adverseDrugReaction.rmo" name="rmo" id="rmo" value="" >
            <span class="help is-danger" v-show="errors.has('rmo')">
              Field is required
            </span>
  				</div>
        </div>
      </div>
      <div class="row form-group text-center">
        <button class="btn btn-success" type="button" @click="saveAdverseDrugReaction()">Submit</button>
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
                'adverseDrugReaction' : {
                	'fname':'',
                  'name_00':'',
                  'reason_00':'',
                  'dosage_freq_00':'',
                  'route_00':'',
                  'date_start_00':'',
                  'date_cessation_00':'',
                  'manufacturer_name_00':'',
                  'lot_expiry_00':'',
                  'name_01':'',
                  'reason_01':'',
                  'dosage_freq_01':'',
                  'route_01':'',
                  'date_start_01':'',
                  'date_cessation_01':'',
                  'manufacturer_name_01':'',
                  'lot_expiry_01':'',
                  'relevant_history':'',
                  'other_medications_00':'',
                  'dose_freq_00':'',
                  'route_administration_00':'',
                  'time_administration_00':'',
                  'other_medications_01':'',
                  'dose_freq_01':'',
                  'route_administration_01':'',
                  'time_administration_01':'',
                  'other_medications_02':'',
                  'dose_freq_02':'',
                  'route_administration_02':'',
                  'time_administration_02':'',
                  'other_medications_03':'',
                  'dose_freq_03':'',
                  'route_administration_03':'',
                  'time_administration_03':'',
                  'description':'',
                  'date_event':'',
                  'date_report':'',
                  'adr_types':'',
                  'specification':'',
                  'outcome_adr':'',
                  'remedical_medication':'',
                  'alteration_medication':'',
                  'events_abated':'',
                  'events_reappear':'',
                  'nurse_admin':'',
                  'unit_ward':'',
                  'rmo':'',

                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveAdverseDrugReaction() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveAdverseDrugReaction(this.adverseDrugReaction).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('Adverse Drug Reaction has been saved', 'Adverse Drug Reaction', {timeOut: 5000});
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
