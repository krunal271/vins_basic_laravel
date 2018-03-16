<template>
<div class="container">
	<div class="page-header">
		<div class="row">
			<div class="col-md-6">
			<h1>Blood Transfusion Form</h1>
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
		<div class="form-group row">
				<div class="col">
					<label>Patient's Name:</label>
				</div>
				<div class="col">
					<input class="form-control" type="text"  name="patient_name" v-validate="'required'" v-model="bloodTransfusionDetails.patient_name" id="patient_name" value="" >
					<span class="help is-danger" v-show="errors.has('patient_name')">
						Field is required
					</span>
				</div>
				<div class="col">
					<label>IPD No.:</label>
				</div>
				<div class="col">
					<input type="text" class="form-control" name="ipd_no" v-validate="'required'" v-model="bloodTransfusionDetails.ipd_no" id="ipd_no" value="" >
					<span class="help is-danger" v-show="errors.has('ipd_no')">
						Field is required
					</span>
				</div>
		</div>
		<div class="form-row">
			<div class="col">
				<div class="col-md-6">
					<label>Age:</label>
				</div>
				<div class="col-md-6">
					<input type="text" class="form-control" name="age" v-validate="'required'" v-model="bloodTransfusionDetails.age" id="age" value="" >
					<span class="help is-danger" v-show="errors.has('age')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col">
				<div class="col-md-6">
					<label>Sex:</label>
				</div>
				<div class="col-md-6">
					<select class="form-control" name="sex" v-validate="'required'" v-model="bloodTransfusionDetails.sex">
						<option value="NA">NA</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					<span class="help is-danger" v-show="errors.has('sex')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Date:</label>
				</div>
				<div class="col-md-6">
					<input type="date" class="form-control" name="date" v-validate="'required'" v-model="bloodTransfusionDetails.date" id="date" value="" >
					<span class="help is-danger" v-show="errors.has('date')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Time:</label>
				</div>
				<div class="col-md-6">
					<input type="time" class="form-control" name="time" v-validate="'required'" v-model="bloodTransfusionDetails.time" id="time" value="" >
					<span class="help is-danger" v-show="errors.has('time')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Patient's Blood Group:</label>
				</div>
				<div class="col-md-6">
					<select class="form-control" name="blood_group" v-validate="'required'" v-model="bloodTransfusionDetails.blood_group">
						<option value="A+">A+</option>
						<option value="A-">A-</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
					</select>
					<span class="help is-danger" v-show="errors.has('blood_group')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
					<label>History of previous BT :</label>
				</div>
				<div class="col-md-6">
					<select class="form-control" name="history_bt" v-validate="'required'" v-model="bloodTransfusionDetails.history_bt">
						<option value="NA">NA</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
					<span class="help is-danger" v-show="errors.has('history_bt')">
						Field is required
					</span>
				</div>
			</div>
		</div>


		<div class="row form-group">
			<div class="col-md-6">
				<label>If adverse reaction during previous transfusion and it's nature :</label>
			</div>
			<div class="col-md-6">
				<input type="text" class="form-control" name="adv" v-model="bloodTransfusionDetails.adv" id="adv" value="" >
			</div>
		</div>

		<hr>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Blood Bag No.:</label>
				</div>
				<div class="col-md-6">
					<input type="text" class="form-control" name="blood_bag_no" v-validate="'required'" v-model="bloodTransfusionDetails.blood_bag_no" id="blood_bag_no" value="" >
					<span class="help is-danger" v-show="errors.has('blood_bag_no')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Blood Group:</label>
				</div>
				<div class="col-md-6">
					<select class="form-control" name="blood_bag_group" v-validate="'required'" v-model="bloodTransfusionDetails.blood_bag_group">
						<option value="A+">A+</option>
						<option value="A-">A-</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
					</select>
					<span class="help is-danger" v-show="errors.has('blood_bag_group')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Product's Name:</label>
				</div>
				<div class="col-md-6">
					<select class="form-control" id="prod_name" name="prod_name" v-validate="'required'" v-model="bloodTransfusionDetails.prod_name">
							<option value="whole_blood"> Whole Blood </option>
							<option value="PCV"> PCV </option>
							<option value="PRC"> PRC </option>
							<option value="FFP"> FFP </option>
							<option value="SDP"> SDP </option>
							<option value="Cryoprecipitate"> Cryoprecipitate </option>
							<option value="OtherOther"> Other </option>
					</select>
					<span class="help is-danger" v-show="errors.has('prod_name')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Name of Blood Bank:</label>
				</div>
				<div class="col-md-6">
					<input type="text" class="form-control" name="name_blood_bank" v-validate="'required'" v-model="bloodTransfusionDetails.name_blood_bank" id="name_blood_bank1" value="" >
					<span class="help is-danger" v-show="errors.has('name_blood_bank')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Date of Expiry:</label>
				</div>
				<div class="col-md-6">
					<input type="date" class="form-control" name="expiry_date" v-validate="'required'" v-model="bloodTransfusionDetails.expiry_date" id="expiry_date" value="" >
					<span class="help is-danger" v-show="errors.has('expiry_date')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Checked by Dr.:</label>
				</div>
				<div class="col-md-6">
					<input type="text" class="form-control" name="checked_by" v-validate="'required'" v-model="bloodTransfusionDetails.checked_by" id="checked_by" value="" >
					<span class="help is-danger" v-show="errors.has('checked_by')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Unit Nurse:</label>
				</div>
				<div class="col-md-6">
					<input type="text" class="form-control" name="unit_nurse" v-validate="'required'" v-model="bloodTransfusionDetails.unit_nurse" id="unit_nurse" value="" >
					<span class="help is-danger" v-show="errors.has('unit_nurse')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row form-group">
			<div class="col-md-6">
				<div class="col-md-6">
					<label>BT Started at:</label>
				</div>
				<div class="col-md-6">
					<input type="time" class="form-control" name="start_time" v-validate="'required'" v-model="bloodTransfusionDetails.start_time" id="start_time" value="" >
					<span class="help is-danger" v-show="errors.has('start_time')">
						Field is required
					</span>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-6">
					<label>Stopped at:</label>
				</div>
				<div class="col-md-6">
					<input type="time" class="form-control" name="end_time" v-validate="'required'" v-model="bloodTransfusionDetails.end_time" id="end_time" value="" >
					<span class="help is-danger" v-show="errors.has('end_time')">
						Field is required
					</span>
				</div>
			</div>
		</div>

		<div class="row">
			<h3>Vital Chart:</h3>
		</div>
		<div class="row">
			<label>Vitals must be taken every 15 mins during transfusion and post transfusion upto 60 minutes.</label>
		</div>
		<div class="row">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th></th>
						<th colspan="4" class="text-center">I</th>
						<th colspan="4" class="text-center">II</th>
					</tr>
					<tr>
						<th></th>
						<th>Time</th>
						<th>Temp</th>
						<th>Resp</th>
						<th>BP</th>
						<th>Time</th>
						<th>Temp</th>
						<th>Resp</th>
						<th>BP</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Pre - Transfusion</td>
						<td><input type="time" class="form-control" name="_01_01" v-model="bloodTransfusionDetails._01_01" id="_01_01"></td value="" >
						<td><input type="text" class="form-control" name="_01_02" v-model="bloodTransfusionDetails._01_02" id="_01_02"></td value="" >
						<td><input type="text" class="form-control" name="_01_03" v-model="bloodTransfusionDetails._01_03" id="_01_03"></td value="" >
						<td><input type="text" class="form-control" name="_01_04" v-model="bloodTransfusionDetails._01_04" id="_01_04"></td value="" >
						<td><input type="time" class="form-control" name="_01_05" v-model="bloodTransfusionDetails._01_05" id="_01_05"></td value="" >
						<td><input type="text" class="form-control" name="_01_06" v-model="bloodTransfusionDetails._01_06" id="_01_06"></td value="" >
						<td><input type="text" class="form-control" name="_01_07" v-model="bloodTransfusionDetails._01_07" id="_01_07"></td value="" >
						<td><input type="text" class="form-control" name="_01_08" v-model="bloodTransfusionDetails._01_08" id="_01_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_02_01" v-model="bloodTransfusionDetails._02_01" id="_02_01"></td value="" >
						<td><input type="text" class="form-control" name="_02_02" v-model="bloodTransfusionDetails._02_02" id="_02_02"></td value="" >
						<td><input type="text" class="form-control" name="_02_03" v-model="bloodTransfusionDetails._02_03" id="_02_03"></td value="" >
						<td><input type="text" class="form-control" name="_02_04" v-model="bloodTransfusionDetails._02_04" id="_02_04"></td value="" >
						<td><input type="time" class="form-control" name="_02_05" v-model="bloodTransfusionDetails._02_05" id="_02_05"></td value="" >
						<td><input type="text" class="form-control" name="_02_06" v-model="bloodTransfusionDetails._02_06" id="_02_06"></td value="" >
						<td><input type="text" class="form-control" name="_02_07" v-model="bloodTransfusionDetails._02_07" id="_02_07"></td value="" >
						<td><input type="text" class="form-control" name="_02_08" v-model="bloodTransfusionDetails._02_08" id="_02_08"></td value="" >
					</tr>
					<tr>
						<td>During Transfusion</td>
						<td><input type="time" class="form-control" name="_03_01" v-model="bloodTransfusionDetails._03_01" id="_03_01"></td value="" >
						<td><input type="text" class="form-control" name="_03_02" v-model="bloodTransfusionDetails._03_02" id="_03_02"></td value="" >
						<td><input type="text" class="form-control" name="_03_03" v-model="bloodTransfusionDetails._03_03" id="_03_03"></td value="" >
						<td><input type="text" class="form-control" name="_03_04" v-model="bloodTransfusionDetails._03_04" id="_03_04"></td value="" >
						<td><input type="time" class="form-control" name="_03_05" v-model="bloodTransfusionDetails._03_05" id="_03_05"></td value="" >
						<td><input type="text" class="form-control" name="_03_06" v-model="bloodTransfusionDetails._03_06" id="_03_06"></td value="" >
						<td><input type="text" class="form-control" name="_03_07" v-model="bloodTransfusionDetails._03_07" id="_03_07"></td value="" >
						<td><input type="text" class="form-control" name="_03_08" v-model="bloodTransfusionDetails._03_08" id="_03_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_04_01" v-model="bloodTransfusionDetails._04_01" id="_04_01"></td value="" >
						<td><input type="text" class="form-control" name="_04_02" v-model="bloodTransfusionDetails._04_02" id="_04_02"></td value="" >
						<td><input type="text" class="form-control" name="_04_03" v-model="bloodTransfusionDetails._04_03" id="_04_03"></td value="" >
						<td><input type="text" class="form-control" name="_04_04" v-model="bloodTransfusionDetails._04_04" id="_04_04"></td value="" >
						<td><input type="time" class="form-control" name="_04_05" v-model="bloodTransfusionDetails._04_05" id="_04_05"></td value="" >
						<td><input type="text" class="form-control" name="_04_06" v-model="bloodTransfusionDetails._04_06" id="_04_06"></td value="" >
						<td><input type="text" class="form-control" name="_04_07" v-model="bloodTransfusionDetails._04_07" id="_04_07"></td value="" >
						<td><input type="text" class="form-control" name="_04_08" v-model="bloodTransfusionDetails._04_08" id="_04_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_05_01" v-model="bloodTransfusionDetails._05_01" id="_05_01"></td value="" >
						<td><input type="text" class="form-control" name="_05_02" v-model="bloodTransfusionDetails._05_02" id="_05_02"></td value="" >
						<td><input type="text" class="form-control" name="_05_03" v-model="bloodTransfusionDetails._05_03" id="_05_03"></td value="" >
						<td><input type="text" class="form-control" name="_05_04" v-model="bloodTransfusionDetails._05_04" id="_05_04"></td value="" >
						<td><input type="time" class="form-control" name="_05_05" v-model="bloodTransfusionDetails._05_05" id="_05_05"></td value="" >
						<td><input type="text" class="form-control" name="_05_06" v-model="bloodTransfusionDetails._05_06" id="_05_06"></td value="" >
						<td><input type="text" class="form-control" name="_05_07" v-model="bloodTransfusionDetails._05_07" id="_05_07"></td value="" >
						<td><input type="text" class="form-control" name="_05_08" v-model="bloodTransfusionDetails._05_08" id="_05_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_06_01" v-model="bloodTransfusionDetails._06_01" id="_06_01"></td value="" >
						<td><input type="text" class="form-control" name="_06_02" v-model="bloodTransfusionDetails._06_02" id="_06_02"></td value="" >
						<td><input type="text" class="form-control" name="_06_03" v-model="bloodTransfusionDetails._06_03" id="_06_03"></td value="" >
						<td><input type="text" class="form-control" name="_06_04" v-model="bloodTransfusionDetails._06_04" id="_06_04"></td value="" >
						<td><input type="time" class="form-control" name="_06_05" v-model="bloodTransfusionDetails._06_05" id="_06_05"></td value="" >
						<td><input type="text" class="form-control" name="_06_06" v-model="bloodTransfusionDetails._06_06" id="_06_06"></td value="" >
						<td><input type="text" class="form-control" name="_06_07" v-model="bloodTransfusionDetails._06_07" id="_06_07"></td value="" >
						<td><input type="text" class="form-control" name="_06_08" v-model="bloodTransfusionDetails._06_08" id="_06_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_07_01" v-model="bloodTransfusionDetails._07_01" id="_07_01"></td value="" >
						<td><input type="text" class="form-control" name="_07_02" v-model="bloodTransfusionDetails._07_02" id="_07_02"></td value="" >
						<td><input type="text" class="form-control" name="_07_03" v-model="bloodTransfusionDetails._07_03" id="_07_03"></td value="" >
						<td><input type="text" class="form-control" name="_07_04" v-model="bloodTransfusionDetails._07_04" id="_07_04"></td value="" >
						<td><input type="time" class="form-control" name="_07_05" v-model="bloodTransfusionDetails._07_05" id="_07_05"></td value="" >
						<td><input type="text" class="form-control" name="_07_06" v-model="bloodTransfusionDetails._07_06" id="_07_06"></td value="" >
						<td><input type="text" class="form-control" name="_07_07" v-model="bloodTransfusionDetails._07_07" id="_07_07"></td value="" >
						<td><input type="text" class="form-control" name="_07_08" v-model="bloodTransfusionDetails._07_08" id="_07_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_08_01" v-model="bloodTransfusionDetails._08_01" id="_08_01"></td value="" >
						<td><input type="text" class="form-control" name="_08_02" v-model="bloodTransfusionDetails._08_02" id="_08_02"></td value="" >
						<td><input type="text" class="form-control" name="_08_03" v-model="bloodTransfusionDetails._08_03" id="_08_03"></td value="" >
						<td><input type="text" class="form-control" name="_08_04" v-model="bloodTransfusionDetails._08_04" id="_08_04"></td value="" >
						<td><input type="time" class="form-control" name="_08_05" v-model="bloodTransfusionDetails._08_05" id="_08_05"></td value="" >
						<td><input type="text" class="form-control" name="_08_06" v-model="bloodTransfusionDetails._08_06" id="_08_06"></td value="" >
						<td><input type="text" class="form-control" name="_08_07" v-model="bloodTransfusionDetails._08_07" id="_08_07"></td value="" >
						<td><input type="text" class="form-control" name="_08_08" v-model="bloodTransfusionDetails._08_08" id="_08_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_09_01" v-model="bloodTransfusionDetails._09_01" id="_09_01"></td value="" >
						<td><input type="text" class="form-control" name="_09_02" v-model="bloodTransfusionDetails._09_02" id="_09_02"></td value="" >
						<td><input type="text" class="form-control" name="_09_03" v-model="bloodTransfusionDetails._09_03" id="_09_03"></td value="" >
						<td><input type="text" class="form-control" name="_09_04" v-model="bloodTransfusionDetails._09_04" id="_09_04"></td value="" >
						<td><input type="time" class="form-control" name="_09_05" v-model="bloodTransfusionDetails._09_05" id="_09_05"></td value="" >
						<td><input type="text" class="form-control" name="_09_06" v-model="bloodTransfusionDetails._09_06" id="_09_06"></td value="" >
						<td><input type="text" class="form-control" name="_09_07" v-model="bloodTransfusionDetails._09_07" id="_09_07"></td value="" >
						<td><input type="text" class="form-control" name="_09_08" v-model="bloodTransfusionDetails._09_08" id="_09_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_10_01" v-model="bloodTransfusionDetails._10_01" id="_10_01"></td value="" >
						<td><input type="text" class="form-control" name="_10_02" v-model="bloodTransfusionDetails._10_02" id="_10_02"></td value="" >
						<td><input type="text" class="form-control" name="_10_03" v-model="bloodTransfusionDetails._10_03" id="_10_03"></td value="" >
						<td><input type="text" class="form-control" name="_10_04" v-model="bloodTransfusionDetails._10_04" id="_10_04"></td value="" >
						<td><input type="time" class="form-control" name="_10_05" v-model="bloodTransfusionDetails._10_05" id="_10_05"></td value="" >
						<td><input type="text" class="form-control" name="_10_06" v-model="bloodTransfusionDetails._10_06" id="_10_06"></td value="" >
						<td><input type="text" class="form-control" name="_10_07" v-model="bloodTransfusionDetails._10_07" id="_10_07"></td value="" >
						<td><input type="text" class="form-control" name="_10_08" v-model="bloodTransfusionDetails._10_08" id="_10_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_11_01" v-model="bloodTransfusionDetails._11_01" id="_11_01"></td value="" >
						<td><input type="text" class="form-control" name="_11_02" v-model="bloodTransfusionDetails._11_02" id="_11_02"></td value="" >
						<td><input type="text" class="form-control" name="_11_03" v-model="bloodTransfusionDetails._11_03" id="_11_03"></td value="" >
						<td><input type="text" class="form-control" name="_11_04" v-model="bloodTransfusionDetails._11_04" id="_11_04"></td value="" >
						<td><input type="time" class="form-control" name="_11_05" v-model="bloodTransfusionDetails._11_05" id="_11_05"></td value="" >
						<td><input type="text" class="form-control" name="_11_06" v-model="bloodTransfusionDetails._11_06" id="_11_06"></td value="" >
						<td><input type="text" class="form-control" name="_11_07" v-model="bloodTransfusionDetails._11_07" id="_11_07"></td value="" >
						<td><input type="text" class="form-control" name="_11_08" v-model="bloodTransfusionDetails._11_08" id="_11_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_12_01" v-model="bloodTransfusionDetails._12_01" id="_12_01"></td value="" >
						<td><input type="text" class="form-control" name="_12_02" v-model="bloodTransfusionDetails._12_02" id="_12_02"></td value="" >
						<td><input type="text" class="form-control" name="_12_03" v-model="bloodTransfusionDetails._12_03" id="_12_03"></td value="" >
						<td><input type="text" class="form-control" name="_12_04" v-model="bloodTransfusionDetails._12_04" id="_12_04"></td value="" >
						<td><input type="time" class="form-control" name="_12_05" v-model="bloodTransfusionDetails._12_05" id="_12_05"></td value="" >
						<td><input type="text" class="form-control" name="_12_06" v-model="bloodTransfusionDetails._12_06" id="_12_06"></td value="" >
						<td><input type="text" class="form-control" name="_12_07" v-model="bloodTransfusionDetails._12_07" id="_12_07"></td value="" >
						<td><input type="text" class="form-control" name="_12_08" v-model="bloodTransfusionDetails._12_08" id="_12_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_13_01" v-model="bloodTransfusionDetails._13_01" id="_13_01"></td value="" >
						<td><input type="text" class="form-control" name="_13_02" v-model="bloodTransfusionDetails._13_02" id="_13_02"></td value="" >
						<td><input type="text" class="form-control" name="_13_03" v-model="bloodTransfusionDetails._13_03" id="_13_03"></td value="" >
						<td><input type="text" class="form-control" name="_13_04" v-model="bloodTransfusionDetails._13_04" id="_13_04"></td value="" >
						<td><input type="time" class="form-control" name="_13_05" v-model="bloodTransfusionDetails._13_05" id="_13_05"></td value="" >
						<td><input type="text" class="form-control" name="_13_06" v-model="bloodTransfusionDetails._13_06" id="_13_06"></td value="" >
						<td><input type="text" class="form-control" name="_13_07" v-model="bloodTransfusionDetails._13_07" id="_13_07"></td value="" >
						<td><input type="text" class="form-control" name="_13_08" v-model="bloodTransfusionDetails._13_08" id="_13_08"></td value="" >
					</tr>
					<tr>
						<td>After Transfusion</td>
						<td><input type="time" class="form-control" name="_14_01" v-model="bloodTransfusionDetails._14_01" id="_14_01"></td value="" >
						<td><input type="text" class="form-control" name="_14_02" v-model="bloodTransfusionDetails._14_02" id="_14_02"></td value="" >
						<td><input type="text" class="form-control" name="_14_03" v-model="bloodTransfusionDetails._14_03" id="_14_03"></td value="" >
						<td><input type="text" class="form-control" name="_14_04" v-model="bloodTransfusionDetails._14_04" id="_14_04"></td value="" >
						<td><input type="time" class="form-control" name="_14_05" v-model="bloodTransfusionDetails._14_05" id="_14_05"></td value="" >
						<td><input type="text" class="form-control" name="_14_06" v-model="bloodTransfusionDetails._14_06" id="_14_06"></td value="" >
						<td><input type="text" class="form-control" name="_14_07" v-model="bloodTransfusionDetails._14_07" id="_14_07"></td value="" >
						<td><input type="text" class="form-control" name="_14_08" v-model="bloodTransfusionDetails._14_08" id="_14_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_15_01" v-model="bloodTransfusionDetails._15_01" id="_15_01"></td value="" >
						<td><input type="text" class="form-control" name="_15_02" v-model="bloodTransfusionDetails._15_02" id="_15_02"></td value="" >
						<td><input type="text" class="form-control" name="_15_03" v-model="bloodTransfusionDetails._15_03" id="_15_03"></td value="" >
						<td><input type="text" class="form-control" name="_15_04" v-model="bloodTransfusionDetails._15_04" id="_15_04"></td value="" >
						<td><input type="time" class="form-control" name="_15_05" v-model="bloodTransfusionDetails._15_05" id="_15_05"></td value="" >
						<td><input type="text" class="form-control" name="_15_06" v-model="bloodTransfusionDetails._15_06" id="_15_06"></td value="" >
						<td><input type="text" class="form-control" name="_15_07" v-model="bloodTransfusionDetails._15_07" id="_15_07"></td value="" >
						<td><input type="text" class="form-control" name="_15_08" v-model="bloodTransfusionDetails._15_08" id="_15_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_16_01" v-model="bloodTransfusionDetails._16_01" id="_16_01"></td value="" >
						<td><input type="text" class="form-control" name="_16_02" v-model="bloodTransfusionDetails._16_02" id="_16_02"></td value="" >
						<td><input type="text" class="form-control" name="_16_03" v-model="bloodTransfusionDetails._16_03" id="_16_03"></td value="" >
						<td><input type="text" class="form-control" name="_16_04" v-model="bloodTransfusionDetails._16_04" id="_16_04"></td value="" >
						<td><input type="time" class="form-control" name="_16_05" v-model="bloodTransfusionDetails._16_05" id="_16_05"></td value="" >
						<td><input type="text" class="form-control" name="_16_06" v-model="bloodTransfusionDetails._16_06" id="_16_06"></td value="" >
						<td><input type="text" class="form-control" name="_16_07" v-model="bloodTransfusionDetails._16_07" id="_16_07"></td value="" >
						<td><input type="text" class="form-control" name="_16_08" v-model="bloodTransfusionDetails._16_08" id="_16_08"></td value="" >
					</tr>
					<tr>
						<td></td>
						<td><input type="time" class="form-control" name="_17_01" v-model="bloodTransfusionDetails._17_01" id="_17_01"></td value="" >
						<td><input type="text" class="form-control" name="_17_02" v-model="bloodTransfusionDetails._17_02" id="_17_02"></td value="" >
						<td><input type="text" class="form-control" name="_17_03" v-model="bloodTransfusionDetails._17_03" id="_17_03"></td value="" >
						<td><input type="text" class="form-control" name="_17_04" v-model="bloodTransfusionDetails._17_04" id="_17_04"></td value="" >
						<td><input type="time" class="form-control" name="_17_05" v-model="bloodTransfusionDetails._17_05" id="_17_05"></td value="" >
						<td><input type="text" class="form-control" name="_17_06" v-model="bloodTransfusionDetails._17_06" id="_17_06"></td value="" >
						<td><input type="text" class="form-control" name="_17_07" v-model="bloodTransfusionDetails._17_07" id="_17_07"></td value="" >
						<td><input type="text" class="form-control" name="_17_08" v-model="bloodTransfusionDetails._17_08" id="_17_08"></td value="" >
					</tr>
				</tbody>
			</table>

			<div class="row form-group">
				<div class="col-md-6">
					<div class="col-md-6">
						<label>Minor Reaction : </label>
					</div>
					<div class="col-md-6">
						<select class="form-group" name="minor_reaction" v-model="bloodTransfusionDetails.minor_reaction">
							<option value="skin_rash">Skin Rash</option>
							<option value="urticaria">Urticaria</option>
							<option value="body_ache">Body Ache</option>
							<option value="nausea">Nausea</option>
							<option value="abdominal_pain">Abdominal Pain</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="col-md-6">
						<label>Moderate : </label>
					</div>
					<div class="col-md-6">
						<select class="form-group" name="moderate" v-model="bloodTransfusionDetails.moderate">
							<option value="fever">Fever</option>
							<option value="vomiting">Vomiting</option>
							<option value="shivering">Shivering</option>
							<option value="drowsieness">Drowsieness</option>
						</select>
					</div>
				</div>
			</div>

			<div class="row form-group">
				<div class="col-md-6">
					<div class="col-md-6">
						<label>Major Reaction : </label>
					</div>
					<div class="col-md-6">
						<select class="form-group" name="major_reactions" v-model="bloodTransfusionDetails.major_reactions">
							<option value="chest_pain">Chest Pain</option>
							<option value="breathlessness">Breathlessness</option>
							<option value="decreased_urine_output">Decreased Urine Output</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="col-md-6">
						<label>Time of onset of Adverse Reactions : </label>
					</div>
					<div class="col-md-6">
						<input class="form-control" type="time" name="time_adverse" v-model="bloodTransfusionDetails.time_adverse" value=""/>
					</div>
				</div>
			</div>

		</div>
		<div class="row form-group">
			<button class="btn btn-success" type="button" @click="saveBloodTransfusion()" >Submit</button>
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
                'bloodTransfusionDetails' : {
									'patient_name': '',
									'ipd_no': '',
									'age': '',
									'sex': '',
									'date': '',
									'time': '',
									'blood_group': '',
									'history_bt': '',
									'adv': '',
									'blood_bag_no': '',
									'blood_bag_group': '',
									'prod_name': '',
									'name_blood_bank': '',
									'expiry_date': '',
									'checked_by': '',
									'unit_nurse': '',
									'start_time': '',
									'end_time': '',
									'minor_reaction': '',
									'moderate': '',
									'major_reactions': '',
									'time_adverse': '',

                }
            }
        },
        methods: {
		    GetSelectComponent(componentName) {
		       this.$router.push({name: componentName})
		    },
		    saveBloodTransfusion() {
		    	this.$validator.validateAll().then(
	            (response) => {
	            	if (!this.errors.any()) {
	            		 $("body .js-loader").removeClass('d-none');
				    	User.saveBloodTransfusion(this.bloodTransfusionDetails).then(
		                (response) => {
		                	if(response.data.code == 200) {
		                		toastr.success('Blood Transfusion details have been saved', 'Blood Transfusion Form', {timeOut: 5000});
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
