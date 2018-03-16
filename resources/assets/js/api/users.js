import api from './siteconfig'

export default {
  getUserDetails(userData) {
  	return api.post('user/getDetails',{'userData':userData})
  },
  getEditUser(id) {
  	return api.get('user/edit/'+id)
  },
  doctorInitialAssessment(sendData) {
    return api.get('DoctorsInitialAssessment')
  },
  savePatient(patientData) {
    return api.post('patient/create',{'patientData': patientData})
  },
  saveAdverseDrugReaction(adverseDrugReaction) {
    return api.post('adverseDrugReaction/create',{'adverseDrugReaction': adverseDrugReaction})
  },
  saveAppointmentBook(appointmentBook) {
    return api.post('appointmentBook/create',{'appointmentBook': appointmentBook})
  },
  saveBloodSugarMonitoringChart(bloodSugarMonitoringChart) {
    return api.post('bloodSugarMonitoringChart/create',{'bloodSugarMonitoringChart': bloodSugarMonitoringChart})
  },
  saveBloodTransfusion(bloodTransfusionDetails) {
    return api.post('bloodTransfusionDetails/create',{'bloodTransfusionDetails': bloodTransfusionDetails})
  },
  saveBreifOperativeNote(breifOperativeNoteData) {
    return api.post('briefOperativeNote/create',{'breifOperativeNoteData': breifOperativeNoteData})
  },
  testFunction(testData) {
    return api.post('testFile/create',{'testData': testData})
  },
  saveCodeBlueEvaluationForm(codeBlueEvaluationData) {
    return api.post('codeBlueEvaluationForm/create',{'codeBlueEvaluationData': codeBlueEvaluationData})
  },
  saveCompleteNursingAssessment(completeNursingAssessmentData) {
    return api.post('completeNursingAssessment/create',{'completeNursingAssessmentData': completeNursingAssessmentData})
  },
  saveCounsellingForm(counsellingFormData) {
    return api.post('counsellingForm/create',{'counsellingFormData': counsellingFormData})
  },
  saveCprFormat(cprFormatData) {
    return api.post('cprFormat/create',{'cprFormatData': cprFormatData})
  },
  saveCultureBiopsy(cultureBiopsyData) {
    return api.post('cultureBiopsyForm/create',{'cultureBiopsyData': cultureBiopsyData})
  },
  saveDailyDietForm(dailyDietData) {
    return api.post('dailyDietForm/create',{'dailyDietData': dailyDietData})
  },
  saveDischargeGatepass(dischargeGatepassData) {
    return api.post('dischargeGatepass/create',{'dischargeGatepassData': dischargeGatepassData})
  },
  saveDischargeSummary(dischargeSummaryData) {
    return api.post('dischargeSummary/create',{'dischargeSummaryData': dischargeSummaryData})
  },
  saveDoctorsDailyNotes(doctorsDailyNotesData) {
    return api.post('doctorsDailyNotes/create',{'doctorsDailyNotesData': doctorsDailyNotesData})
  },
  saveSurgicalSafetyChecklist(surgicalSafetyChecklistData) {
    return api.post('surgicalSafetyChecklist/create',{'surgicalSafetyChecklistData': surgicalSafetyChecklistData})
  },
  saveLabSheet(LabSheet) {
    return api.post('LabSheet/create',{'LabSheet':LabSheet})
  },

  saveNurseProgressNotes(NurseProgressNotes) {
    return api.post('NurseProgressNotes/create',{'NurseProgressNotes':NurseProgressNotes})
  },

  saveNursingDutyOver(NursingDutyOver) {
    return api.post('NursingDutyOver/create',{'NursingDutyOver':NursingDutyOver})
  },

  saveNutritionalAssessmentForm(NutritionalAssessmentForm) {
    return api.post('NutritionalAssessmentForm/create',{'NutritionalAssessmentForm':NutritionalAssessmentForm})
  },

  saveNutritionalScreeningForm(NutritionalScreeningForm) {
    return api.post('NutritionalScreeningForm/create',{'NutritionalScreeningForm':NutritionalScreeningForm})
  },

  saveOperativeDetailSheet(OperativeDetailSheet) {
    return api.post('OperativeDetailSheet/create',{'OperativeDetailSheet':OperativeDetailSheet})
  },

  savePatientAdmissionSheet(PatientAdmissionSheet) {
    return api.post('PatientAdmissionSheet/create',{'PatientAdmissionSheet':PatientAdmissionSheet})
  },

  savePatientDietRecord(PatientDietRecord) {
    return api.post('PatientDietRecord/create',{'PatientDietRecord':PatientDietRecord})
  },

  savePatientValuableForm(PatientValuableForm) {
    return api.post('PatientValuableForm/create',{'PatientValuableForm':PatientValuableForm})
  },

  savePhysiotherapyAssessment(PhysiotherapyAssessment) {
    return api.post('PhysiotherapyAssessment/create',{'PhysiotherapyAssessment':PhysiotherapyAssessment})
  },

  saveRestraintAdministration(RestraintAdministration) {
    return api.post('RestraintAdministration/create',{'RestraintAdministration':RestraintAdministration})
  },
  savePlanOfCare(planOfCareData) {
    return api.post('planOfCare/create',{'planOfCareData': planOfCareData})
  },
  savePreAnaesthesiaCheckupForm(preAnaesthesiaCheckupFormData) {
    return api.post('preAnaesthesiaCheckupForm/create',{'preAnaesthesiaCheckupFormData': preAnaesthesiaCheckupFormData})
  },
  savePostAnaesthesiaEvaluation(postAnaesthesiaEvaluationData) {
    return api.post('postAnaesthesiaEvaluation/create',{'postAnaesthesiaEvaluationData': postAnaesthesiaEvaluationData})
  },
  savePreAngiographyAngioplastyChecklist(preAngiographyAngioplastyChecklistData) {
    return api.post('preAngiographyAngioplastyChecklist/create',{'preAngiographyAngioplastyChecklistData': preAngiographyAngioplastyChecklistData})
  },
  savePreOTChecklist(preOTChecklistData) {
    return api.post('savePreOTChecklist/create',{'preOTChecklistData': preOTChecklistData})
  },
  saveProvisionalDischargeSummary(provisionalDischargeSummaryData) {
    return api.post('provisionalDischargeSummary/create',{'provisionalDischargeSummaryData': provisionalDischargeSummaryData})
  },
  saveRadiologyRequisition(radiologyRequisitionData) {
    return api.post('radiologyRequisition/create',{'radiologyRequisitionData': radiologyRequisitionData})
  },
  saveTransferChecklistForNurses(transferChecklistForNursesData) {
    return api.post('transferChecklistForNurses/create',{'transferChecklistForNursesData': transferChecklistForNursesData})
  },
  saveTransfusionReactionForm(transfusionReactionFormData) {
    return api.post('transfusionReactionForm/create',{'transfusionReactionFormData': transfusionReactionFormData})
  },
  saveVentilatorChargeSheet(ventilatorChargeSheetData) {
    return api.post('ventilatorChargeSheet/create',{'ventilatorChargeSheetData': ventilatorChargeSheetData})
  },
  saveWardProcedureRecord(wardProcedureRecordData) {
    return api.post('wardProcedureRecord/create',{'wardProcedureRecordData': wardProcedureRecordData})
  },
  saveDoctorsHandover(doctorsHandoverData) {
    return api.post('doctorsHandover/create',{'doctorsHandoverData': doctorsHandoverData})
  },
  saveDrugRequisition(drugRequisitionData) {
    return api.post('drugRequisition/create',{'drugRequisitionData': drugRequisitionData})
  },
  saveerObservation(erObservationData) {
    return api.post('erObservation/create',{'erObservationData': erObservationData})
  },
  savegatePass(gatePassData) {
    return api.post('gatePass/create',{'gatePassData': gatePassData})
  },
  saveglassGow(glassGow) {
    return api.post('glassGow/create',{'glassGow': glassGowData})
  },
  saveglassGow(historyForm) {
    return api.post('historyForm/create',{'historyForm': historyFormData})
  },

  saveInformationForm(informationForm) {
    return api.post('informationForm/create',{'informationForm': informationFormData})
  },
  saveinfusionTherapyChart(infusionTherapyChart) {
    return api.post('infusionTherapyChart/create',{'infusionTherapyChart': infusionTherapyChartData})
  },
  saveinvestigationSheet(investigationSheet) {
    return api.post('investigationSheet/create',{'investigationSheet': investigationSheetData})
  },
  saveMARFlowSheet(MARFlowSheet) {
    return api.post('MARFlowSheet/create',{'MARFlowSheet': MARFlowSheet})
  },
  saveMARFlowSheet(MARFlowSheet) {
    return api.post('MARFlowSheet/create',{'MARFlowSheet': MARFlowSheet})
  },
    getpatientDetail(ipdId) {
    return api.post('patient/getDetails/'+ipdId)
  },


}
