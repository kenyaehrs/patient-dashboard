/**
 *  Copyright 2010 Society for Health Information Systems Programmes, India (HISP India)
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
 **/

package org.openmrs.module.patientdashboard.web.controller;

import java.util.Arrays;

public class OPDEntryCommand {
	
	private Integer[] selectedSymptomList;
	private Integer[] selectedDiagnosisList;
	private Integer[] selectedProcedureList;
	private Integer[] selectedExaminationList;
	//ghanshyam 1-june-2013 New Requirement #1633 User must be able to send investigation orders from dashboard to billing
	private Integer[] selectedInvestigationList;
	//signs
	private Integer[] selectedSignsList;
	//differential diagnosis
	private Integer[] selectedDifferentialList;
	//working diagnosis
	private Integer[] selectedWorkingList;
	//Underlined Condition
	private Integer[] selectedUnderLinedList;
	private Integer patientId;
	private String internalReferral;
	private String externalReferral;
	private String note;
	private String history;
	private Integer admit;
	private String outCome;
	private String dateFollowUp;
	private Integer admitWard;
	private String radio_f ;
	private Integer opdId;
	private Integer ipdWard;
	private Integer referralId;
	private Integer queueId;
	private Integer opdLogId;
	
	
	public Integer getIpdWard() {
		return ipdWard;
	}
	public void setIpdWard(Integer ipdWard) {
		this.ipdWard = ipdWard;
	}
	public String getInternalReferral() {
		return internalReferral;
	}
	public void setInternalReferral(String internalReferral) {
		this.internalReferral = internalReferral;
	}
	public String getExternalReferral() {
		return externalReferral;
	}
	public void setExternalReferral(String externalReferral) {
		this.externalReferral = externalReferral;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getHistory() {
		return history;
	}
	public void setHistory(String history) {
		this.history = history;
	}
	
	public String getOutCome() {
		return outCome;
	}
	public void setOutCome(String outCome) {
		this.outCome = outCome;
	}
	
	public String getDateFollowUp() {
		return dateFollowUp;
	}
	public void setDateFollowUp(String dateFollowUp) {
		this.dateFollowUp = dateFollowUp;
	}
	public Integer getAdmitWard() {
		return admitWard;
	}
	public void setAdmitWard(Integer admitWard) {
		this.admitWard = admitWard;
	}
	public Integer getPatientId() {
		return patientId;
	}
	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}
	
	public Integer[] getSelectedSymptomList() {
		return selectedSymptomList;
	}
	public void setSelectedSymptomList(Integer[] selectedSymptomList) {
		this.selectedSymptomList = selectedSymptomList;
	}
	public Integer[] getSelectedExaminationList() {
		return selectedExaminationList;
	}
	public void setSelectedExaminationList(Integer[] selectedExaminationList) {
		this.selectedExaminationList = selectedExaminationList;
	}
	public Integer[] getSelectedDiagnosisList() {
		return selectedDiagnosisList;
	}
	public void setSelectedDiagnosisList(Integer[] selectedDiagnosisList) {
		this.selectedDiagnosisList = selectedDiagnosisList;
	}
	public Integer[] getSelectedProcedureList() {
		return selectedProcedureList;
	}
	public void setSelectedProcedureList(Integer[] selectedProcedureList) {
		this.selectedProcedureList = selectedProcedureList;
	}
	
	//ghanshyam 1-june-2013 New Requirement #1633 User must be able to send investigation orders from dashboard to billing
	public Integer[] getSelectedInvestigationList() {
		return selectedInvestigationList;
	}
	public void setSelectedInvestigationList(Integer[] selectedInvestigationList) {
		this.selectedInvestigationList = selectedInvestigationList;
	}
	//signs
	public Integer[] getSelectedSignsList() {
		return selectedSignsList;
	}
	public void setSelectedSignsList(Integer[] selectedSignsList) {
		this.selectedSignsList = selectedSignsList;
	}
	//differential diagnosis
	public Integer[] getSelectedDifferentialList() {
		return selectedDifferentialList;
	}
	public void setSelectedDifferentialList(Integer[] selectedDifferentialList) {
		this.selectedDifferentialList = selectedDifferentialList;
	}

	//working diagnosis
	public Integer[] getSelectedWorkingList() {
		return selectedWorkingList;
	}
	public void setSelectedWorkingList(Integer[] selectedWorkingList) {
		this.selectedWorkingList = selectedWorkingList;
	}
	//UnderLined Condition
	
	public Integer[] getSelectedUnderLinedList() {
		return selectedUnderLinedList;
	}
	public void setSelectedUnderLinedList(Integer[] selectedUnderLinedList) {
		this.selectedUnderLinedList = selectedUnderLinedList;
	}
	
	public String getRadio_f() {
		return radio_f;
	}
	public void setRadio_f(String radio_f) {
		this.radio_f = radio_f;
	}
	
	public Integer getAdmit() {
		return admit;
	}
	public void setAdmit(Integer admit) {
		this.admit = admit;
	}
	@Override
	public String toString() {
		return "OPDEntryCommand [selectedDiagnosisList="
				+ Arrays.toString(selectedDiagnosisList)
				+ ", selectedProcedureList="
				+ Arrays.toString(selectedProcedureList)
				//ghanshyam 1-june-2013 New Requirement #1633 User must be able to send investigation orders from dashboard to billing
				+ ", selectedInvestigationList="
				+ Arrays.toString(selectedInvestigationList)   
				
				+ patientId + ", internalReferral=" + internalReferral
				+ ", externalReferral=" + externalReferral + ", note=" + note + ", history=" + history 
				+ ", admit=" + admit + ", outCome=" + outCome
				+ ", dateFollowUp=" + dateFollowUp + ", admitWard=" + admitWard
				+ ", radio_f=" + radio_f + "]";
	}
	public Integer getOpdId() {
		return opdId;
	}
	public void setOpdId(Integer opdId) {
		this.opdId = opdId;
	}
	public Integer getReferralId() {
		return referralId;
	}
	public void setReferralId(Integer referralId) {
		this.referralId = referralId;
	}
	public Integer getQueueId() {
		return queueId;
	}
	public void setQueueId(Integer queueId) {
		this.queueId = queueId;
	}
	public Integer getOpdLogId() {
		return opdLogId;
	}
	public void setOpdLogId(Integer opdLogId) {
		this.opdLogId = opdLogId;
	}




}
