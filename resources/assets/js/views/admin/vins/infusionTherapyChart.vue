<template>
<div class="container">
	<div class="page-header">
		<div class="row">
			<div class="col-md-6">
			<h1>Infusion Therapy Chart</h1>
			</div>
			<div class="col-md-6">
				<div class="text-right">
					DOC NO. F/IPD/6 <br>
					REV. No. 0.0 <br>
					WEF 01-08-2014
				</div>
			</div>
		</div>
	</div>

	<form action="" method="post">
    <div class="row form-group">
      <div class="col-md-6">
        <div class="col-md-6">
          <label>Patient Name : </label>
        </div>
        <div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "patient_name" name="patient_name" value=""  v-model="infusionTherapyChartData.patient_name"/>
					<span class="help is-danger" v-show="errors.has('patient_name')">
										Field is required
									</span>

        </div>
      </div>
      <div class="col-md-6">
        <div class="col-md-6">
          <label>IPD No : </label>
        </div>
        <div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "ipd_no" name="ipd_no" value=""  v-model="infusionTherapyChartData.ipd_no"/>
					<span class="help is-danger" v-show="errors.has('ipd_no')">
										Field is required
									</span>

        </div>
      </div>
    </div>

    <div class="row form-group">
      <div class="col-md-6">
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Age : </label>
          </div>
          <div class="col-md-6">
						<input class="form-control" type = "text" v-validate="'required'" id = "age" name="age" value=""  v-model="infusionTherapyChartData.age"/>
						<span class="help is-danger" v-show="errors.has('age')">
											Field is required
										</span>

          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-6">
            <label>Sex : </label>
          </div>
          <div class="col-md-6">
            <select class="form-control" v-validate="'required'" id = "sex" name="sex" value=""  v-model="infusionTherapyChartData.sex">
              <option disabled selected hidden value="">---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
						<span class="help is-danger" v-show="errors.has('sex')">
											Field is required
										</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="col-md-6">
          <label>Attending Consultant : </label>
        </div>
        <div class="col-md-6">
					<input class="form-control" type = "text" v-validate="'required'" id = "attending_consultant" name="attending_consultant" value=""  v-model="infusionTherapyChartData.attending_consultant"/>
					<span class="help is-danger" v-show="errors.has('attending_consultant')">
										Field is required
									</span>

        </div>
      </div>
    </div>

    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name & Strength</th>
            <th>Volume</th>
            <th>Additions to Infusion</th>
            <th>Rate of infusion</th>
            <th>Time Started</th>
            <th>Time Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="form-group">
            <td>
              <input class="form-control" type="date" name="date_01" value="  " v-model="infusionTherapyChartData.date_01" />

            </td>
            <td>
              <input class="form-control" type="text" name="name_str_01" value="  " v-model="infusionTherapyChartData.name_str_01"/>

            </td>
            <td>
              <input class="form-control" type="text" name="volume_01" value="  " v-model="infusionTherapyChartData.volume_01"/>

            </td>
            <td>
              <input class="form-control" type="text" name="additions_01" value="  " v-model="infusionTherapyChartData.additions_01"/>

            </td>
            <td>
              <input class="form-control" type="text" name="rate_01" value="  " v-model="infusionTherapyChartData.rate_01"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timestart_01" value="  " v-model="infusionTherapyChartData.timestart_01"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timeend_01" value="  " v-model="infusionTherapyChartData.timeend_01"/>

            </td>
          </tr>
          <tr class="form-group">
						<td>
              <input class="form-control" type="date" name="date_02" value="  " v-model="infusionTherapyChartData.date_02" />

            </td>
            <td>
              <input class="form-control" type="text" name="name_str_02" value="  " v-model="infusionTherapyChartData.name_str_02"/>

            </td>
            <td>
              <input class="form-control" type="text" name="volume_02" value="  " v-model="infusionTherapyChartData.volume_02"/>

            </td>
            <td>
              <input class="form-control" type="text" name="additions_02" value="  " v-model="infusionTherapyChartData.additions_02"/>

            </td>
            <td>
              <input class="form-control" type="text" name="rate_02" value="  " v-model="infusionTherapyChartData.rate_02"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timestart_02" value="  " v-model="infusionTherapyChartData.timestart_02"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timeend_02" value="  " v-model="infusionTherapyChartData.timeend_02"/>

            </td>
          </tr>
          <tr class="form-group">
						<td>
              <input class="form-control" type="date" name="date_03" value="  " v-model="infusionTherapyChartData.date_03" />

            </td>
            <td>
              <input class="form-control" type="text" name="name_str_03" value="  " v-model="infusionTherapyChartData.name_str_03"/>

            </td>
            <td>
              <input class="form-control" type="text" name="volume_03" value="  " v-model="infusionTherapyChartData.volume_03"/>

            </td>
            <td>
              <input class="form-control" type="text" name="additions_03" value="  " v-model="infusionTherapyChartData.additions_03"/>

            </td>
            <td>
              <input class="form-control" type="text" name="rate_03" value="  " v-model="infusionTherapyChartData.rate_03"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timestart_03" value="  " v-model="infusionTherapyChartData.timestart_03"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timeend_03" value="  " v-model="infusionTherapyChartData.timeend_03"/>

            </td>
          </tr>
					<tr>
						<td>
              <input class="form-control" type="date" name="date_04" value="  " v-model="infusionTherapyChartData.date_04" />

            </td>
            <td>
              <input class="form-control" type="text" name="name_str_04" value="  " v-model="infusionTherapyChartData.name_str_04"/>

            </td>
            <td>
              <input class="form-control" type="text" name="volume_04" value="  " v-model="infusionTherapyChartData.volume_04"/>

            </td>
            <td>
              <input class="form-control" type="text" name="additions_04" value="  " v-model="infusionTherapyChartData.additions_04"/>

            </td>
            <td>
              <input class="form-control" type="text" name="rate_04" value="  " v-model="infusionTherapyChartData.rate_04"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timestart_04" value="  " v-model="infusionTherapyChartData.timestart_04"/>

            </td>
            <td>
              <input class="form-control" type="time" name="timeend_04" value="  " v-model="infusionTherapyChartData.timeend_04"/>

            </td></tr>
          <tr class="form-group">
						<td>
							<input class="form-control" type="date" name="date_05" value="  " v-model="infusionTherapyChartData.date_05" />

						</td>
						<td>
							<input class="form-control" type="text" name="name_str_05" value="  " v-model="infusionTherapyChartData.name_str_05"/>

						</td>
						<td>
							<input class="form-control" type="text" name="volume_05" value="  " v-model="infusionTherapyChartData.volume_05"/>

						</td>
						<td>
							<input class="form-control" type="text" name="additions_05" value="  " v-model="infusionTherapyChartData.additions_05"/>

						</td>
						<td>
							<input class="form-control" type="text" name="rate_05" value="  " v-model="infusionTherapyChartData.rate_05"/>

						</td>
						<td>
							<input class="form-control" type="time" name="timestart_05" value="  " v-model="infusionTherapyChartData.timestart_05"/>

						</td>
						<td>
							<input class="form-control" type="time" name="timeend_05" value="  " v-model="infusionTherapyChartData.timeend_05"/>

						</td>
          </tr>
          <tr class="form-group">
						<td>
							<input class="form-control" type="date" name="date_06" value="  " v-model="infusionTherapyChartData.date_06" />

						</td>
						<td>
							<input class="form-control" type="text" name="name_str_06" value="  " v-model="infusionTherapyChartData.name_str_06"/>

						</td>
						<td>
							<input class="form-control" type="text" name="volume_06" value="  " v-model="infusionTherapyChartData.volume_06"/>

						</td>
						<td>
							<input class="form-control" type="text" name="additions_06" value="  " v-model="infusionTherapyChartData.additions_06"/>

						</td>
						<td>
							<input class="form-control" type="text" name="rate_06" value="  " v-model="infusionTherapyChartData.rate_06"/>

						</td>
						<td>
							<input class="form-control" type="time" name="timestart_06" value="  " v-model="infusionTherapyChartData.timestart_06"/>

						</td>
						<td>
							<input class="form-control" type="time" name="timeend_06" value="  " v-model="infusionTherapyChartData.timeend_06"/>

						</td>
          </tr>
        </tbody>
      </table>
    </div>
		<div class="row form-group text-center">
			<button class="btn btn-success" type="button" @click="saveinfusionTherapyChart()">Submit</button>
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
                'infusionTherapyChartData' : {
									'patient_name':'',
								 'ipd_no':'',
								 'age':'',
								 'sex':'',
								 'attending_consultant':'',
								 'date_01':'',
								 'name_str_01':'',
								 'volume_01':'',
								 'additions_01':'',
								 'rate_01':'',
								 'timestart_01':'',
								 'timeend_01':'',
								 'date_02':'',
								 'name_str_02':'',
								 'volume_02':'',
								 'additions_02':'',
								 'rate_02':'',
								 'timestart_02':'',
								 'timeend_02':'',
								 'date_03':'',
								 'name_str_03':'',
								 'volume_03':'',
								 'additions_03':'',
								 'rate_03':'',
								 'timestart_03':'',
								 'timeend_03':'',
								 'date_04':'',
								 'name_str_04':'',
								 'volume_04':'',
								 'additions_04':'',
								 'rate_04':'',
								 'timestart_04':'',
								 'timeend_04':'',
								 'date_05':'',
								 'name_str_05':'',
								 'volume_05':'',
								 'additions_05':'',
								 'rate_05':'',
								 'timestart_05':'',
								 'timeend_05':'',
								 'date_06':'',
								 'name_str_06':'',
								 'volume_06':'',
								 'additions_06':'',
								 'rate_06':'',
								 'timestart_06':'',
								 'timeend_06':''
                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveinfusionTherapyChart() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveinfusionTherapyChart(this.infusionTherapyChartData).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('Patient details have been saved', 'patient detail', {timeOut: 5000});
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
