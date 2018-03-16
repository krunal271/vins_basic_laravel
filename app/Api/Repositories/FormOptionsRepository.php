<?php

namespace euro_hms\Api\Repositories;

use euro_hms\Models\User;
use euro_hms\Models\FormsOptionsData;
use euro_hms\Models\Forms;

use DB;
use Hash;

class FormOptionsRepository {

    private function getFormId($data) {
        $form_result = Forms::where('name',$data['type'])->first();
        if($form_result) {
            return $form_result->id;
        } else {
            return '';
        }
    }
    public function storeLabSheetData($data)
    {
        $formId = $this->getFormId($data);
        // dd($formId);
        if($formId != '') {
            foreach ($data['form_data'] as $key => $value) {
                if($key == 'lab_investigation') {
                    $value = json_encode($value);
                }
                // echo "<pre>";print_r($key);echo "</pre>"; 
                $formsRec = FormsOptionsData::create([
                    'form_id' => $formId,
                    'patient_id' => $data['patient_id'],
                    'ipd_no' => $data['ipd_id'],
                    'form_key' => $key,
                    'form_value' => $value
                ]);
            }
        }
        return $formsRec;
    }
}
