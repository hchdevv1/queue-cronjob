
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AppointmentsScalarFieldEnum = {
  appointment_id: 'appointment_id',
  rights: 'rights',
  appoint_date: 'appoint_date',
  appoint_time: 'appoint_time',
  clinic: 'clinic',
  doctor: 'doctor',
  users_mobile_id: 'users_mobile_id',
  status: 'status',
  created_by: 'created_by',
  updated_by: 'updated_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.BillingScalarFieldEnum = {
  billing_id: 'billing_id',
  vn: 'vn',
  queue_no: 'queue_no',
  bill_no: 'bill_no',
  order_id: 'order_id',
  charge_id: 'charge_id',
  total_price: 'total_price',
  patient_hn: 'patient_hn',
  patient_name: 'patient_name',
  cashier_queue_id: 'cashier_queue_id',
  has_webhook_notify: 'has_webhook_notify',
  created_at: 'created_at',
  updated_at: 'updated_at',
  payment_status: 'payment_status'
};

exports.Prisma.Broadcast_masterScalarFieldEnum = {
  broadcast_master_id: 'broadcast_master_id',
  message_title: 'message_title',
  message_body: 'message_body',
  date: 'date',
  image: 'image',
  created_by: 'created_by',
  updated_by: 'updated_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  link_url: 'link_url'
};

exports.Prisma.Broadcast_master_has_users_mobileScalarFieldEnum = {
  broadcast_master_has_users_mobile_id: 'broadcast_master_has_users_mobile_id',
  broadcast_master_id: 'broadcast_master_id',
  users_mobile_id: 'users_mobile_id',
  created_by: 'created_by',
  updated_by: 'updated_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.BuildingScalarFieldEnum = {
  building_id: 'building_id',
  name: 'name',
  created_by: 'created_by',
  updated_by: 'updated_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Cashier_queueScalarFieldEnum = {
  cashier_queue_id: 'cashier_queue_id',
  patient_hn: 'patient_hn',
  patient_name: 'patient_name',
  vn: 'vn',
  queue_no: 'queue_no',
  patient_location_code: 'patient_location_code',
  patient_location_name: 'patient_location_name',
  discharge_location_code: 'discharge_location_code',
  discharge_location_name: 'discharge_location_name',
  discharge_building: 'discharge_building',
  meddischarge_date: 'meddischarge_date',
  meddischarge_time: 'meddischarge_time',
  accepted_date: 'accepted_date',
  accepted_time: 'accepted_time',
  collected_date: 'collected_date',
  collected_time: 'collected_time',
  is_cashier: 'is_cashier',
  medicine_status: 'medicine_status',
  medicine_room: 'medicine_room',
  cashier_status: 'cashier_status',
  cashier_status_mobile: 'cashier_status_mobile',
  payment_type: 'payment_type',
  cashier_room: 'cashier_room',
  remark: 'remark',
  method_status: 'method_status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  lang: 'lang'
};

exports.Prisma.Doctor_queueScalarFieldEnum = {
  doctor_queue_id: 'doctor_queue_id',
  patient_hn: 'patient_hn',
  patient_name: 'patient_name',
  vn: 'vn',
  doctor_code: 'doctor_code',
  doctor_name: 'doctor_name',
  location_code: 'location_code',
  location_name: 'location_name',
  building: 'building',
  service: 'service',
  appt_row_id: 'appt_row_id',
  appt_date: 'appt_date',
  appt_time: 'appt_time',
  arrive_date: 'arrive_date',
  arrive_time: 'arrive_time',
  queue_no: 'queue_no',
  status_lab: 'status_lab',
  status_xray: 'status_xray',
  is_emergency: 'is_emergency',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  lang: 'lang'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.appointments_rights = exports.$Enums.appointments_rights = {
  STATUS_1: 'STATUS_1',
  STATUS_0: 'STATUS_0'
};

exports.appointments_status = exports.$Enums.appointments_status = {
  STATUS_2: 'STATUS_2',
  STATUS_1: 'STATUS_1',
  STATUS_0: 'STATUS_0'
};

exports.billing_has_webhook_notify = exports.$Enums.billing_has_webhook_notify = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

exports.billing_payment_status = exports.$Enums.billing_payment_status = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

exports.cashier_queue_is_cashier = exports.$Enums.cashier_queue_is_cashier = {
  Y: 'Y',
  N: 'N'
};

exports.cashier_queue_medicine_status = exports.$Enums.cashier_queue_medicine_status = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1',
  STATUS_2: 'STATUS_2'
};

exports.cashier_queue_cashier_status = exports.$Enums.cashier_queue_cashier_status = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1',
  STATUS_2: 'STATUS_2'
};

exports.cashier_queue_cashier_status_mobile = exports.$Enums.cashier_queue_cashier_status_mobile = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

exports.cashier_queue_payment_type = exports.$Enums.cashier_queue_payment_type = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

exports.cashier_queue_method_status = exports.$Enums.cashier_queue_method_status = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

exports.cashier_queue_lang = exports.$Enums.cashier_queue_lang = {
  th: 'th',
  en: 'en'
};

exports.doctor_queue_is_emergency = exports.$Enums.doctor_queue_is_emergency = {
  Y: 'Y',
  N: 'N'
};

exports.doctor_queue_status = exports.$Enums.doctor_queue_status = {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1',
  STATUS_2: 'STATUS_2'
};

exports.doctor_queue_lang = exports.$Enums.doctor_queue_lang = {
  th: 'th',
  en: 'en'
};

exports.Prisma.ModelName = {
  appointments: 'appointments',
  billing: 'billing',
  broadcast_master: 'broadcast_master',
  broadcast_master_has_users_mobile: 'broadcast_master_has_users_mobile',
  building: 'building',
  cashier_queue: 'cashier_queue',
  doctor_queue: 'doctor_queue'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
