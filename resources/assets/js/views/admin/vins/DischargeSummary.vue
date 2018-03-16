 <template id="">
  <div class="container">
    <div class="page-header">
      <div class="row">
        <div class="col-md-6">
          <h1>Discharge Summary</h1>
        </div>
      </div>
    </div>

    <form action="" method="post">
      <div class="row form-group">
        <div class="col-md-8">
          <div class="row form-group">
            <div class="col-md-4">
              <label class="control-label" for="address">Date of Admission :</label>
            </div>
            <div class="col-md-8">
              <input type="date" name="date_of_admission" class="form-control" value="" v-model="DischargeSummary.date_of_admission" v-validate="'required'">
              <span class="help is-danger" v-show="errors.has('date_of_admission')">
  		                	Date of admission is required
  		              	</span>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-4">
              <label class="control-label" for="address">Date of Operation :</label>
            </div>
            <div class="col-md-8">
              <input type="date" name="date_of_operation" class="form-control" value="" v-model="DischargeSummary.date_of_operation" v-validate="'required'">
              <span class="help is-danger" v-show="errors.has('date_of_operation')">
  		                	Date of operation is required
  		              	</span>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-4">
              <label class="control-label" for="date_of_discharge">Date of Discharge :</label>
            </div>
            <div class="col-md-8">
              <input type="date" name="date_of_discharge" class="form-control" value="" v-model="DischargeSummary.date_of_discharge" v-validate="'required'">
              <span class="help is-danger" v-show="errors.has('date_of_discharge')">
  		                	Date of discharge is required
  		              	</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 text-right">
          <textarea name="addressograph" rows="3" class="form-control" placeholder="Addressograph Here" v-model="DischargeSummary.addressograph" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('addressograph')">
            Addressograph is required
          </span>
        </div>
      </div>
      <hr>
      <div class="row form-group">
        <div class="col-md-6">
          <label class="control-label" for="">Diagnosis :</label>
        </div>
        <div class="col-md-6">
          <input type="text" name="diagnosis" class="form-control" value="" v-model="DischargeSummary.diagnosis" v-validate="'required'">
          <span class="help is-danger" v-show="errors.has('diagnosis')">
                    Diagnosis is required
                  </span>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-md-6">
          <label class="control-label" for="">ICD Code :</label>
        </div>
        <div class="col-md-6">
          <input type="text" name="icd" class="form-control" value="" v-model="DischargeSummary.icd" v-validate="'required'">
          <span class="help is-danger" v-show="errors.has('icd')">
                    ICD is required
                  </span>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-md-6">
          <label>Operation Performed : </label>
        </div>
        <div class="col-md-6">
          <input type="text" name="operation_performed" class="form-control" value="" v-model="DischargeSummary.operation_performed" v-validate="'required'">
          <span class="help is-danger" v-show="errors.has('operation_performed')">
                    Operation performed is required
                  </span>
        </div>
      </div>
      <div class="row form-group">
        <div class="col-md-6">
          <label>Consultants Involved : </label>
        </div>
        <div class="col-md-6">
          <textarea name="consultants_involved" rows="3" class="form-control" v-model="DischargeSummary.consultants_involved" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('consultants_involved')">
            Consultants involved is required
          </span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Anaesthesiologist : </label>
        </div>
        <div class="col-md-6">
          <input type="text" name="anaesthesiologist" class="form-control" value="" v-model="DischargeSummary.anaesthesiologist" v-validate="'required'">
          <span class="help is-danger" v-show="errors.has('anaesthesiologist')">
                    Anaesthesiologist is required
                  </span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Clinical History : </label>
        </div>
        <div class="col-md-6">
          <textarea name="clinical_history" rows="4" class="form-control" v-model="DischargeSummary.clinical_history" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('clinical_history')">
            Clinical history is required
          </span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Investigation : </label>
        </div>
        <div class="col-md-6">
          <textarea name="investigation" rows="4" class="form-control" v-model="DischargeSummary.investigation" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('investigation')">
            Investigation is required
          </span>


        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Course in Hospital : </label>
        </div>
        <div class="col-md-6">
          <textarea name="course_in_hospital" rows="4" class="form-control" v-model="DischargeSummary.course_in_hospital" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('course_in_hospital')">
            Course in hospital is required
          </span>
        </div>
      </div>

      <hr>

      <div class="row form-group">
        <div class="col-md-6">
          <label>Treatment on Discharge : </label>
        </div>
        <div class="col-md-6">
          <textarea name="treatment_on_discharge" rows="4" class="form-control" v-model="DischargeSummary.treatment_on_discharge" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('treatment_on_discharge')">
            Treatment on discharge is required
          </span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label class="control-label">Preventive Aspect :</label>
        </div>
        <div class="col-md-6">
          <textarea name="preventive_aspect" rows="3" class="form-control" value="" v-model="DischargeSummary.preventive_aspect" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('preventive_aspect')">
            Preventive aspect is required
          </span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <label class="control-label" for="address">Followup :</label>
        </div>
        <div class="col-md-6">
          <textarea name="followup" rows="3" class="form-control" value="" v-model="DischargeSummary.followup" v-validate="'required'">
          </textarea>
          <span class="help is-danger" v-show="errors.has('followup')">
            Followup is required
          </span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col text-center">
          <input class="btn btn-success" type="button" @click="saveDischargeSummary()" value="Submit">
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
                'DischargeSummary' : {
                  'date_of_admission':'',
                  'date_of_operation':'',
                  'date_of_discharge':'',
                  'addressograph':'',
                  'diagnosis':'',
                  'icd':'',
                  'operation_performed':'',
                  'consultants_involved':'',
                  'anaesthesiologist':'',
                  'clinical_history':'',
                  'investigation':'',
                  'course_in_hospital':'',
                  'treatment_on_discharge':'',
                  'preventive_aspect':'',
                  'followup':''
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },

        saveDischargeSummary() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
                   User.saveDischargeSummary(this.DischargeSummary).then(
                         (response) => {
                         	console.log(response)
                         	if(response.data.status == 200) {
                         		toastr.success('Discharge Summary has been saved', 'DischargeSummary', {timeOut: 5000});
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
