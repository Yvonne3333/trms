export interface NXPDETAILS {
    id: number
    createdAt: number
    updatedAt: number
    archivedAt: any
    contact: NxpContact
    tin: any
    year: number
    formType: string
    statusCode: string
    status: string
    applicationNumber: string
    lastApplicationNumber: any
    formNumber: string
    formNumberSerial: number
    cancellationNumberSerial: any
    extensionNumberSerial: any
    formNumberAssignedDate: number
    amendmentNumberSerial: any
    amendmentInit: boolean
    cancelled: boolean
    isDeleted: boolean
    expireAt: number
    expiryPeriod: number
    dateSubmitted: number
    activeProcess: boolean
    currentStageDate: any
    processReset: any
    currentPVSVersion: number
    consigneeName: string
    consigneeEmail: string
    consigneePhone: string
    consigneeAddressLine1: string
    consigneeAddressLine2: string
    consigneeAddressCity: string
    consigneeAddressState: string
    consigneeCountry: NxpConsigneeCountry
    byOrderOf: string
    nepcNumber: any
    cacNumber: any
    licenseNumber: any
    rcNumber: any
    accountNumber: string
    accountNumberPreAmend: any
    processingFeeAccountNumber: string
    processingFeeAccountNumberPreAmend: any
    sector: string
    numOfItemsExpected: number
    exchangeRate: number
    exchangeRateApplicantCurrency: number
    totalNetWeight: number
    totalNetWeightExporter: any
    ncsTotalNetWeight: any
    meaTotalNetWeight: any
    totalGrossWeight: number
    totalGrossWeightExporter: any
    ncsTotalGrossWeight: any
    meaTotalGrossWeight: any
    totalQuantity: number
    totalQuantityExporter: any
    ncsTotalQuantity: any
    meaTotalQuantity: any
    dprTotalQuantity: any
    totalCF: number
    totalFreightCharges: number
    totalFoB: number
    totalFoBExporter: any
    totalDollarFoBExporter: any
    totalDollarFoB: number
    nessLevyPayable: number
    nessLevyPaymentPercent: number
    shipmentsCompleted: any
    endShipmentsRequestApproved: any
    endShipmentsRequestDate: any
    endShipmentsRequestReason: any
    designatedBank: NxpDesignatedBank
    designatedBankPreAmend: any
    processingBank: NxpProcessingBank
    processingBankPreAmend: any
    processingBankBranch: NxpProcessingBankBranch
    processingBankBranchPreAmend: any
    country: NxpCountry
    countryPreAmend: any
    countryExporter: any
    inspectionLocation: NxpInspectionLocation
    inspectionLocationPreAmend: any
    transportationMode: NxpTransportationMode
    transportationModePreAmend: any
    portShipment: NxpPortShipment
    portShipmentPreAmend: any
    loadingTerminal: NxpLoadingTerminal
    loadingTerminalPreAmend: any
    currency: NxpCurrency
    currencyPreAmend: any
    paymentMode: NxpPaymentMode
    paymentModePreAmend: any
    pia: NxpPia
    piaPreAmend: any
    ncs: NxpNcs
    ted: NxpTed
    monitoringMea: NxpMonitoringMea
    monitoringMeaPreAmend: any
    tempShippingLine: NxpTempShippingLine
    tempShippingLinePreAmend: any
    dpr: NxpDpr
    nonInspectionReasons: any[]
    pvsResponses: NxpPvsResponse[]
    failedInspections: any[]
    permits: any[]
    attachments: NxpAttachment[]
    extension1PreStatusCode: any
    extension1ExpirationDate: any
    extension1Number: any
    extension1Reason: any
    extension1Init: boolean
    extension1Complete: boolean
    extension1RequestDate: any
    extension1CompletedDate: any
    dueExtension1: boolean
    extension2PreStatusCode: any
    extension2ExpirationDate: any
    extension2Number: any
    extension2Reason: any
    extension2Init: boolean
    extension2Complete: boolean
    extension2RequestDate: any
    extension2CompletedDate: any
    dueExtension2: boolean
    preCancellationRequestStatus: any
    cancellationNumber: any
    cancellationReason: any
    cancellationInit: boolean
    cancellationComplete: boolean
    cancellationRequestDate: any
    cancellationCompletedDate: any
    initialShipment: NxpInitialShipment
    shipmentTmp: any
    shipments: any[]
    lockedBy: any
    amendments: any[]
    workflowNotes: NxpWorkflowNote[]
    preAmendmentRequestStatus: any
    amendmentNumber: any
    amendmentReason: any
    amendmentComplete: boolean
    amendmentRequestDate: any
    amendmentCompletedDate: any
    amendmentAttachments: any[]
    amendmentHistory: any
    einvoice: any
    oilExport: boolean
  }
 
  interface NxpContact {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: any
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: string
    emailAddress2: any
    phone: string
    address: string
    passportNumber: any
    bvn: any
    rcNumber: string
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: string
    jobRole: any
    type: string
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpConsigneeCountry {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    code: string
    code3: any
  }
 
  interface NxpDesignatedBank {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: any
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpProcessingBank {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: any
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpProcessingBankBranch {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    emailAddress: any
    phone: any
    bankCode: any
  }
 
  interface NxpCountry {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    code: string
    code3: any
  }
 
  interface NxpInspectionLocation {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    description: any
    pias: any[]
    meas: any[]
  }
 
  interface NxpTransportationMode {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    description: any
  }
 
  interface NxpPortShipment {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    location: any
    transportationMode: any
  }
 
  interface NxpLoadingTerminal {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    code: string
    description: any
  }
 
  interface NxpCurrency {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    sellRate: number
    buyRate: any
    description: any
    exchangeRateDate: any
    currencyMarket: number
    midRevalRate: number
    country: any
    exchangeRate: any
    exchangeRateApplicantCurrency: any
    currency: any
  }
 
 interface NxpPaymentMode {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
  }
 
  interface NxpPia {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: string
    emailAddress2: any
    phone: string
    address: string
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpNcs {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: string
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpTed {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: string
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpMonitoringMea {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: string
    emailAddress2: any
    phone: string
    address: any
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpTempShippingLine {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: any
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpDpr {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: string
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
  interface NxpPvsResponse {
    id: number
    createdAt: number
    updatedAt: number
    archivedAt: any
    version: number
    failedPushId: any
    response: string
    errors: any
    errorType: string
    status: string
    statusDate: number
    statusDate2: number
  }
 
  interface NxpAttachment {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    entity: any
    entityId: any
    file: NxpFile
  }
 
interface NxpFile {
    id: number
    createdAt: number
    updatedAt: any
    archivedAt: any
    fileId: string
    fileName: string
    diskFileName: string
    label: string
    mimeType: string
    deleted: boolean
  }
 
  interface NxpInitialShipment {
    id: number
    createdAt: number
    updatedAt: number
    archivedAt: any
    form: any
    shipmentNumber: any
    statusCode: any
    expectedShipmentDateExporter: any
    expectedShipmentDate: number
    expectedShipmentDatePreAmend: any
    vesselNameTmp: any
    vesselNameExporter: any
    vesselName: string
    vesselNamePreAmend: any
    exchangeRate: any
    exchangeRateApplicantCurrency: any
    totalNetWeight: number
    totalNetWeightExporter: any
    ncsTotalNetWeight: any
    meaTotalNetWeight: any
    totalGrossWeight: number
    totalGrossWeightExporter: any
    ncsTotalGrossWeight: any
    meaTotalGrossWeight: any
    totalQuantity: number
    totalQuantityExporter: any
    ncsTotalQuantity: any
    meaTotalQuantity: any
    dprTotalQuantity: any
    totalCF: number
    totalFreightCharges: number
    totalFoB: number
    totalDollarFoB: number
    piaApproved: boolean
    ncsApproved: boolean
    currentDPRActor: any
    currentMEAActor: any
    dprApproved: boolean
    meaApproved: boolean
    activeProcess: boolean
    currentStageDate: any
    processReset: any
    portDestination: NxpPortDestination
    portDestinationPreAmend: any
    portDestinationExporter: any
    items: NxpItem[]
    attachments: any
    dprCertificateNumber: any
    dprVarianceReportFile: any
    pciApproved: boolean
    pciNumber: any
    inspectionNote: any
    inspectionDate: any
    pciFile: any
    nonCCIIssuance: any[]
    ciNumber: any
    ciType: any
    ciDate: any
    ciApproved: boolean
    ciFile: any
    meaEvRepCode: any
    meaEvRepFile: any
    nessLevyPaymentApproved: boolean
    transactionCode: any
    transactionFile: any
    nessLevyPayableExporter: any
    nessLevyPayable: any
    nessLevyPaid: any
    nessLevyDate: any
    sgdApproved: boolean
    sgdNumber: any
    sgdStatus: any
    sgdInspectionAct: any
    sgdDateIssued: any
    sgdDateEntered: any
    sgdFile: any
    certificateOfOrigin: any
    goodsReleasedForShipment: any
    billOfLadingApproved: boolean
    shippingLine: any
    shippingLinePreAmend: any
    billOfLadingNumber: any
    billOfLadingDate: any
    shipmentDate: any
    billOfLadingFile: any
    amountToRepatriate: any
    amountRepatriated: any
    repatriationDueDate: any
    repatriationDate: any
    repatriations: any[]
    fullRepatriationReceived: boolean
    amendmentNumberSerial: any
    preAmendmentRequestStatus: any
    amendmentNumber: any
    amendmentReason: any
    amendmentInit: boolean
    amendmentComplete: boolean
    amendmentRequestDate: any
    amendmentCompletedDate: any
    amendmentAttachments: any[]
    amendmentHistory: any
    amendments: any
    lockedBy: any
    workflowNotes: any
    cancellationNumberSerial: any
    cancelled: boolean
    preCancellationRequestStatus: any
    cancellationNumber: any
    cancellationReason: any
    cancellationInit: boolean
    cancellationComplete: boolean
    cancellationRequestDate: any
    cancellationCompletedDate: any
    moveToRepatriation: any
    deleted: boolean
  }
 
  interface NxpPortDestination {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    code: string
    country: NxpCountry2
  }
 
  interface NxpCountry2 {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    code: string
    code3: any
  }
 
  interface NxpItem {
    id: number
    createdAt: number
    updatedAt: any
    archivedAt: any
    unitPrice: number
    unitPricePreAmend: any
    exporterUnitPrice: number
    ncsUnitPrice: any
    meaUnitPrice: any
    quantity: number
    quantityPreAmend: any
    exporterQuantity: number
    ncsQuantity: any
    meaQuantity: any
    dprQuantity: any
    netWeight: number
    exporterNetWeight: number
    ncsNetWeight: any
    meaNetWeight: any
    grossWeight: number
    exporterGrossWeight: number
    ncsGrossWeight: any
    meaGrossWeight: any
    foB: number
    foBExporter: number
    nessLevyPayable: number
    dollarFoB: number
    dollarFoBExporter: number
    frightCharge: number
    frightChargePreAmend: any
    quality: any
    originalShipmentItemId: any
    description: string
    descriptionPreAmend: any
    hsCode: NxpHsCode
    hsCodePreAmend: any
    unitOfMeasurement: NxpUnitOfMeasurement
    dprUnitOfMeasurement: any
    packagingMode: NxpPackagingMode
    sectoralPurpose: NxpSectoralPurpose
    dgdTagValues: NxpDgdTagValue[]
    deleted: boolean
  }
 
  interface NxpHsCode {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    description: any
    sector: any
    subCategory: any
    permits: any[]
    banned: boolean
  }
 
  interface NxpUnitOfMeasurement {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
  }
 
  interface NxpPackagingMode {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
    description: any
  }
 
  interface NxpSectoralPurpose {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    code: string
    name: string
  }
 
  interface NxpDgdTagValue {
    id: number
    createdAt: number
    updatedAt: any
    archivedAt: any
    code: string
    value: string
    valuePreAmend: any
    label: string
    labelPreAmend: any
  }
 
  interface NxpWorkflowNote {
    id: number
    createdAt: number
    updatedAt: any
    archivedAt: any
    formId: any
    approved: boolean
    formTypeId: number
    rejectionReason: any
    formContact: NxpFormContact
    daemonReviewerName: string
    daemonSupervisorName: string
    applicationStatusCode: string
    noteTitle: any
    noteDescription: string
    deleted: boolean
  }
 
interface NxpFormContact {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: any
    firstName: string
    middleName: any
    lastName: string
    code: any
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: any
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: NxpContactOrganization
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 
interface NxpContactOrganization {
    id: number
    createdAt: any
    updatedAt: any
    archivedAt: any
    name: string
    firstName: any
    middleName: any
    lastName: any
    code: string
    description: any
    enabled: boolean
    underEmbargo: boolean
    licenseExpiryDate: any
    licenseStatus: any
    deleted: boolean
    emailAddress: any
    emailAddress2: any
    phone: any
    address: any
    passportNumber: any
    bvn: any
    rcNumber: any
    licenseNumber: any
    nepcRegistrationNumber: any
    taxIdentificationNumber: any
    jobRole: any
    type: any
    organizationType: any
    accountCategory: any
    designatedBank: boolean
    contactOrganization: any
    user: any
    lga: any
    createdBy: any
    sector: any
  }
 