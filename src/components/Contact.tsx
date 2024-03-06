import React from 'react'
import { NXPDETAILS } from '../models'

interface Props {
    formDetails: NXPDETAILS | undefined
}


const Contact:React.FC<Props> = ({formDetails}) => {
    return (
        <div className="w-full overflow-y-auto max-h-[80vh] border p-2 rounded-lg border-gray-300">
          <div>
            <h1 className="font-semibold mb-3 text-[15px]">Contact</h1>
            <div className="grid grid-cols-3 gap-x-3 gap-y-6 text-[12px]">
              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">accountCategory:</span>{" "}
                {formDetails?.contact?.accountCategory ? formDetails?.contact?.accountCategory: "null"}
              </div>
              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">address:</span>{" "}
                {formDetails?.contact?.address ? formDetails?.contact?.address : "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">archivedAt:</span>{" "}
                {formDetails?.contact?.archivedAt ? formDetails?.contact?.archivedAt: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">bvn:</span>{" "}
                {formDetails?.contact?.bvn ? formDetails?.contact?.bvn: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">code:</span>{" "}
                {formDetails?.contact?.code ? formDetails?.contact?.code: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">contactOrganization:</span>{" "}
                {formDetails?.contact?.contactOrganization ? formDetails?.contact?.contactOrganization: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">createdAt:</span>{" "}
                {formDetails?.contact?.createdAt ? formDetails?.contact?.createdAt: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">createdBy:</span>{" "}
                {formDetails?.contact?.createdBy ? formDetails?.contact?.createdBy: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">deleted:</span>{" "}
                {formDetails?.contact?.deleted ? formDetails?.contact?.deleted: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">description:</span>{" "}
                {formDetails?.contact?.description ? formDetails?.contact?.description: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">designatedBank:</span>{" "}
                {formDetails?.contact?.designatedBank ? formDetails?.contact?.designatedBank: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">emailAddress:</span>{" "}
                {formDetails?.contact?.emailAddress ? formDetails?.contact?.emailAddress: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">emailAddress2:</span>{" "}
                {formDetails?.contact?.emailAddress2 ? formDetails?.contact?.emailAddress2: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">enabled:</span>{" "}
                {formDetails?.contact?.enabled ? formDetails?.contact?.enabled: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">firstName:</span>{" "}
                {formDetails?.contact?.firstName ? formDetails?.contact?.firstName: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">Id:</span>{" "}
                {formDetails?.contact?.id ? formDetails?.contact?.id : "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">jobRole:</span>{" "}
                {formDetails?.contact?.jobRole ? formDetails?.contact?.jobRole : "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">lastName:</span>{" "}
                {formDetails?.contact?.lastName ? formDetails?.contact?.lastName: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">lga:</span>{" "}
                {formDetails?.contact?.lga ? formDetails?.contact?.lga: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">licenseExpiryDate:</span>{" "}
                {formDetails?.contact?.licenseExpiryDate ? formDetails?.contact?.licenseExpiryDate: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">licenseNumber:</span>{" "}
                {formDetails?.contact?.licenseNumber ? formDetails?.contact?.licenseNumber: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">licenseStatus:</span>{" "}
                {formDetails?.contact?.licenseStatus ? formDetails?.contact?.licenseStatus: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">middleName:</span>{" "}
                {formDetails?.contact?.middleName ? formDetails?.contact?.middleName: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">name:</span>{" "}
                {formDetails?.contact?.name ? formDetails?.contact?.name: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">nepcRegistrationNumber:</span>{" "}
                {formDetails?.contact?.nepcRegistrationNumber ? formDetails?.contact?.nepcRegistrationNumber: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">organizationType:</span>{" "}
                {formDetails?.contact?.organizationType ? formDetails?.contact?.organizationType: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">passportNumber:</span>{" "}
                {formDetails?.contact?.passportNumber ? formDetails?.contact?.passportNumber: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">phone:</span>{" "}
                {formDetails?.contact?.phone ? formDetails?.contact?.phone: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">phone:</span>{" "}
                {formDetails?.contact?.phone ? formDetails?.contact?.phone: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">rcNumber:</span>{" "}
                {formDetails?.contact?.rcNumber ? formDetails?.contact?.rcNumber: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">sector:</span>{" "}
                {formDetails?.contact?.sector ? formDetails?.contact?.sector: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">taxIdentificationNumber:</span>{" "}
                {formDetails?.contact?.taxIdentificationNumber ? formDetails?.contact?.taxIdentificationNumber: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">type:</span>{" "}
                {formDetails?.contact?.type ? formDetails?.contact?.type: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">underEmbargo:</span>{" "}
                {formDetails?.contact?.underEmbargo ? formDetails?.contact?.underEmbargo: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">updatedAt:</span>{" "}
                {formDetails?.contact?.updatedAt ? formDetails?.contact?.updatedAt: "null"}
              </div>

              <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
                <span className="font-semibold">user:</span>{" "}
                {formDetails?.contact?.user ? formDetails?.contact?.user: "null"}
              </div>
            </div>
            
        </div>
     </div>
    )
}

export default Contact