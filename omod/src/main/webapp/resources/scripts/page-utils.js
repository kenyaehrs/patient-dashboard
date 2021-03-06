/**
 *  Copyright 2009 Society for Health Information Systems Programmes, India (HISP India)
 *
 *  This file is part of Patient-dashboard module.
 *
 *  Patient-dashboard module is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.

 *  Patient-dashboard module is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Patient-dashboard module.  If not, see <http://www.gnu.org/licenses/>.
 *
*/

DASHBOARD={
		load : function(url , container)
		{
			jQuery(container).load(url);
		},
		onChangeSymptom : function(id)
		{
			var text = jQuery("#"+id).val();
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxSymptom.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableSymptomList").html("");
						jQuery("#divAvailableSymptomList").html(data);
					}
				}
			}
		},
		onChangeExamination : function(id)
		{
			var text = jQuery("#"+id).val();
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxExamination.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableExaminationList").html("");
						jQuery("#divAvailableExaminationList").html(data);
					}
				}
			}
		},
		onChangeDianosis : function(id)
		{
			var text = jQuery("#"+id).val();
			
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxDianosis.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableDiagnosisList").html("");
						jQuery("#divAvailableDiagnosisList").html(data);
					}
				}
			}
		},
		onChangeProcedure : function(id)
		{
			var text = jQuery("#"+id).val();
			
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxProcedure.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableProcedureList").html("");
						jQuery("#divAvailableProcedureList").html(data);
					}
				}
			}
		},
		//Underlined Condition
		onChangeUnderlinedCondition : function(id)
		{
			var text = jQuery("#"+id).val();
			
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxUnderLinedCondition.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableUnderLinedConditionList").html("");
						jQuery("#divAvailableUnderLinedConditionList").html(data);
					}
				}
			}
		},
		//Signs
		onChangeSigns : function(id)
		{
			var text = jQuery("#"+id).val();
			
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxSigns.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableSignsList").html("");
						jQuery("#divAvailableSignsList").html(data);
					}
				}
			}
		},
		//Differential Diagnosis
		onChangeDifferentialDiagnosis : function(id)
		{
			var text = jQuery("#"+id).val();
			
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxDifferentialDiagnosis.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableDifferentialDiagnosisList").html("");
						jQuery("#divAvailableDifferentialDiagnosisList").html(data);
					}
				}
			}
		},
		//Working Diagnosis
		onChangeWorkingDiagnosis : function(id)
		{
			var text = jQuery("#"+id).val();
			
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxWorkingDiagnosis.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableWorkingDiagnosisList").html("");
						jQuery("#divAvailableWorkingDiagnosisList").html(data);
					}
				}
			}
		},
		//ghanshyam 1-june-2013 New Requirement #1633 User must be able to send investigation orders from dashboard to billing
		onChangeInvestigation : function(id)
		{
			var text = jQuery("#"+id).val();
			if(text != null && text != ''){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "comboboxInvestigation.htm"
								,data: ({text: text})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divAvailableInvestigationList").html("");
						jQuery("#divAvailableInvestigationList").html(data);
					}
				}
			}
		},
		
		submitOpdEntry : function(){
			    jQuery('#selectedSymptomList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
			    jQuery('#selectedExaminationList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				});
				jQuery('#selectedDiagnosisList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
				jQuery('#selectedProcedureList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
				//ghanshyam 1-june-2013 New Requirement #1633 User must be able to send investigation orders from dashboard to billing
				jQuery('#selectedInvestigationList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				});
				
				//Underlined Condition
				jQuery('#selectedUnderLinedList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
				//Signs
				jQuery('#selectedSignsList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
				//Differential Diagnosis
				jQuery('#selectedDifferentialList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
				//Working Diagnosis
				jQuery('#selectedWorkingList option').each(function(i) {  
					 jQuery(this).attr("selected", "selected");  
				}); 
				//jQuery("#opdEntryForm").submit();
		},
		detailClinical : function(id)
		{
			if(SESSION.checkSession()){
				url = "detailClinical.htm?id="+id+"&keepThis=false&TB_iframe=true&height=600&width=700";
				tb_show(" ",url,false);
			}
		},
		vitalStatistics : function(id)
		{
			if(SESSION.checkSession()){
				url = "vitalStatistic.htm?id="+id+"&keepThis=false&TB_iframe=true&height=400&width=500";
				tb_show(" ",url,false);
			}
		},
		symptomlDetails : function(id)
		{
			if(SESSION.checkSession()){
				url = "symptomDetails.htm?id="+id+"&keepThis=false&TB_iframe=true&height=300&width=500";
				tb_show(" ",url,false);
			}
		},
		examDetails : function(id)
		{
			if(SESSION.checkSession()){
				url = "examinationDetails.htm?id="+id+"&keepThis=false&TB_iframe=true&height=300&width=500";
				tb_show(" ",url,false);
			}
		},
		currentVitalStatistics : function(id)
		{
			if(SESSION.checkSession()){
				url = "currentVitalStatistic.htm?id="+id+"&keepThis=false&TB_iframe=true&height=400&width=500";
				tb_show(" ",url,false);
			}
		},
		detailIPDClinical : function(id)
		{
			if(SESSION.checkSession()){
				url = "detailIPDClinical.htm?id="+id+"&keepThis=false&TB_iframe=true&height=600&width=900";
				tb_show(" ",url,false);
			}
		},
		showAllDiagnosis : function()
		{
			if(SESSION.checkSession()){
				var patientId = jQuery("#patientId").val();
				var opdId = jQuery("#opdId").val();
				var queueId = jQuery("#queueId").val();
				var referralId = jQuery("#referralId").val();
				url = "showAllDiagnosis.htm?patientId="+patientId+"&opdId="+opdId+"&queueId="+queueId+"&referralId="+referralId+"&keepThis=false&TB_iframe=true&height=600&width=1000";
				tb_show("All diagnosis",url,false);
			}
		},
		//Underlined condition
		
		showAllUnderlinedCondition : function()
		{
			if(SESSION.checkSession()){
				var patientId = jQuery("#patientId").val();
				var opdId = jQuery("#opdId").val();
				var queueId = jQuery("#queueId").val();
				var referralId = jQuery("#referralId").val();
				url = "showAllUnderlinedCondition.htm?patientId="+patientId+"&opdId="+opdId+"&queueId="+queueId+"&referralId="+referralId+"&keepThis=false&TB_iframe=true&height=600&width=1000";
				tb_show("All Underlined condition",url,false);
			}
		},
		onChangeDiagnosis : function(container, id, name)
		{
			if(container == 'symptom'){
				var exists = false;
				jQuery('#selectedSymptomList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				if(exists){
					alert('The symptom has already been selected');
					return false;
				}
				exists = false;
				jQuery('#availableSymptomList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				jQuery("#symptom").val("");
				if(exists){
					jQuery("#availableSymptomList option[value=" +id+ "]").appendTo("#selectedSymptomList");
					jQuery("#availableSymptomList option[value=" +id+ "]").remove();
					getQuestion();
				}else{
					jQuery('#selectedSymptomList').append('<option value="' + id + '">' + name + '</option>');
					getQuestion();
					if(confirm("Do you want to add this symptom to the list of symptoms for this OPD?"))
					{
						jQuery.ajax({
							  type: 'POST',
							  url: 'addConceptToWard.htm',
							  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 4}
							});
					}
				}
			}
			if(container == 'examination'){
				var exists = false;
				jQuery('#selectedExaminationList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				if(exists){
					alert('The examination has already been selected');
					return false;
				}
				exists = false;
				jQuery('#availableExaminationList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				jQuery("#examination").val("");
				if(exists){
					jQuery("#availableExaminationList option[value=" +id+ "]").appendTo("#selectedExaminationList");
					jQuery("#availableExaminationList option[value=" +id+ "]").remove();
					getQuest();
				}else{
					jQuery('#selectedExaminationList').append('<option value="' + id + '">' + name + '</option>');
					getQuest();
					if(confirm("Do you want to add this examination to the list of examinations for this OPD?"))
					{
						jQuery.ajax({
							  type: 'POST',
							  url: 'addConceptToWard.htm',
							  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 5}
							});
					}
				}
			}
			if(container == 'diagnosis'){
				
				var exists = false;
				jQuery('#selectedDiagnosisList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				if(exists){
					alert('The diagnosis has already been selected');
					return false;
				}
				exists = false;
				jQuery('#availableDiagnosisList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				jQuery("#diagnosis").val("");
				if(exists){
					jQuery("#availableDiagnosisList option[value=" +id+ "]").appendTo("#selectedDiagnosisList");
					jQuery("#availableDiagnosisList option[value=" +id+ "]").remove();
				}else{
					jQuery('#selectedDiagnosisList').append('<option value="' + id + '">' + name + '</option>');
					if(confirm("Do you want to add this diagnosis to the list of diagnosis for this OPD?"))
					{
						jQuery.ajax({
							  type: 'POST',
							  url: 'addConceptToWard.htm',
							  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 1}
							});
					}
				}
			}
			if(container == 'procedure'){
				var exists = false;
				jQuery('#selectedProcedureList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				if(exists){
					alert('The procedure has already been selected');
					return false;
				}
				exists = false;
				jQuery('#availableProcedureList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				jQuery("#procedure").val("");
				if(exists){
					jQuery("#availableProcedureList option[value=" +id+ "]").appendTo("#selectedProcedureList");
					jQuery("#availableProcedureList option[value=" +id+ "]").remove();
					addSchedule();
				}else{
					jQuery('#selectedProcedureList').append('<option value="' + id + '">' + name + '</option>');
					addSchedule();
					if(confirm("Do you want to add this procedure to the list of procedures for this OPD?"))
					{
						jQuery.ajax({
							  type: 'POST',
							  url: 'addConceptToWard.htm',
							  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 2}
							});
					}
				}
			}
			
			//ghanshyam 1-june-2013 New Requirement #1633 User must be able to send investigation orders from dashboard to billing
		if(container == 'investigation'){
				var exists = false;
				jQuery('#selectedInvestigationList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				if(exists){
					alert('The test has already been selected');
					return false;
				}
				exists = false;
				jQuery('#availableInvestigationList option').each(function(){
				    if (this.value == id) {
				        exists = true;
				        return false;
				    }
				});
				jQuery("#investigation").val("");
				if(exists){
					jQuery("#availableInvestigationList option[value=" +id+ "]").appendTo("#selectedInvestigationList");
					jQuery("#availableInvestigationList option[value=" +id+ "]").remove();
				}else{
					jQuery('#selectedInvestigationList').append('<option value="' + id + '">' + name + '</option>');
					if(confirm("Do you want to add this investigation to the list of investigations for this OPD?"))
					{
						jQuery.ajax({
							  type: 'POST',
							  url: 'addConceptToWard.htm',
							  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 3}
							});
					}
				}
			}
		//Underlined Condition
		if(container == 'underlinedcondition'){
			var exists = false;
			
			jQuery('#selectedUnderLinedList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			        
			    }
			});
			if(exists){
				alert('The underlined condition  has already been selected');
				return false;
			}
			exists = false;
			jQuery('#availableUnderLinedConditionList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			    }
			});
			jQuery("#underlinedcondition").val("");
			if(exists){ 
				jQuery("#availableUnderLinedConditionList option[value=" +id+ "]").appendTo("#selectedUnderLinedList");
				jQuery("#availableUnderLinedConditionList option[value=" +id+ "]").remove();
			}else{ 
				jQuery('#selectedUnderLinedList').append('<option value="' + id + '">' + name + '</option>');
				if(confirm("Do you want to add this diagnosis to the list of underlined condition for this OPD?"))
				{
					jQuery.ajax({
						  type: 'POST',
						  url: 'addConceptToWard.htm',
						  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 6}
						});
				}
			}
		}
		//Signs
		if(container == 'signs'){
			var exists = false;
			
			jQuery('#selectedSignsList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			        
			    }
			});
			if(exists){
				alert('The sign  has already been selected');
				return false;
			}
			exists = false;
			jQuery('#availableSignsList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			    }
			});
			jQuery("#signs").val("");
			if(exists){
				jQuery("#availableSignsList option[value=" +id+ "]").appendTo("#selectedSignsList");
				jQuery("#availableSignsList option[value=" +id+ "]").remove();
			}else{  
				jQuery('#selectedSignsList').append('<option value="' + id + '">' + name + '</option>');
				if(confirm("Do you want to add this diagnosis to the list of signs for this OPD?"))
				{
					jQuery.ajax({
						  type: 'POST',
						  url: 'addConceptToWard.htm',
						  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 7}
						});
				}
			}
		}
		//Differential Diagnosis
		if(container == 'differentialdiagnosis'){
			var exists = false;
			
			jQuery('#selectedDifferentialList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			       
			    }
			});
			if(exists){
				alert('The differential diagnosis  has already been selected');
				return false;
			}
			exists = false;
			jQuery('#availableDifferentialDiagnosisList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			    }
			});
			jQuery("#differentialdiagnosis").val("");
			if(exists){ 
				jQuery("#availableDifferentialDiagnosisList option[value=" +id+ "]").appendTo("#selectedDifferentialList");
				jQuery("#availableDifferentialDiagnosisList option[value=" +id+ "]").remove();
			}else{ 
				jQuery('#selectedDifferentialList').append('<option value="' + id + '">' + name + '</option>');
				if(confirm("Do you want to add this diagnosis to the list of differential diagnosis for this OPD?"))
				{
					jQuery.ajax({
						  type: 'POST',
						  url: 'addConceptToWard.htm',
						  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 8}
						});
				}
			}
		}
		//Working Diagnosis
		if(container == 'workingdiagnosis'){
			var exists = false;
			
			jQuery('#selectedWorkingList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			       
			    }
			});
			if(exists){
				alert('The working diagnosis  has already been selected');
				return false;
			}
			exists = false;
			jQuery('#availableWorkingDiagnosisList option').each(function(){
			    if (this.value == id) {
			        exists = true;
			        return false;
			    }
			});
			jQuery("#workingdiagnosis").val("");
			if(exists){ 
				jQuery("#availableWorkingDiagnosisList option[value=" +id+ "]").appendTo("#selectedWorkingList");
				jQuery("#availableWorkingDiagnosisList option[value=" +id+ "]").remove();
			}else{ 
				jQuery('#selectedWorkingList').append('<option value="' + id + '">' + name + '</option>');
				if(confirm("Do you want to add this diagnosis to the list of working diagnosis for this OPD?"))
				{
					jQuery.ajax({
						  type: 'POST',
						  url: 'addConceptToWard.htm',
						  data: {opdId: jQuery("#"+container).attr("title"), conceptId: id, typeConcept: 9}
						});
				}
			}
		}
		},
		
		onChangeRadio : function(thiz)
		{
			var text = jQuery(thiz).val();
			if(text != null && text !='' && text == 'Admit'){
				jQuery(".tdIpdWard").show();
			}else{
				jQuery(".tdIpdWard").hide();
			}
		},
		backToQueue : function(queueId)
		{
			ACT.go('backToOpdQueue.htm?queueId='+queueId);
		},
		backToOpdQueue : function(opdLogId)
		{
			ACT.go('backToOpdQueue.htm?opdLogId='+opdLogId);
		},
		onClickFollowDate : function(thiz)
		{
			jQuery('input#input_follow').attr('checked', true);
		},
		detailProcedure : function(id)
        {
        if(SESSION.checkSession()){
        url = "detailProcedure.htm?id="+id+"&keepThis=false&TB_iframe=true&height=300&width=500";
        tb_show(" ",url,false);
               }
        }
		
};

ADMITTED = {
		discharge: function(id)
		{
			if(SESSION.checkSession())
			{
				
				var url = "discharge.htm?id="+id+"&keepThis=false&TB_iframe=true&height=500&width=1000";
				tb_show("Discharge",url,false);
			}
		},
		changeFinalResult : function(id)
		{
			var url = "changeFinalResult.htm?id="+id+"&keepThis=false&TB_iframe=true&height=500&width=1000";
			tb_show("Final Result",url,false);
		},
		submitIpdFinalResult : function(){
		    jQuery('#selectedSymptomList option').each(function(i) {  
				 jQuery(this).attr("selected", "selected");  
			}); 
		    jQuery('#selectedExamiantionList option').each(function(i) {  
				 jQuery(this).attr("selected", "selected");  
			}); 
			jQuery('#selectedDiagnosisList option').each(function(i) {  
				 jQuery(this).attr("selected", "selected");  
			}); 
			jQuery('#selectedProcedureList option').each(function(i) {  
				 jQuery(this).attr("selected", "selected");  
			}); 
			
			//Underlined Condition
			jQuery('#selectedUnderLinedList option').each(function(i) {  
				 jQuery(this).attr("selected", "selected");  
			});
			jQuery("#finalResultForm").submit();
		}
};
DIAGNOSIS = {
		 chooseOption : function(thiz)
		 {
			 var x = jQuery(thiz).val();
			 var name = jQuery(thiz).attr("title");
			 if(x != null){
				
				if(jQuery(thiz).attr('checked')){
					if(self.parent.jQuery("#selectedDiagnosisList option[value="+x+"]").length <= 0){
						//obj.appendTo(self.parent.jQuery("#selectedDiagnosisList"));
						self.parent.jQuery("#selectedDiagnosisList").append("<option value="+x+">"+name+"</option>")
					}
					//obj.attr("selected", "selected");  
				 }else{
					//obj.attr("selected", "");  
					if(self.parent.jQuery("#selectedDiagnosisList option[value="+x+"]").length > 0){
						self.parent.jQuery("#selectedDiagnosisList").remove(self.parent.jQuery("#selectedDiagnosisList option[value="+x+"]"));
					}
				 }
			 }
		 },
		 close : function()
		 {
			 self.parent.tb_remove();
		 }
		 
};

//ghanshyam 12-june-2013 New Requirement #1635 User should be able to send pharmacy orders to issue drugs to a patient from dashboard
ISSUE={
		onBlur : function(thiz)
		{
			var x = jQuery(thiz).val();
			if(x != null && x != '' ){
				if(SESSION.checkSession()){
					var data = jQuery.ajax(
							{
								type:"GET"
								,url: "formulationByDrugNameForIssue.form"
								,data: ({drugName :x})	
								,async: false
								, cache : false
							}).responseText;
					if(data != undefined  && data != null && data != ''){
						jQuery("#divFormulation").html(data);
					}else{
						alert('Please refresh page!');
					}
				}
			}
		}
		
	
};


