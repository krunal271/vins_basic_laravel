<template>
  <div class="container">
  	<div class="page-header">
  		<div class="row">
  			<div class="col-md-6">
  			<h1>Blood Sugar Monitoring Chart</h1>
  			</div>
  			<div class="col-md-6">
  				<div class="text-right">
  					DOC NO. FMT/IPD/36 <br>
  					REV. No. 0.1 <br>
  					WEF 01-10-2014 <br>
  					PAGE NO. 01 OF 02
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
            <input class="form-control" type="text"  v-validate="'required'" name="patient_name" v-model="patient_name" id="patient_name" value="" >
            <span class="help is-danger" v-show="errors.has('patient_name')">
              Field is required
            </span>
          </div>
        </div>
  			<div class="col-md-6">
  				<div class="col-md-6">
  					<label>Bed No:</label>
  				</div>
  				<div class="col-md-6">
  					<input class="form-control" type="text"  v-validate="'required'" name="bed_no" v-model="bed_no" id="bed_no" value="" >
            <span class="help is-danger" v-show="errors.has('bed_no')">
              Field is required
            </span>
  				</div>
        </div>
      </div>

      <div class="row form-group">
  			<div class="col-md-4">
  				<div class="col-md-6">
  					<label>IPD No:</label>
  				</div>
  				<div class="col-md-6">
  					<input class="form-control" type="text"  v-validate="'required'" name="ipd_no" v-model="ipd_no" id="ipd_no" value="" >
            <span class="help is-danger" v-show="errors.has('ipd_no')">
              Field is required
            </span>
  				</div>
        </div>


  			<div class="col-md-4">
  				<div class="col-md-6">
  					<label>Age:</label>
  				</div>
  				<div class="col-md-6">
  					<input class="form-control" type="text"  v-validate="'required'" name="age" v-model="age" id="age" value="" >
            <span class="help is-danger" v-show="errors.has('age')">
              Field is required
            </span>
  				</div>
        </div>
        <div class="col-md-4">
          <div class="col-md-6">
  					<label>Sex:</label>
  				</div>
  				<div class="col-md-6">
  					<select class="form-control" name="sex" v-validate="'required'" v-model="sex" value="">
  						<option value="Male">Male</option>
  						<option value="Female">Female</option>
  					</select>
            <span class="help is-danger" v-show="errors.has('sex')">
              Field is required
            </span>
  				</div>
        </div>
      </div>

      <div class="row form-group"><hr>
  		  <table class="table table-bordered">
  		    <thead>
    			  <tr>
      				<th>Date</th>
      				<th>Time</th>
      				<th>Blood Sugar Level</th>
      				<th>Insulin(Unit)</th>
              <th>Name & Sign</th>
    			  </tr>
    			</thead>
    			<tbody>
            <tr>
              <td><input class="form-control" type="date" name="date_00" v-model="date_00" value=""/></td>
              <td><input class="form-control" type="time" name="time_00" v-model="time_00" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_00" v-model="bloodsugar_level_00" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_00" v-model="insulin_00" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_00" v-model="name_sign_00" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_01" v-model="date_01" value=""/></td>
              <td><input class="form-control" type="time" name="time_01" v-model="time_01" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_01" v-model="bloodsugar_level_01" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_01" v-model="insulin_01" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_01" v-model="name_sign_01" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_02" v-model="date_02" value=""/></td>
              <td><input class="form-control" type="time" name="time_02" v-model="time_02" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_02" v-model="bloodsugar_level_02" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_02" v-model="insulin_02" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_02" v-model="name_sign_02" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_03" v-model="date_03" value=""/></td>
              <td><input class="form-control" type="time" name="time_03" v-model="time_03" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_03" v-model="bloodsugar_level_03" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_03" v-model="insulin_03" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_03" v-model="name_sign_03" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_04" v-model="date_04" value=""/></td>
              <td><input class="form-control" type="time" name="time_04" v-model="time_04" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_04" v-model="bloodsugar_level_04" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_04" v-model="insulin_04" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_04" v-model="name_sign_04" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_05" v-model="date_05" value=""/></td>
              <td><input class="form-control" type="time" name="time_05" v-model="time_05" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_05" v-model="bloodsugar_level_05" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_05" v-model="insulin_05" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_05" v-model="name_sign_05" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_06" v-model="date_06" value=""/></td>
              <td><input class="form-control" type="time" name="time_06" v-model="time_06" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_06" v-model="bloodsugar_level_06" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_06" v-model="insulin_06" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_06" v-model="name_sign_06" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_07" v-model="date_07" value=""/></td>
              <td><input class="form-control" type="time" name="time_07" v-model="time_07" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_07" v-model="bloodsugar_level_07" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_07" v-model="insulin_07" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_07" v-model="name_sign_07" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_08" v-model="date_08" value=""/></td>
              <td><input class="form-control" type="time" name="time_08" v-model="time_08" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_08" v-model="bloodsugar_level_08" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_08" v-model="insulin_08" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_08" v-model="name_sign_08" value=""/></td>
            </tr>
            <tr>
              <td><input class="form-control" type="date" name="date_09" v-model="date_09" value=""/></td>
              <td><input class="form-control" type="time" name="time_09" v-model="time_09" value=""/></td>
              <td><input class="form-control" type="text" name="bloodsugar_level_09" v-model="bloodsugar_level_09" value=""/></td>
              <td><input class="form-control" type="text" name="insulin_09" v-model="insulin_09" value=""/></td>
              <td><input class="form-control" type="text" name="name_sign_09" v-model="name_sign_09" value=""/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row form-group text-center">
        <button class="form-group btn btn-success" type="button">Submit</button>
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
                'bloodSugarMonitoringChart' : {
                  'patient_name': '',
                  'bed_no': '',
                  'ipd_no': '',
                  'age': '',
                  'sex': '',
                  'date_00': '',
                  'time_00': '',
                  'bloodsugar_level_00': '',
                  'insulin_00': '',
                  'name_sign_00': '',
                  'date_01': '',
                  'time_01': '',
                  'bloodsugar_level_01': '',
                  'insulin_01': '',
                  'name_sign_01': '',
                  'date_02': '',
                  'time_02': '',
                  'bloodsugar_level_02': '',
                  'insulin_02': '',
                  'name_sign_02': '',
                  'date_03': '',
                  'time_03': '',
                  'bloodsugar_level_03': '',
                  'insulin_03': '',
                  'name_sign_03': '',
                  'date_04': '',
                  'time_04': '',
                  'bloodsugar_level_04': '',
                  'insulin_04': '',
                  'name_sign_04': '',
                  'date_05': '',
                  'time_05': '',
                  'bloodsugar_level_05': '',
                  'insulin_05': '',
                  'name_sign_05': '',
                  'date_06': '',
                  'time_06': '',
                  'bloodsugar_level_06': '',
                  'insulin_06': '',
                  'name_sign_06': '',
                  'date_07': '',
                  'time_07': '',
                  'bloodsugar_level_07': '',
                  'insulin_07': '',
                  'name_sign_07': '',
                  'date_08': '',
                  'time_08': '',
                  'bloodsugar_level_08': '',
                  'insulin_08': '',
                  'name_sign_08': '',
                  'date_09': '',
                  'time_09': '',
                  'bloodsugar_level_09': '',
                  'insulin_09': '',
                  'name_sign_09': '',

                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveBloodSugarMonitoringChart() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveBloodSugarMonitoringChart(this.bloodSugarMonitoringChart).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('Blood Sugar Monitoring Details have been saved', 'Blood Sugar Monitoring Chart', {timeOut: 5000});
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
