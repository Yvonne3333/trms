import React from 'react'
import { NXPDETAILS } from '../models'

interface Props {
    formDetails: NXPDETAILS | undefined
}


const Bank:React.FC<Props> = ({formDetails}) => {
  return (
    <div className="w-full overflow-y-auto max-h-[80vh] border p-2 rounded-lg border-gray-300">
    <div>
      <h1 className="font-semibold mb-3 text-[15px]">DesignatedBank</h1>
      <div className="grid grid-cols-3 gap-x-3 gap-y-6 text-[12px]">
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">accountCategory:</span>{" "}
          {formDetails?.designatedBank?.accountCategory ? formDetails?.designatedBank?.accountCategory: "null"}
        </div>
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">address:</span>{" "}
          {formDetails?.designatedBank?.address ? formDetails?.designatedBank?.address: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">archivedAt:</span>{" "}
          {formDetails?.designatedBank?.archivedAt ? formDetails?.designatedBank?.archivedAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">bvn:</span>{" "}
          {formDetails?.designatedBank?.bvn ? formDetails?.designatedBank?.bvn: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">code:</span>{" "}
          {formDetails?.designatedBank?.code ? formDetails?.designatedBank?.code: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">contactOrganization:</span>{" "}
          {formDetails?.designatedBank?.contactOrganization ? formDetails?.designatedBank?.contactOrganization: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">createdAt:</span>{" "}
          {formDetails?.designatedBank?.createdAt ? formDetails?.designatedBank?.createdAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">createdBy:</span>{" "}
          {formDetails?.designatedBank?.createdBy ? formDetails?.designatedBank?.createdBy: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">deleted:</span>{" "}
          {formDetails?.designatedBank?.deleted ? formDetails?.designatedBank?.deleted: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">description:</span>{" "}
          {formDetails?.designatedBank?.description ? formDetails?.designatedBank?.description: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">designatedBank:</span>{" "}
          {formDetails?.designatedBank?.designatedBank ? formDetails?.designatedBank?.designatedBank: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">emailAddress:</span>{" "}
          {formDetails?.designatedBank?.emailAddress ? formDetails?.designatedBank?.emailAddress: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">emailAddress2:</span>{" "}
          {formDetails?.designatedBank?.emailAddress2 ? formDetails?.designatedBank?.emailAddress2: "null"}
        </div>        
        
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">enabled:</span>{" "}
          {formDetails?.designatedBank?.enabled ? formDetails?.designatedBank?.enabled: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">firstName:</span>{" "}
          {formDetails?.designatedBank?.firstName ? formDetails?.designatedBank?.firstName: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">id:</span>{" "}
          {formDetails?.designatedBank?.id ? formDetails?.designatedBank?.id: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">jobRole:</span>{" "}
          {formDetails?.designatedBank?.jobRole ? formDetails?.designatedBank?.jobRole: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">lastName:</span>{" "}
          {formDetails?.designatedBank?.lastName ? formDetails?.designatedBank?.lastName: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">lga:</span>{" "}
          {formDetails?.designatedBank?.lga ? formDetails?.designatedBank?.lga: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">licenseExpiryDate:</span>{" "}
          {formDetails?.designatedBank?.licenseExpiryDate ? formDetails?.designatedBank?.licenseExpiryDate: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">licenseNumber:</span>{" "}
          {formDetails?.designatedBank?.licenseNumber ? formDetails?.designatedBank?.licenseNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">licenseStatus:</span>{" "}
          {formDetails?.designatedBank?.licenseStatus ? formDetails?.designatedBank?.licenseStatus: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">middleName:</span>{" "}
          {formDetails?.designatedBank?.middleName ? formDetails?.designatedBank?.middleName: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">name:</span>{" "}
          {formDetails?.designatedBank?.name ? formDetails?.designatedBank?.name: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">nepcRegistrationNumber:</span>{" "}
          {formDetails?.designatedBank?.nepcRegistrationNumber ? formDetails?.designatedBank?.nepcRegistrationNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">organizationType:</span>{" "}
          {formDetails?.designatedBank?.organizationType ? formDetails?.designatedBank?.organizationType: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">passportNumber:</span>{" "}
          {formDetails?.designatedBank?.passportNumber ? formDetails?.designatedBank?.passportNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">phone:</span>{" "}
          {formDetails?.designatedBank?.phone ? formDetails?.designatedBank?.phone: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">rcNumber:</span>{" "}
          {formDetails?.designatedBank?.rcNumber ? formDetails?.designatedBank?.rcNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">sector:</span>{" "}
          {formDetails?.designatedBank?.sector ? formDetails?.designatedBank?.sector: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">taxIdentificationNumber:</span>{" "}
          {formDetails?.designatedBank?.taxIdentificationNumber ? formDetails?.designatedBank?.taxIdentificationNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">type:</span>{" "}
          {formDetails?.designatedBank?.type ? formDetails?.designatedBank?.type: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">underEmbargo:</span>{" "}
          {formDetails?.designatedBank?.underEmbargo ? formDetails?.designatedBank?.underEmbargo: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">updatedAt:</span>{" "}
          {formDetails?.designatedBank?.updatedAt ? formDetails?.designatedBank?.updatedAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">user:</span>{" "}
          {formDetails?.designatedBank?.user ? formDetails?.designatedBank?.user: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">designatedBankPreAmend:</span>{" "}
          {formDetails?.designatedBankPreAmend ? formDetails?.designatedBankPreAmend: "null"}
        </div>
       </div>
       <h1 className="font-semibold mt-10 mb-3 border text-[15px]">ProcessingBank</h1>
       <div className="grid grid-cols-3 gap-x-3 gap-y-6 text-[12px]">
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">accountCategory:</span>{" "}
          {formDetails?.processingBank?.accountCategory ? formDetails?.processingBank?.accountCategory: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">address:</span>{" "}
          {formDetails?.processingBank?.address ? formDetails?.processingBank?.address: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">archivedAt:</span>{" "}
          {formDetails?.processingBank?.archivedAt ? formDetails?.processingBank?.archivedAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">bvn:</span>{" "}
          {formDetails?.processingBank?.bvn ? formDetails?.processingBank?.bvn: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">code:</span>{" "}
          {formDetails?.processingBank?.code ? formDetails?.processingBank?.code: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">contactOrganization:</span>{" "}
          {formDetails?.processingBank?.contactOrganization ? formDetails?.processingBank?.contactOrganization: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">createdAt:</span>{" "}
          {formDetails?.processingBank?.createdAt ? formDetails?.processingBank?.createdAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">createdBy:</span>{" "}
          {formDetails?.processingBank?.createdBy ? formDetails?.processingBank?.createdBy: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">deleted:</span>{" "}
          {formDetails?.processingBank?.deleted ? formDetails?.processingBank?.deleted: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">description:</span>{" "}
          {formDetails?.processingBank?.description ? formDetails?.processingBank?.description: "null"}
        </div>
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">designatedBank:</span>{" "}
          {formDetails?.processingBank?.designatedBank ? formDetails?.processingBank?.designatedBank: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">emailAddress:</span>{" "}
          {formDetails?.processingBank?.emailAddress ? formDetails?.processingBank?.emailAddress: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">emailAddress2:</span>{" "}
          {formDetails?.processingBank?.emailAddress2 ? formDetails?.processingBank?.emailAddress2: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">enabled:</span>{" "}
          {formDetails?.processingBank?.enabled ? formDetails?.processingBank?.enabled: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">firstName:</span>{" "}
          {formDetails?.processingBank?.firstName ? formDetails?.processingBank?.firstName: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">id:</span>{" "}
          {formDetails?.processingBank?.id ? formDetails?.processingBank?.id: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">jobRole:</span>{" "}
          {formDetails?.processingBank?.jobRole ? formDetails?.processingBank?.jobRole: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">lastName:</span>{" "}
          {formDetails?.processingBank?.lastName ? formDetails?.processingBank?.lastName: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">lga:</span>{" "}
          {formDetails?.processingBank?.lga ? formDetails?.processingBank?.lga: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">licenseExpiryDate:</span>{" "}
          {formDetails?.processingBank?.licenseExpiryDate ? formDetails?.processingBank?.licenseExpiryDate: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">licenseNumber:</span>{" "}
          {formDetails?.processingBank?.licenseNumber ? formDetails?.processingBank?.licenseNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">licenseStatus:</span>{" "}
          {formDetails?.processingBank?.licenseStatus ? formDetails?.processingBank?.licenseStatus: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">middleName:</span>{" "}
          {formDetails?.processingBank?.middleName ? formDetails?.processingBank?.middleName: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">name:</span>{" "}
          {formDetails?.processingBank?.name ? formDetails?.processingBank?.name: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">nepcRegistrationNumber:</span>{" "}
          {formDetails?.processingBank?.nepcRegistrationNumber ? formDetails?.processingBank?.nepcRegistrationNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">organizationType:</span>{" "}
          {formDetails?.processingBank?.organizationType ? formDetails?.processingBank?.organizationType: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">passportNumber:</span>{" "}
          {formDetails?.processingBank?.passportNumber ? formDetails?.processingBank?.passportNumber: "null"}
        </div>

                <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">phone:</span>{" "}
          {formDetails?.processingBank?.phone ? formDetails?.processingBank?.phone: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">rcNumber:</span>{" "}
          {formDetails?.processingBank?.rcNumber? formDetails?.processingBank?.rcNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">sector:</span>{" "}
          {formDetails?.processingBank?.sector ? formDetails?.processingBank?.sector: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">taxIdentificationNumber:</span>{" "}
          {formDetails?.processingBank?.taxIdentificationNumber ? formDetails?.processingBank?.taxIdentificationNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">type:</span>{" "}
          {formDetails?.processingBank?.type ? formDetails?.processingBank?.type: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">underEmbargo:</span>{" "}
          {formDetails?.processingBank?.underEmbargo ? formDetails?.processingBank?.underEmbargo: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">updatedAt:</span>{" "}
          {formDetails?.processingBank?.updatedAt ? formDetails?.processingBank?.updatedAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">user:</span>{" "}
          {formDetails?.processingBank?.user ? formDetails?.processingBank?.user: "null"}
        </div>
    
        </div>
        <h1 className="font-semibold mt-10 mb-3 border text-[15px]">ProcessingBankBranch</h1>
       <div className="grid grid-cols-3 gap-x-3 gap-y-6 text-[12px]">
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">archivedAt:</span>{" "}
          {formDetails?.processingBankBranch?.archivedAt ? formDetails?.processingBankBranch?.archivedAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">bankCode:</span>{" "}
          {formDetails?.processingBankBranch?.bankCode ? formDetails?.processingBankBranch?.bankCode: "null"}
        </div>
        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">code:</span>{" "}
          {formDetails?.processingBankBranch?.code ? formDetails?.processingBankBranch?.code: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">createdAt:</span>{" "}
          {formDetails?.processingBankBranch?.createdAt ? formDetails?.processingBankBranch?.createdAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">emailAddress:</span>{" "}
          {formDetails?.processingBankBranch?.emailAddress ? formDetails?.processingBankBranch?.emailAddress: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">id:</span>{" "}
          {formDetails?.processingBankBranch?.id ? formDetails?.processingBankBranch?.id: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">name:</span>{" "}
          {formDetails?.processingBankBranch?.name ? formDetails?.processingBankBranch?.name: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">phone:</span>{" "}
          {formDetails?.processingBankBranch?.phone ? formDetails?.processingBankBranch?.phone: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">updatedAt:</span>{" "}
          {formDetails?.processingBankBranch?.updatedAt ? formDetails?.processingBankBranch?.updatedAt: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">processingBankBranchPreAmend:</span>{" "}
          {formDetails?.processingBankBranchPreAmend? formDetails?.processingBankBranchPreAmend: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">processingBankPreAmend:</span>{" "}
          {formDetails?.processingBankPreAmend? formDetails?.processingBankPreAmend: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">processingFeeAccountNumber:</span>{" "}
          {formDetails?.processingFeeAccountNumber? formDetails?.processingFeeAccountNumber: "null"}
        </div>

        <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
          <span className="font-semibold">processingFeeAccountNumberPreAmend:</span>{" "}
          {formDetails?.processingFeeAccountNumberPreAmend? formDetails?.processingFeeAccountNumberPreAmend: "null"}
        </div>

        </div>
    </div>
    </div>
  )
}

export default Bank