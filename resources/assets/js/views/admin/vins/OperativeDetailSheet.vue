<template id="">
  <div class="container">
    <div class="page-header">
      <div class="row">
        <div class="col-md-6">
          <h1>Operative Detail Sheet</h1>
        </div>
        <div class="col-md-6">
          <div class="text-right">
            DOC NO. FMT/HIC/09 </br>
            REV. No. 0.1 </br>
            WEF 10-10-2015
          </div>
        </div>
      </div>
    </div>

    <form action="" method="post">
      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>OT No : </label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="ot_no" v-model="OperativeDetailSheet.ot_no" v-validate="'required'">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <span class="help is-danger" v-show="errors.has('ot_no')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Date : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="date" name="date" v-model="OperativeDetailSheet.date" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('date')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Wheel In Time : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="time" name="wheel_in" v-model="OperativeDetailSheet.wheel_in" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('wheel_in')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Wheel Out Time : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="time" name="wheel_out" v-model="OperativeDetailSheet.wheel_out" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('wheel_out')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Anesthesia Induction Time : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="time" name="anesthesa_induction_time" v-model="OperativeDetailSheet.anesthesa_induction_time" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('anesthesa_induction_time')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Reversal Time : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="time" name="reversal_time" v-model="OperativeDetailSheet.reversal_time" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('reversal_time')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Antibiotic : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="antibiotic1" v-model="OperativeDetailSheet.antibiotic1" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('antibiotic1')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Time : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="antibiotic1_time" v-model="OperativeDetailSheet.antibiotic1_time" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('antibiotic1_time')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Antibiotic : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="antibiotic2" v-model="OperativeDetailSheet.antibiotic2" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('antibiotic2')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Time : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="antibiotic2_time" v-model="OperativeDetailSheet.antibiotic2_time" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('antibiotic2_time')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Surgical Time From : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="time" name="surgical_time_from" v-model="OperativeDetailSheet.surgical_time_from" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('surgical_time_from')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>To : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="surgical_time_to" v-model="OperativeDetailSheet.surgical_time_to" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('surgical_time_to')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Surgery Type : </label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="surgery_type" v-model="OperativeDetailSheet.surgery_type" v-validate="'required'">
              <option value="elective">Elective</option>
              <option value="emergency">Emergency</option>
            </select>
            <span class="help is-danger" v-show="errors.has('surgery_type')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col">
          <label>Surgeons : </label>
        </div>
        <div class="col">
          <label>Anesthetists : </label>
        </div>
      </div>

      <div class="row form-group">
        <div class="col">
          <input class="form-control" type="text" name="surgeon1" v-model="OperativeDetailSheet.surgeon1" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('surgeon1')">
							Field is required
						</span>
        </div>
        <div class="col">
          <input class="form-control" type="text" name="anesthetist1" v-model="OperativeDetailSheet.anesthetist1" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('anesthetist1')">
							Field is required
						</span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col">
          <input class="form-control" type="text" name="surgeon2" v-model="OperativeDetailSheet.surgeon2" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('surgeon2')">
							Field is required
						</span>
        </div>
        <div class="col">
          <input class="form-control" type="text" name="anesthetist2" v-model="OperativeDetailSheet.anesthetist2" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('anesthetist2')">
							Field is required
						</span>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <input class="form-control" type="text" name="surgeon3" v-model="OperativeDetailSheet.surgeon3" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('surgeon3')">
							Field is required
						</span>
        </div>
        <div class="col-md-6">
          <input class="form-control" type="text" name="anesthetist3" v-model="OperativeDetailSheet.anesthetist3" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('anesthetist3')">
							Field is required
						</span>
        </div>
      </div>

      <hr />

      <div class="row">
        <h3>Utilization : </h3>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>IITV : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="iitv" v-model="OperativeDetailSheet.iitv" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('iitv')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Fentanyl : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="fentanyl" v-model="OperativeDetailSheet.fentanyl" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('fentanyl')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Drill : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="drill" v-model="OperativeDetailSheet.drill" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('drill')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Sevoflurane / Desflurane : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="sevoflurane_desflurane" v-model="OperativeDetailSheet.sevoflurane_desflurane" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('sevoflurane_desflurane')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Microscope : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="microscope" v-model="OperativeDetailSheet.microscope" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('microscope')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Endoscope : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="endoscope" v-model="OperativeDetailSheet.endoscope" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('endoscope')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>CUSSA : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="cussa" v-model="OperativeDetailSheet.cussa" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('cussa')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Implants : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="implants" v-model="OperativeDetailSheet.implants" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('implants')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Vendor : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="vendor" v-model="OperativeDetailSheet.vendor" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('vendor')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Diagnosis : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="diagnosis" v-model="OperativeDetailSheet.diagnosis" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('diagnosis')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Operation Performed : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="operation_performed" v-model="OperativeDetailSheet.operation_performed" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('operation_performed')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <hr />

      <div class="row">
        <h3>Payment Details : </h3>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Mediclaim / Cashless : </label>
          </div>
          <div class="col-md-6">
            <select class="form-control" name="mediclaim" v-model="OperativeDetailSheet.mediclaim" v-validate="'required'">
              <option value="mediclaim">Mediclaim</option>
              <option value="cashless">Cashless</option>
            </select>
            <span class="help is-danger" v-show="errors.has('mediclaim')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Name of TPA</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="name_tpa" v-model="OperativeDetailSheet.name_tpa" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('name_tpa')">
							Field is required
						</span>

          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Company / Third Party : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="company_thirdparty" v-model="OperativeDetailSheet.company_thirdparty" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('company_thirdparty')">
							Field is required
						</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Name of Party</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="name_party" v-model="OperativeDetailSheet.name_party" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('name_party')">
							Field is required
						</span>

          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Amount : </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="amount" v-model="OperativeDetailSheet.amount" v-validate="'required'" value="" />
						<span class="help is-danger" v-show="errors.has('amount')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Surgery Only</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="surgery_only" v-model="OperativeDetailSheet.surgery_only" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('surgery_only')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Package (Surgical)</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="package_surgical" v-model="OperativeDetailSheet.package_surgical" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('package_surgical')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Package (Total)</label>
          </div>
          <div class="col-md-6">
            <input class="form-control" type="text" name="package_total" v-model="OperativeDetailSheet.package_total" v-validate="'required'" value=""/>
						<span class="help is-danger" v-show="errors.has('package_total')">
							Field is required
						</span>
          </div>
        </div>
      </div>

      <div class="row form-group">
        <div class="col text-center">
          <input class="btn btn-success" type="button" @click="saveOperativeDetailSheet()" value="Submit">
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
                'OperativeDetailSheet' : {
                  'ot_no':'',
                  'date':'',
                  'wheel_in':'',
                  'wheel_out':'',
                  'anesthesa_induction_time':'',
                  'reversal_time':'',
                  'antibiotic1':'',
                  'antibiotic1_time':'',
                  'antibiotic2':'',
                  'antibiotic2_time':'',
                  'surgical_time_from':'',
                  'surgical_time_to':'',
                  'surgery_type':'',
                  'surgeon1':'',
                  'anesthetist1':'',
                  'surgeon2':'',
                  'anesthetist2':'',
                  'surgeon3':'',
                  'anesthetist3':'',
                  'iitv':'',
                  'fentanyl':'',
                  'drill':'',
                  'sevoflurane_desflurane':'',
                  'microscope':'',
                  'endoscope':'',
                  'cussa':'',
                  'implants':'',
                  'vendor':'',
                  'diagnosis':'',
                  'operation_performed':'',
                  'mediclaim':'',
                  'name_tpa':'',
                  'company_thirdparty':'',
                  'name_party':'',
                  'amount':'',
                  'surgery_only':'',
                  'package_surgical':'',
                  'package_total':'',
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },

        saveOperativeDetailSheet() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
                   User.saveOperativeDetailSheet(this.OperativeDetailSheet).then(
                         (response) => {
                         	console.log(response)
                         	if(response.data.status == 200) {
                         		toastr.success('Operative Detail Sheet Form has been saved', 'OperativeDetailSheet', {timeOut: 5000});
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
