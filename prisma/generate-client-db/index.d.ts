
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model appointments
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type appointments = $Result.DefaultSelection<Prisma.$appointmentsPayload>
/**
 * Model billing
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type billing = $Result.DefaultSelection<Prisma.$billingPayload>
/**
 * Model broadcast_master
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type broadcast_master = $Result.DefaultSelection<Prisma.$broadcast_masterPayload>
/**
 * Model broadcast_master_has_users_mobile
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type broadcast_master_has_users_mobile = $Result.DefaultSelection<Prisma.$broadcast_master_has_users_mobilePayload>
/**
 * Model building
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type building = $Result.DefaultSelection<Prisma.$buildingPayload>
/**
 * Model cashier_queue
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cashier_queue = $Result.DefaultSelection<Prisma.$cashier_queuePayload>
/**
 * Model doctor_queue
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type doctor_queue = $Result.DefaultSelection<Prisma.$doctor_queuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const appointments_rights: {
  STATUS_1: 'STATUS_1',
  STATUS_0: 'STATUS_0'
};

export type appointments_rights = (typeof appointments_rights)[keyof typeof appointments_rights]


export const appointments_status: {
  STATUS_2: 'STATUS_2',
  STATUS_1: 'STATUS_1',
  STATUS_0: 'STATUS_0'
};

export type appointments_status = (typeof appointments_status)[keyof typeof appointments_status]


export const billing_has_webhook_notify: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

export type billing_has_webhook_notify = (typeof billing_has_webhook_notify)[keyof typeof billing_has_webhook_notify]


export const billing_payment_status: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

export type billing_payment_status = (typeof billing_payment_status)[keyof typeof billing_payment_status]


export const cashier_queue_is_cashier: {
  Y: 'Y',
  N: 'N'
};

export type cashier_queue_is_cashier = (typeof cashier_queue_is_cashier)[keyof typeof cashier_queue_is_cashier]


export const cashier_queue_medicine_status: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1',
  STATUS_2: 'STATUS_2'
};

export type cashier_queue_medicine_status = (typeof cashier_queue_medicine_status)[keyof typeof cashier_queue_medicine_status]


export const cashier_queue_cashier_status: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1',
  STATUS_2: 'STATUS_2'
};

export type cashier_queue_cashier_status = (typeof cashier_queue_cashier_status)[keyof typeof cashier_queue_cashier_status]


export const cashier_queue_cashier_status_mobile: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

export type cashier_queue_cashier_status_mobile = (typeof cashier_queue_cashier_status_mobile)[keyof typeof cashier_queue_cashier_status_mobile]


export const cashier_queue_payment_type: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

export type cashier_queue_payment_type = (typeof cashier_queue_payment_type)[keyof typeof cashier_queue_payment_type]


export const cashier_queue_method_status: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1'
};

export type cashier_queue_method_status = (typeof cashier_queue_method_status)[keyof typeof cashier_queue_method_status]


export const cashier_queue_lang: {
  th: 'th',
  en: 'en'
};

export type cashier_queue_lang = (typeof cashier_queue_lang)[keyof typeof cashier_queue_lang]


export const doctor_queue_is_emergency: {
  Y: 'Y',
  N: 'N'
};

export type doctor_queue_is_emergency = (typeof doctor_queue_is_emergency)[keyof typeof doctor_queue_is_emergency]


export const doctor_queue_status: {
  STATUS_0: 'STATUS_0',
  STATUS_1: 'STATUS_1',
  STATUS_2: 'STATUS_2'
};

export type doctor_queue_status = (typeof doctor_queue_status)[keyof typeof doctor_queue_status]


export const doctor_queue_lang: {
  th: 'th',
  en: 'en'
};

export type doctor_queue_lang = (typeof doctor_queue_lang)[keyof typeof doctor_queue_lang]

}

export type appointments_rights = $Enums.appointments_rights

export const appointments_rights: typeof $Enums.appointments_rights

export type appointments_status = $Enums.appointments_status

export const appointments_status: typeof $Enums.appointments_status

export type billing_has_webhook_notify = $Enums.billing_has_webhook_notify

export const billing_has_webhook_notify: typeof $Enums.billing_has_webhook_notify

export type billing_payment_status = $Enums.billing_payment_status

export const billing_payment_status: typeof $Enums.billing_payment_status

export type cashier_queue_is_cashier = $Enums.cashier_queue_is_cashier

export const cashier_queue_is_cashier: typeof $Enums.cashier_queue_is_cashier

export type cashier_queue_medicine_status = $Enums.cashier_queue_medicine_status

export const cashier_queue_medicine_status: typeof $Enums.cashier_queue_medicine_status

export type cashier_queue_cashier_status = $Enums.cashier_queue_cashier_status

export const cashier_queue_cashier_status: typeof $Enums.cashier_queue_cashier_status

export type cashier_queue_cashier_status_mobile = $Enums.cashier_queue_cashier_status_mobile

export const cashier_queue_cashier_status_mobile: typeof $Enums.cashier_queue_cashier_status_mobile

export type cashier_queue_payment_type = $Enums.cashier_queue_payment_type

export const cashier_queue_payment_type: typeof $Enums.cashier_queue_payment_type

export type cashier_queue_method_status = $Enums.cashier_queue_method_status

export const cashier_queue_method_status: typeof $Enums.cashier_queue_method_status

export type cashier_queue_lang = $Enums.cashier_queue_lang

export const cashier_queue_lang: typeof $Enums.cashier_queue_lang

export type doctor_queue_is_emergency = $Enums.doctor_queue_is_emergency

export const doctor_queue_is_emergency: typeof $Enums.doctor_queue_is_emergency

export type doctor_queue_status = $Enums.doctor_queue_status

export const doctor_queue_status: typeof $Enums.doctor_queue_status

export type doctor_queue_lang = $Enums.doctor_queue_lang

export const doctor_queue_lang: typeof $Enums.doctor_queue_lang

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointments.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointments.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.appointments`: Exposes CRUD operations for the **appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.appointmentsDelegate<ExtArgs>;

  /**
   * `prisma.billing`: Exposes CRUD operations for the **billing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billings
    * const billings = await prisma.billing.findMany()
    * ```
    */
  get billing(): Prisma.billingDelegate<ExtArgs>;

  /**
   * `prisma.broadcast_master`: Exposes CRUD operations for the **broadcast_master** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Broadcast_masters
    * const broadcast_masters = await prisma.broadcast_master.findMany()
    * ```
    */
  get broadcast_master(): Prisma.broadcast_masterDelegate<ExtArgs>;

  /**
   * `prisma.broadcast_master_has_users_mobile`: Exposes CRUD operations for the **broadcast_master_has_users_mobile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Broadcast_master_has_users_mobiles
    * const broadcast_master_has_users_mobiles = await prisma.broadcast_master_has_users_mobile.findMany()
    * ```
    */
  get broadcast_master_has_users_mobile(): Prisma.broadcast_master_has_users_mobileDelegate<ExtArgs>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.buildingDelegate<ExtArgs>;

  /**
   * `prisma.cashier_queue`: Exposes CRUD operations for the **cashier_queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cashier_queues
    * const cashier_queues = await prisma.cashier_queue.findMany()
    * ```
    */
  get cashier_queue(): Prisma.cashier_queueDelegate<ExtArgs>;

  /**
   * `prisma.doctor_queue`: Exposes CRUD operations for the **doctor_queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctor_queues
    * const doctor_queues = await prisma.doctor_queue.findMany()
    * ```
    */
  get doctor_queue(): Prisma.doctor_queueDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    appointments: 'appointments',
    billing: 'billing',
    broadcast_master: 'broadcast_master',
    broadcast_master_has_users_mobile: 'broadcast_master_has_users_mobile',
    building: 'building',
    cashier_queue: 'cashier_queue',
    doctor_queue: 'doctor_queue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "appointments" | "billing" | "broadcast_master" | "broadcast_master_has_users_mobile" | "building" | "cashier_queue" | "doctor_queue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      appointments: {
        payload: Prisma.$appointmentsPayload<ExtArgs>
        fields: Prisma.appointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findFirst: {
            args: Prisma.appointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findMany: {
            args: Prisma.appointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          create: {
            args: Prisma.appointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          createMany: {
            args: Prisma.appointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.appointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          update: {
            args: Prisma.appointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          deleteMany: {
            args: Prisma.appointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.appointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.appointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
      billing: {
        payload: Prisma.$billingPayload<ExtArgs>
        fields: Prisma.billingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.billingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.billingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>
          }
          findFirst: {
            args: Prisma.billingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.billingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>
          }
          findMany: {
            args: Prisma.billingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>[]
          }
          create: {
            args: Prisma.billingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>
          }
          createMany: {
            args: Prisma.billingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.billingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>
          }
          update: {
            args: Prisma.billingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>
          }
          deleteMany: {
            args: Prisma.billingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.billingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.billingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$billingPayload>
          }
          aggregate: {
            args: Prisma.BillingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBilling>
          }
          groupBy: {
            args: Prisma.billingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingGroupByOutputType>[]
          }
          count: {
            args: Prisma.billingCountArgs<ExtArgs>
            result: $Utils.Optional<BillingCountAggregateOutputType> | number
          }
        }
      }
      broadcast_master: {
        payload: Prisma.$broadcast_masterPayload<ExtArgs>
        fields: Prisma.broadcast_masterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.broadcast_masterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.broadcast_masterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>
          }
          findFirst: {
            args: Prisma.broadcast_masterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.broadcast_masterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>
          }
          findMany: {
            args: Prisma.broadcast_masterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>[]
          }
          create: {
            args: Prisma.broadcast_masterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>
          }
          createMany: {
            args: Prisma.broadcast_masterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.broadcast_masterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>
          }
          update: {
            args: Prisma.broadcast_masterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>
          }
          deleteMany: {
            args: Prisma.broadcast_masterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.broadcast_masterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.broadcast_masterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_masterPayload>
          }
          aggregate: {
            args: Prisma.Broadcast_masterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcast_master>
          }
          groupBy: {
            args: Prisma.broadcast_masterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Broadcast_masterGroupByOutputType>[]
          }
          count: {
            args: Prisma.broadcast_masterCountArgs<ExtArgs>
            result: $Utils.Optional<Broadcast_masterCountAggregateOutputType> | number
          }
        }
      }
      broadcast_master_has_users_mobile: {
        payload: Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>
        fields: Prisma.broadcast_master_has_users_mobileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.broadcast_master_has_users_mobileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.broadcast_master_has_users_mobileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>
          }
          findFirst: {
            args: Prisma.broadcast_master_has_users_mobileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.broadcast_master_has_users_mobileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>
          }
          findMany: {
            args: Prisma.broadcast_master_has_users_mobileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>[]
          }
          create: {
            args: Prisma.broadcast_master_has_users_mobileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>
          }
          createMany: {
            args: Prisma.broadcast_master_has_users_mobileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.broadcast_master_has_users_mobileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>
          }
          update: {
            args: Prisma.broadcast_master_has_users_mobileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>
          }
          deleteMany: {
            args: Prisma.broadcast_master_has_users_mobileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.broadcast_master_has_users_mobileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.broadcast_master_has_users_mobileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$broadcast_master_has_users_mobilePayload>
          }
          aggregate: {
            args: Prisma.Broadcast_master_has_users_mobileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcast_master_has_users_mobile>
          }
          groupBy: {
            args: Prisma.broadcast_master_has_users_mobileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Broadcast_master_has_users_mobileGroupByOutputType>[]
          }
          count: {
            args: Prisma.broadcast_master_has_users_mobileCountArgs<ExtArgs>
            result: $Utils.Optional<Broadcast_master_has_users_mobileCountAggregateOutputType> | number
          }
        }
      }
      building: {
        payload: Prisma.$buildingPayload<ExtArgs>
        fields: Prisma.buildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.buildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.buildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>
          }
          findFirst: {
            args: Prisma.buildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.buildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>
          }
          findMany: {
            args: Prisma.buildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>[]
          }
          create: {
            args: Prisma.buildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>
          }
          createMany: {
            args: Prisma.buildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.buildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>
          }
          update: {
            args: Prisma.buildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>
          }
          deleteMany: {
            args: Prisma.buildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.buildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.buildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.buildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.buildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      cashier_queue: {
        payload: Prisma.$cashier_queuePayload<ExtArgs>
        fields: Prisma.cashier_queueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cashier_queueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cashier_queueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>
          }
          findFirst: {
            args: Prisma.cashier_queueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cashier_queueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>
          }
          findMany: {
            args: Prisma.cashier_queueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>[]
          }
          create: {
            args: Prisma.cashier_queueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>
          }
          createMany: {
            args: Prisma.cashier_queueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cashier_queueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>
          }
          update: {
            args: Prisma.cashier_queueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>
          }
          deleteMany: {
            args: Prisma.cashier_queueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cashier_queueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cashier_queueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashier_queuePayload>
          }
          aggregate: {
            args: Prisma.Cashier_queueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashier_queue>
          }
          groupBy: {
            args: Prisma.cashier_queueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cashier_queueGroupByOutputType>[]
          }
          count: {
            args: Prisma.cashier_queueCountArgs<ExtArgs>
            result: $Utils.Optional<Cashier_queueCountAggregateOutputType> | number
          }
        }
      }
      doctor_queue: {
        payload: Prisma.$doctor_queuePayload<ExtArgs>
        fields: Prisma.doctor_queueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctor_queueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctor_queueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>
          }
          findFirst: {
            args: Prisma.doctor_queueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctor_queueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>
          }
          findMany: {
            args: Prisma.doctor_queueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>[]
          }
          create: {
            args: Prisma.doctor_queueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>
          }
          createMany: {
            args: Prisma.doctor_queueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.doctor_queueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>
          }
          update: {
            args: Prisma.doctor_queueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>
          }
          deleteMany: {
            args: Prisma.doctor_queueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctor_queueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.doctor_queueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctor_queuePayload>
          }
          aggregate: {
            args: Prisma.Doctor_queueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor_queue>
          }
          groupBy: {
            args: Prisma.doctor_queueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Doctor_queueGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctor_queueCountArgs<ExtArgs>
            result: $Utils.Optional<Doctor_queueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    appointment_id: number | null
    users_mobile_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    appointment_id: number | null
    users_mobile_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    appointment_id: number | null
    rights: $Enums.appointments_rights | null
    appoint_date: Date | null
    appoint_time: string | null
    clinic: string | null
    doctor: string | null
    users_mobile_id: number | null
    status: $Enums.appointments_status | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    appointment_id: number | null
    rights: $Enums.appointments_rights | null
    appoint_date: Date | null
    appoint_time: string | null
    clinic: string | null
    doctor: string | null
    users_mobile_id: number | null
    status: $Enums.appointments_status | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AppointmentsCountAggregateOutputType = {
    appointment_id: number
    rights: number
    appoint_date: number
    appoint_time: number
    clinic: number
    doctor: number
    users_mobile_id: number
    status: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    appointment_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
  }

  export type AppointmentsSumAggregateInputType = {
    appointment_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
  }

  export type AppointmentsMinAggregateInputType = {
    appointment_id?: true
    rights?: true
    appoint_date?: true
    appoint_time?: true
    clinic?: true
    doctor?: true
    users_mobile_id?: true
    status?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    appointment_id?: true
    rights?: true
    appoint_date?: true
    appoint_time?: true
    clinic?: true
    doctor?: true
    users_mobile_id?: true
    status?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AppointmentsCountAggregateInputType = {
    appointment_id?: true
    rights?: true
    appoint_date?: true
    appoint_time?: true
    clinic?: true
    doctor?: true
    users_mobile_id?: true
    status?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to aggregate.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type appointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithAggregationInput | appointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: appointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    appointment_id: number
    rights: $Enums.appointments_rights
    appoint_date: Date
    appoint_time: string
    clinic: string | null
    doctor: string | null
    users_mobile_id: number
    status: $Enums.appointments_status
    created_by: number
    updated_by: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends appointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type appointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    rights?: boolean
    appoint_date?: boolean
    appoint_time?: boolean
    clinic?: boolean
    doctor?: boolean
    users_mobile_id?: boolean
    status?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["appointments"]>


  export type appointmentsSelectScalar = {
    appointment_id?: boolean
    rights?: boolean
    appoint_date?: boolean
    appoint_time?: boolean
    clinic?: boolean
    doctor?: boolean
    users_mobile_id?: boolean
    status?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $appointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      appointment_id: number
      rights: $Enums.appointments_rights
      appoint_date: Date
      appoint_time: string
      clinic: string | null
      doctor: string | null
      users_mobile_id: number
      status: $Enums.appointments_status
      created_by: number
      updated_by: number | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type appointmentsGetPayload<S extends boolean | null | undefined | appointmentsDefaultArgs> = $Result.GetResult<Prisma.$appointmentsPayload, S>

  type appointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<appointmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface appointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointments'], meta: { name: 'appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {appointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentsFindUniqueArgs>(args: SelectSubset<T, appointmentsFindUniqueArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {appointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentsFindFirstArgs>(args?: SelectSubset<T, appointmentsFindFirstArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.findMany({ select: { appointment_id: true } })
     * 
     */
    findMany<T extends appointmentsFindManyArgs>(args?: SelectSubset<T, appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appointments.
     * @param {appointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends appointmentsCreateArgs>(args: SelectSubset<T, appointmentsCreateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {appointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentsCreateManyArgs>(args?: SelectSubset<T, appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointments.
     * @param {appointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends appointmentsDeleteArgs>(args: SelectSubset<T, appointmentsDeleteArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appointments.
     * @param {appointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentsUpdateArgs>(args: SelectSubset<T, appointmentsUpdateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentsDeleteManyArgs>(args?: SelectSubset<T, appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentsUpdateManyArgs>(args: SelectSubset<T, appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointments.
     * @param {appointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends appointmentsUpsertArgs>(args: SelectSubset<T, appointmentsUpsertArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentsCountArgs>(
      args?: Subset<T, appointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentsGroupByArgs['orderBy'] }
        : { orderBy?: appointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointments model
   */
  readonly fields: appointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appointments model
   */ 
  interface appointmentsFieldRefs {
    readonly appointment_id: FieldRef<"appointments", 'Int'>
    readonly rights: FieldRef<"appointments", 'appointments_rights'>
    readonly appoint_date: FieldRef<"appointments", 'DateTime'>
    readonly appoint_time: FieldRef<"appointments", 'String'>
    readonly clinic: FieldRef<"appointments", 'String'>
    readonly doctor: FieldRef<"appointments", 'String'>
    readonly users_mobile_id: FieldRef<"appointments", 'Int'>
    readonly status: FieldRef<"appointments", 'appointments_status'>
    readonly created_by: FieldRef<"appointments", 'Int'>
    readonly updated_by: FieldRef<"appointments", 'Int'>
    readonly created_at: FieldRef<"appointments", 'DateTime'>
    readonly updated_at: FieldRef<"appointments", 'DateTime'>
    readonly deleted_at: FieldRef<"appointments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * appointments findUnique
   */
  export type appointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findUniqueOrThrow
   */
  export type appointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findFirst
   */
  export type appointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findFirstOrThrow
   */
  export type appointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findMany
   */
  export type appointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments create
   */
  export type appointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * The data needed to create a appointments.
     */
    data: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
  }

  /**
   * appointments createMany
   */
  export type appointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointments update
   */
  export type appointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * The data needed to update a appointments.
     */
    data: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
    /**
     * Choose, which appointments to update.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments updateMany
   */
  export type appointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
  }

  /**
   * appointments upsert
   */
  export type appointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * The filter to search for the appointments to update in case it exists.
     */
    where: appointmentsWhereUniqueInput
    /**
     * In case the appointments found by the `where` argument doesn't exist, create a new appointments with this data.
     */
    create: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
    /**
     * In case the appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
  }

  /**
   * appointments delete
   */
  export type appointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Filter which appointments to delete.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments deleteMany
   */
  export type appointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentsWhereInput
  }

  /**
   * appointments without action
   */
  export type appointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
  }


  /**
   * Model billing
   */

  export type AggregateBilling = {
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  export type BillingAvgAggregateOutputType = {
    billing_id: number | null
    total_price: number | null
    cashier_queue_id: number | null
  }

  export type BillingSumAggregateOutputType = {
    billing_id: number | null
    total_price: number | null
    cashier_queue_id: number | null
  }

  export type BillingMinAggregateOutputType = {
    billing_id: number | null
    vn: string | null
    queue_no: string | null
    bill_no: string | null
    order_id: string | null
    charge_id: string | null
    total_price: number | null
    patient_hn: string | null
    patient_name: string | null
    cashier_queue_id: number | null
    has_webhook_notify: $Enums.billing_has_webhook_notify | null
    created_at: Date | null
    updated_at: Date | null
    payment_status: $Enums.billing_payment_status | null
  }

  export type BillingMaxAggregateOutputType = {
    billing_id: number | null
    vn: string | null
    queue_no: string | null
    bill_no: string | null
    order_id: string | null
    charge_id: string | null
    total_price: number | null
    patient_hn: string | null
    patient_name: string | null
    cashier_queue_id: number | null
    has_webhook_notify: $Enums.billing_has_webhook_notify | null
    created_at: Date | null
    updated_at: Date | null
    payment_status: $Enums.billing_payment_status | null
  }

  export type BillingCountAggregateOutputType = {
    billing_id: number
    vn: number
    queue_no: number
    bill_no: number
    order_id: number
    charge_id: number
    total_price: number
    patient_hn: number
    patient_name: number
    cashier_queue_id: number
    has_webhook_notify: number
    created_at: number
    updated_at: number
    payment_status: number
    _all: number
  }


  export type BillingAvgAggregateInputType = {
    billing_id?: true
    total_price?: true
    cashier_queue_id?: true
  }

  export type BillingSumAggregateInputType = {
    billing_id?: true
    total_price?: true
    cashier_queue_id?: true
  }

  export type BillingMinAggregateInputType = {
    billing_id?: true
    vn?: true
    queue_no?: true
    bill_no?: true
    order_id?: true
    charge_id?: true
    total_price?: true
    patient_hn?: true
    patient_name?: true
    cashier_queue_id?: true
    has_webhook_notify?: true
    created_at?: true
    updated_at?: true
    payment_status?: true
  }

  export type BillingMaxAggregateInputType = {
    billing_id?: true
    vn?: true
    queue_no?: true
    bill_no?: true
    order_id?: true
    charge_id?: true
    total_price?: true
    patient_hn?: true
    patient_name?: true
    cashier_queue_id?: true
    has_webhook_notify?: true
    created_at?: true
    updated_at?: true
    payment_status?: true
  }

  export type BillingCountAggregateInputType = {
    billing_id?: true
    vn?: true
    queue_no?: true
    bill_no?: true
    order_id?: true
    charge_id?: true
    total_price?: true
    patient_hn?: true
    patient_name?: true
    cashier_queue_id?: true
    has_webhook_notify?: true
    created_at?: true
    updated_at?: true
    payment_status?: true
    _all?: true
  }

  export type BillingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which billing to aggregate.
     */
    where?: billingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: billingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned billings
    **/
    _count?: true | BillingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingMaxAggregateInputType
  }

  export type GetBillingAggregateType<T extends BillingAggregateArgs> = {
        [P in keyof T & keyof AggregateBilling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBilling[P]>
      : GetScalarType<T[P], AggregateBilling[P]>
  }




  export type billingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billingWhereInput
    orderBy?: billingOrderByWithAggregationInput | billingOrderByWithAggregationInput[]
    by: BillingScalarFieldEnum[] | BillingScalarFieldEnum
    having?: billingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingCountAggregateInputType | true
    _avg?: BillingAvgAggregateInputType
    _sum?: BillingSumAggregateInputType
    _min?: BillingMinAggregateInputType
    _max?: BillingMaxAggregateInputType
  }

  export type BillingGroupByOutputType = {
    billing_id: number
    vn: string
    queue_no: string
    bill_no: string
    order_id: string | null
    charge_id: string | null
    total_price: number
    patient_hn: string
    patient_name: string
    cashier_queue_id: number | null
    has_webhook_notify: $Enums.billing_has_webhook_notify
    created_at: Date
    updated_at: Date
    payment_status: $Enums.billing_payment_status | null
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  type GetBillingGroupByPayload<T extends billingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingGroupByOutputType[P]>
            : GetScalarType<T[P], BillingGroupByOutputType[P]>
        }
      >
    >


  export type billingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    billing_id?: boolean
    vn?: boolean
    queue_no?: boolean
    bill_no?: boolean
    order_id?: boolean
    charge_id?: boolean
    total_price?: boolean
    patient_hn?: boolean
    patient_name?: boolean
    cashier_queue_id?: boolean
    has_webhook_notify?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_status?: boolean
  }, ExtArgs["result"]["billing"]>


  export type billingSelectScalar = {
    billing_id?: boolean
    vn?: boolean
    queue_no?: boolean
    bill_no?: boolean
    order_id?: boolean
    charge_id?: boolean
    total_price?: boolean
    patient_hn?: boolean
    patient_name?: boolean
    cashier_queue_id?: boolean
    has_webhook_notify?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_status?: boolean
  }


  export type $billingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "billing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      billing_id: number
      vn: string
      queue_no: string
      bill_no: string
      order_id: string | null
      charge_id: string | null
      total_price: number
      patient_hn: string
      patient_name: string
      cashier_queue_id: number | null
      has_webhook_notify: $Enums.billing_has_webhook_notify
      created_at: Date
      updated_at: Date
      payment_status: $Enums.billing_payment_status | null
    }, ExtArgs["result"]["billing"]>
    composites: {}
  }

  type billingGetPayload<S extends boolean | null | undefined | billingDefaultArgs> = $Result.GetResult<Prisma.$billingPayload, S>

  type billingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<billingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillingCountAggregateInputType | true
    }

  export interface billingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['billing'], meta: { name: 'billing' } }
    /**
     * Find zero or one Billing that matches the filter.
     * @param {billingFindUniqueArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends billingFindUniqueArgs>(args: SelectSubset<T, billingFindUniqueArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Billing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {billingFindUniqueOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends billingFindUniqueOrThrowArgs>(args: SelectSubset<T, billingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Billing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingFindFirstArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends billingFindFirstArgs>(args?: SelectSubset<T, billingFindFirstArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Billing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingFindFirstOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends billingFindFirstOrThrowArgs>(args?: SelectSubset<T, billingFindFirstOrThrowArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billings
     * const billings = await prisma.billing.findMany()
     * 
     * // Get first 10 Billings
     * const billings = await prisma.billing.findMany({ take: 10 })
     * 
     * // Only select the `billing_id`
     * const billingWithBilling_idOnly = await prisma.billing.findMany({ select: { billing_id: true } })
     * 
     */
    findMany<T extends billingFindManyArgs>(args?: SelectSubset<T, billingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Billing.
     * @param {billingCreateArgs} args - Arguments to create a Billing.
     * @example
     * // Create one Billing
     * const Billing = await prisma.billing.create({
     *   data: {
     *     // ... data to create a Billing
     *   }
     * })
     * 
     */
    create<T extends billingCreateArgs>(args: SelectSubset<T, billingCreateArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Billings.
     * @param {billingCreateManyArgs} args - Arguments to create many Billings.
     * @example
     * // Create many Billings
     * const billing = await prisma.billing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends billingCreateManyArgs>(args?: SelectSubset<T, billingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Billing.
     * @param {billingDeleteArgs} args - Arguments to delete one Billing.
     * @example
     * // Delete one Billing
     * const Billing = await prisma.billing.delete({
     *   where: {
     *     // ... filter to delete one Billing
     *   }
     * })
     * 
     */
    delete<T extends billingDeleteArgs>(args: SelectSubset<T, billingDeleteArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Billing.
     * @param {billingUpdateArgs} args - Arguments to update one Billing.
     * @example
     * // Update one Billing
     * const billing = await prisma.billing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends billingUpdateArgs>(args: SelectSubset<T, billingUpdateArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Billings.
     * @param {billingDeleteManyArgs} args - Arguments to filter Billings to delete.
     * @example
     * // Delete a few Billings
     * const { count } = await prisma.billing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends billingDeleteManyArgs>(args?: SelectSubset<T, billingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billings
     * const billing = await prisma.billing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends billingUpdateManyArgs>(args: SelectSubset<T, billingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Billing.
     * @param {billingUpsertArgs} args - Arguments to update or create a Billing.
     * @example
     * // Update or create a Billing
     * const billing = await prisma.billing.upsert({
     *   create: {
     *     // ... data to create a Billing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billing we want to update
     *   }
     * })
     */
    upsert<T extends billingUpsertArgs>(args: SelectSubset<T, billingUpsertArgs<ExtArgs>>): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingCountArgs} args - Arguments to filter Billings to count.
     * @example
     * // Count the number of Billings
     * const count = await prisma.billing.count({
     *   where: {
     *     // ... the filter for the Billings we want to count
     *   }
     * })
    **/
    count<T extends billingCountArgs>(
      args?: Subset<T, billingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingAggregateArgs>(args: Subset<T, BillingAggregateArgs>): Prisma.PrismaPromise<GetBillingAggregateType<T>>

    /**
     * Group by Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends billingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: billingGroupByArgs['orderBy'] }
        : { orderBy?: billingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, billingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the billing model
   */
  readonly fields: billingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for billing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__billingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the billing model
   */ 
  interface billingFieldRefs {
    readonly billing_id: FieldRef<"billing", 'Int'>
    readonly vn: FieldRef<"billing", 'String'>
    readonly queue_no: FieldRef<"billing", 'String'>
    readonly bill_no: FieldRef<"billing", 'String'>
    readonly order_id: FieldRef<"billing", 'String'>
    readonly charge_id: FieldRef<"billing", 'String'>
    readonly total_price: FieldRef<"billing", 'Float'>
    readonly patient_hn: FieldRef<"billing", 'String'>
    readonly patient_name: FieldRef<"billing", 'String'>
    readonly cashier_queue_id: FieldRef<"billing", 'Int'>
    readonly has_webhook_notify: FieldRef<"billing", 'billing_has_webhook_notify'>
    readonly created_at: FieldRef<"billing", 'DateTime'>
    readonly updated_at: FieldRef<"billing", 'DateTime'>
    readonly payment_status: FieldRef<"billing", 'billing_payment_status'>
  }
    

  // Custom InputTypes
  /**
   * billing findUnique
   */
  export type billingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * Filter, which billing to fetch.
     */
    where: billingWhereUniqueInput
  }

  /**
   * billing findUniqueOrThrow
   */
  export type billingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * Filter, which billing to fetch.
     */
    where: billingWhereUniqueInput
  }

  /**
   * billing findFirst
   */
  export type billingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * Filter, which billing to fetch.
     */
    where?: billingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for billings.
     */
    cursor?: billingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of billings.
     */
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * billing findFirstOrThrow
   */
  export type billingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * Filter, which billing to fetch.
     */
    where?: billingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for billings.
     */
    cursor?: billingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of billings.
     */
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * billing findMany
   */
  export type billingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * Filter, which billings to fetch.
     */
    where?: billingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing billings.
     */
    cursor?: billingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` billings.
     */
    skip?: number
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[]
  }

  /**
   * billing create
   */
  export type billingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * The data needed to create a billing.
     */
    data: XOR<billingCreateInput, billingUncheckedCreateInput>
  }

  /**
   * billing createMany
   */
  export type billingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many billings.
     */
    data: billingCreateManyInput | billingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * billing update
   */
  export type billingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * The data needed to update a billing.
     */
    data: XOR<billingUpdateInput, billingUncheckedUpdateInput>
    /**
     * Choose, which billing to update.
     */
    where: billingWhereUniqueInput
  }

  /**
   * billing updateMany
   */
  export type billingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update billings.
     */
    data: XOR<billingUpdateManyMutationInput, billingUncheckedUpdateManyInput>
    /**
     * Filter which billings to update
     */
    where?: billingWhereInput
  }

  /**
   * billing upsert
   */
  export type billingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * The filter to search for the billing to update in case it exists.
     */
    where: billingWhereUniqueInput
    /**
     * In case the billing found by the `where` argument doesn't exist, create a new billing with this data.
     */
    create: XOR<billingCreateInput, billingUncheckedCreateInput>
    /**
     * In case the billing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<billingUpdateInput, billingUncheckedUpdateInput>
  }

  /**
   * billing delete
   */
  export type billingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
    /**
     * Filter which billing to delete.
     */
    where: billingWhereUniqueInput
  }

  /**
   * billing deleteMany
   */
  export type billingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which billings to delete
     */
    where?: billingWhereInput
  }

  /**
   * billing without action
   */
  export type billingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null
  }


  /**
   * Model broadcast_master
   */

  export type AggregateBroadcast_master = {
    _count: Broadcast_masterCountAggregateOutputType | null
    _avg: Broadcast_masterAvgAggregateOutputType | null
    _sum: Broadcast_masterSumAggregateOutputType | null
    _min: Broadcast_masterMinAggregateOutputType | null
    _max: Broadcast_masterMaxAggregateOutputType | null
  }

  export type Broadcast_masterAvgAggregateOutputType = {
    broadcast_master_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Broadcast_masterSumAggregateOutputType = {
    broadcast_master_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Broadcast_masterMinAggregateOutputType = {
    broadcast_master_id: number | null
    message_title: string | null
    message_body: string | null
    date: Date | null
    image: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    link_url: string | null
  }

  export type Broadcast_masterMaxAggregateOutputType = {
    broadcast_master_id: number | null
    message_title: string | null
    message_body: string | null
    date: Date | null
    image: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    link_url: string | null
  }

  export type Broadcast_masterCountAggregateOutputType = {
    broadcast_master_id: number
    message_title: number
    message_body: number
    date: number
    image: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    link_url: number
    _all: number
  }


  export type Broadcast_masterAvgAggregateInputType = {
    broadcast_master_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Broadcast_masterSumAggregateInputType = {
    broadcast_master_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Broadcast_masterMinAggregateInputType = {
    broadcast_master_id?: true
    message_title?: true
    message_body?: true
    date?: true
    image?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    link_url?: true
  }

  export type Broadcast_masterMaxAggregateInputType = {
    broadcast_master_id?: true
    message_title?: true
    message_body?: true
    date?: true
    image?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    link_url?: true
  }

  export type Broadcast_masterCountAggregateInputType = {
    broadcast_master_id?: true
    message_title?: true
    message_body?: true
    date?: true
    image?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    link_url?: true
    _all?: true
  }

  export type Broadcast_masterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which broadcast_master to aggregate.
     */
    where?: broadcast_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_masters to fetch.
     */
    orderBy?: broadcast_masterOrderByWithRelationInput | broadcast_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: broadcast_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned broadcast_masters
    **/
    _count?: true | Broadcast_masterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Broadcast_masterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Broadcast_masterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Broadcast_masterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Broadcast_masterMaxAggregateInputType
  }

  export type GetBroadcast_masterAggregateType<T extends Broadcast_masterAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcast_master]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcast_master[P]>
      : GetScalarType<T[P], AggregateBroadcast_master[P]>
  }




  export type broadcast_masterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: broadcast_masterWhereInput
    orderBy?: broadcast_masterOrderByWithAggregationInput | broadcast_masterOrderByWithAggregationInput[]
    by: Broadcast_masterScalarFieldEnum[] | Broadcast_masterScalarFieldEnum
    having?: broadcast_masterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Broadcast_masterCountAggregateInputType | true
    _avg?: Broadcast_masterAvgAggregateInputType
    _sum?: Broadcast_masterSumAggregateInputType
    _min?: Broadcast_masterMinAggregateInputType
    _max?: Broadcast_masterMaxAggregateInputType
  }

  export type Broadcast_masterGroupByOutputType = {
    broadcast_master_id: number
    message_title: string
    message_body: string
    date: Date
    image: string | null
    created_by: number
    updated_by: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    link_url: string | null
    _count: Broadcast_masterCountAggregateOutputType | null
    _avg: Broadcast_masterAvgAggregateOutputType | null
    _sum: Broadcast_masterSumAggregateOutputType | null
    _min: Broadcast_masterMinAggregateOutputType | null
    _max: Broadcast_masterMaxAggregateOutputType | null
  }

  type GetBroadcast_masterGroupByPayload<T extends broadcast_masterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Broadcast_masterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Broadcast_masterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Broadcast_masterGroupByOutputType[P]>
            : GetScalarType<T[P], Broadcast_masterGroupByOutputType[P]>
        }
      >
    >


  export type broadcast_masterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    broadcast_master_id?: boolean
    message_title?: boolean
    message_body?: boolean
    date?: boolean
    image?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    link_url?: boolean
  }, ExtArgs["result"]["broadcast_master"]>


  export type broadcast_masterSelectScalar = {
    broadcast_master_id?: boolean
    message_title?: boolean
    message_body?: boolean
    date?: boolean
    image?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    link_url?: boolean
  }


  export type $broadcast_masterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "broadcast_master"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      broadcast_master_id: number
      message_title: string
      message_body: string
      date: Date
      image: string | null
      created_by: number
      updated_by: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      link_url: string | null
    }, ExtArgs["result"]["broadcast_master"]>
    composites: {}
  }

  type broadcast_masterGetPayload<S extends boolean | null | undefined | broadcast_masterDefaultArgs> = $Result.GetResult<Prisma.$broadcast_masterPayload, S>

  type broadcast_masterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<broadcast_masterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Broadcast_masterCountAggregateInputType | true
    }

  export interface broadcast_masterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['broadcast_master'], meta: { name: 'broadcast_master' } }
    /**
     * Find zero or one Broadcast_master that matches the filter.
     * @param {broadcast_masterFindUniqueArgs} args - Arguments to find a Broadcast_master
     * @example
     * // Get one Broadcast_master
     * const broadcast_master = await prisma.broadcast_master.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends broadcast_masterFindUniqueArgs>(args: SelectSubset<T, broadcast_masterFindUniqueArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Broadcast_master that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {broadcast_masterFindUniqueOrThrowArgs} args - Arguments to find a Broadcast_master
     * @example
     * // Get one Broadcast_master
     * const broadcast_master = await prisma.broadcast_master.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends broadcast_masterFindUniqueOrThrowArgs>(args: SelectSubset<T, broadcast_masterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Broadcast_master that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_masterFindFirstArgs} args - Arguments to find a Broadcast_master
     * @example
     * // Get one Broadcast_master
     * const broadcast_master = await prisma.broadcast_master.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends broadcast_masterFindFirstArgs>(args?: SelectSubset<T, broadcast_masterFindFirstArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Broadcast_master that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_masterFindFirstOrThrowArgs} args - Arguments to find a Broadcast_master
     * @example
     * // Get one Broadcast_master
     * const broadcast_master = await prisma.broadcast_master.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends broadcast_masterFindFirstOrThrowArgs>(args?: SelectSubset<T, broadcast_masterFindFirstOrThrowArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Broadcast_masters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_masterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Broadcast_masters
     * const broadcast_masters = await prisma.broadcast_master.findMany()
     * 
     * // Get first 10 Broadcast_masters
     * const broadcast_masters = await prisma.broadcast_master.findMany({ take: 10 })
     * 
     * // Only select the `broadcast_master_id`
     * const broadcast_masterWithBroadcast_master_idOnly = await prisma.broadcast_master.findMany({ select: { broadcast_master_id: true } })
     * 
     */
    findMany<T extends broadcast_masterFindManyArgs>(args?: SelectSubset<T, broadcast_masterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Broadcast_master.
     * @param {broadcast_masterCreateArgs} args - Arguments to create a Broadcast_master.
     * @example
     * // Create one Broadcast_master
     * const Broadcast_master = await prisma.broadcast_master.create({
     *   data: {
     *     // ... data to create a Broadcast_master
     *   }
     * })
     * 
     */
    create<T extends broadcast_masterCreateArgs>(args: SelectSubset<T, broadcast_masterCreateArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Broadcast_masters.
     * @param {broadcast_masterCreateManyArgs} args - Arguments to create many Broadcast_masters.
     * @example
     * // Create many Broadcast_masters
     * const broadcast_master = await prisma.broadcast_master.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends broadcast_masterCreateManyArgs>(args?: SelectSubset<T, broadcast_masterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Broadcast_master.
     * @param {broadcast_masterDeleteArgs} args - Arguments to delete one Broadcast_master.
     * @example
     * // Delete one Broadcast_master
     * const Broadcast_master = await prisma.broadcast_master.delete({
     *   where: {
     *     // ... filter to delete one Broadcast_master
     *   }
     * })
     * 
     */
    delete<T extends broadcast_masterDeleteArgs>(args: SelectSubset<T, broadcast_masterDeleteArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Broadcast_master.
     * @param {broadcast_masterUpdateArgs} args - Arguments to update one Broadcast_master.
     * @example
     * // Update one Broadcast_master
     * const broadcast_master = await prisma.broadcast_master.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends broadcast_masterUpdateArgs>(args: SelectSubset<T, broadcast_masterUpdateArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Broadcast_masters.
     * @param {broadcast_masterDeleteManyArgs} args - Arguments to filter Broadcast_masters to delete.
     * @example
     * // Delete a few Broadcast_masters
     * const { count } = await prisma.broadcast_master.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends broadcast_masterDeleteManyArgs>(args?: SelectSubset<T, broadcast_masterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Broadcast_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_masterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Broadcast_masters
     * const broadcast_master = await prisma.broadcast_master.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends broadcast_masterUpdateManyArgs>(args: SelectSubset<T, broadcast_masterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Broadcast_master.
     * @param {broadcast_masterUpsertArgs} args - Arguments to update or create a Broadcast_master.
     * @example
     * // Update or create a Broadcast_master
     * const broadcast_master = await prisma.broadcast_master.upsert({
     *   create: {
     *     // ... data to create a Broadcast_master
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broadcast_master we want to update
     *   }
     * })
     */
    upsert<T extends broadcast_masterUpsertArgs>(args: SelectSubset<T, broadcast_masterUpsertArgs<ExtArgs>>): Prisma__broadcast_masterClient<$Result.GetResult<Prisma.$broadcast_masterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Broadcast_masters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_masterCountArgs} args - Arguments to filter Broadcast_masters to count.
     * @example
     * // Count the number of Broadcast_masters
     * const count = await prisma.broadcast_master.count({
     *   where: {
     *     // ... the filter for the Broadcast_masters we want to count
     *   }
     * })
    **/
    count<T extends broadcast_masterCountArgs>(
      args?: Subset<T, broadcast_masterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Broadcast_masterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Broadcast_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Broadcast_masterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Broadcast_masterAggregateArgs>(args: Subset<T, Broadcast_masterAggregateArgs>): Prisma.PrismaPromise<GetBroadcast_masterAggregateType<T>>

    /**
     * Group by Broadcast_master.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_masterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends broadcast_masterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: broadcast_masterGroupByArgs['orderBy'] }
        : { orderBy?: broadcast_masterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, broadcast_masterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcast_masterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the broadcast_master model
   */
  readonly fields: broadcast_masterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for broadcast_master.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__broadcast_masterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the broadcast_master model
   */ 
  interface broadcast_masterFieldRefs {
    readonly broadcast_master_id: FieldRef<"broadcast_master", 'Int'>
    readonly message_title: FieldRef<"broadcast_master", 'String'>
    readonly message_body: FieldRef<"broadcast_master", 'String'>
    readonly date: FieldRef<"broadcast_master", 'DateTime'>
    readonly image: FieldRef<"broadcast_master", 'String'>
    readonly created_by: FieldRef<"broadcast_master", 'Int'>
    readonly updated_by: FieldRef<"broadcast_master", 'Int'>
    readonly created_at: FieldRef<"broadcast_master", 'DateTime'>
    readonly updated_at: FieldRef<"broadcast_master", 'DateTime'>
    readonly deleted_at: FieldRef<"broadcast_master", 'DateTime'>
    readonly link_url: FieldRef<"broadcast_master", 'String'>
  }
    

  // Custom InputTypes
  /**
   * broadcast_master findUnique
   */
  export type broadcast_masterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master to fetch.
     */
    where: broadcast_masterWhereUniqueInput
  }

  /**
   * broadcast_master findUniqueOrThrow
   */
  export type broadcast_masterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master to fetch.
     */
    where: broadcast_masterWhereUniqueInput
  }

  /**
   * broadcast_master findFirst
   */
  export type broadcast_masterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master to fetch.
     */
    where?: broadcast_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_masters to fetch.
     */
    orderBy?: broadcast_masterOrderByWithRelationInput | broadcast_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for broadcast_masters.
     */
    cursor?: broadcast_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of broadcast_masters.
     */
    distinct?: Broadcast_masterScalarFieldEnum | Broadcast_masterScalarFieldEnum[]
  }

  /**
   * broadcast_master findFirstOrThrow
   */
  export type broadcast_masterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master to fetch.
     */
    where?: broadcast_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_masters to fetch.
     */
    orderBy?: broadcast_masterOrderByWithRelationInput | broadcast_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for broadcast_masters.
     */
    cursor?: broadcast_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_masters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of broadcast_masters.
     */
    distinct?: Broadcast_masterScalarFieldEnum | Broadcast_masterScalarFieldEnum[]
  }

  /**
   * broadcast_master findMany
   */
  export type broadcast_masterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_masters to fetch.
     */
    where?: broadcast_masterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_masters to fetch.
     */
    orderBy?: broadcast_masterOrderByWithRelationInput | broadcast_masterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing broadcast_masters.
     */
    cursor?: broadcast_masterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_masters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_masters.
     */
    skip?: number
    distinct?: Broadcast_masterScalarFieldEnum | Broadcast_masterScalarFieldEnum[]
  }

  /**
   * broadcast_master create
   */
  export type broadcast_masterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * The data needed to create a broadcast_master.
     */
    data: XOR<broadcast_masterCreateInput, broadcast_masterUncheckedCreateInput>
  }

  /**
   * broadcast_master createMany
   */
  export type broadcast_masterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many broadcast_masters.
     */
    data: broadcast_masterCreateManyInput | broadcast_masterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * broadcast_master update
   */
  export type broadcast_masterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * The data needed to update a broadcast_master.
     */
    data: XOR<broadcast_masterUpdateInput, broadcast_masterUncheckedUpdateInput>
    /**
     * Choose, which broadcast_master to update.
     */
    where: broadcast_masterWhereUniqueInput
  }

  /**
   * broadcast_master updateMany
   */
  export type broadcast_masterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update broadcast_masters.
     */
    data: XOR<broadcast_masterUpdateManyMutationInput, broadcast_masterUncheckedUpdateManyInput>
    /**
     * Filter which broadcast_masters to update
     */
    where?: broadcast_masterWhereInput
  }

  /**
   * broadcast_master upsert
   */
  export type broadcast_masterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * The filter to search for the broadcast_master to update in case it exists.
     */
    where: broadcast_masterWhereUniqueInput
    /**
     * In case the broadcast_master found by the `where` argument doesn't exist, create a new broadcast_master with this data.
     */
    create: XOR<broadcast_masterCreateInput, broadcast_masterUncheckedCreateInput>
    /**
     * In case the broadcast_master was found with the provided `where` argument, update it with this data.
     */
    update: XOR<broadcast_masterUpdateInput, broadcast_masterUncheckedUpdateInput>
  }

  /**
   * broadcast_master delete
   */
  export type broadcast_masterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
    /**
     * Filter which broadcast_master to delete.
     */
    where: broadcast_masterWhereUniqueInput
  }

  /**
   * broadcast_master deleteMany
   */
  export type broadcast_masterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which broadcast_masters to delete
     */
    where?: broadcast_masterWhereInput
  }

  /**
   * broadcast_master without action
   */
  export type broadcast_masterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master
     */
    select?: broadcast_masterSelect<ExtArgs> | null
  }


  /**
   * Model broadcast_master_has_users_mobile
   */

  export type AggregateBroadcast_master_has_users_mobile = {
    _count: Broadcast_master_has_users_mobileCountAggregateOutputType | null
    _avg: Broadcast_master_has_users_mobileAvgAggregateOutputType | null
    _sum: Broadcast_master_has_users_mobileSumAggregateOutputType | null
    _min: Broadcast_master_has_users_mobileMinAggregateOutputType | null
    _max: Broadcast_master_has_users_mobileMaxAggregateOutputType | null
  }

  export type Broadcast_master_has_users_mobileAvgAggregateOutputType = {
    broadcast_master_has_users_mobile_id: number | null
    broadcast_master_id: number | null
    users_mobile_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Broadcast_master_has_users_mobileSumAggregateOutputType = {
    broadcast_master_has_users_mobile_id: number | null
    broadcast_master_id: number | null
    users_mobile_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Broadcast_master_has_users_mobileMinAggregateOutputType = {
    broadcast_master_has_users_mobile_id: number | null
    broadcast_master_id: number | null
    users_mobile_id: number | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Broadcast_master_has_users_mobileMaxAggregateOutputType = {
    broadcast_master_has_users_mobile_id: number | null
    broadcast_master_id: number | null
    users_mobile_id: number | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Broadcast_master_has_users_mobileCountAggregateOutputType = {
    broadcast_master_has_users_mobile_id: number
    broadcast_master_id: number
    users_mobile_id: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Broadcast_master_has_users_mobileAvgAggregateInputType = {
    broadcast_master_has_users_mobile_id?: true
    broadcast_master_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Broadcast_master_has_users_mobileSumAggregateInputType = {
    broadcast_master_has_users_mobile_id?: true
    broadcast_master_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Broadcast_master_has_users_mobileMinAggregateInputType = {
    broadcast_master_has_users_mobile_id?: true
    broadcast_master_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Broadcast_master_has_users_mobileMaxAggregateInputType = {
    broadcast_master_has_users_mobile_id?: true
    broadcast_master_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Broadcast_master_has_users_mobileCountAggregateInputType = {
    broadcast_master_has_users_mobile_id?: true
    broadcast_master_id?: true
    users_mobile_id?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Broadcast_master_has_users_mobileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which broadcast_master_has_users_mobile to aggregate.
     */
    where?: broadcast_master_has_users_mobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_master_has_users_mobiles to fetch.
     */
    orderBy?: broadcast_master_has_users_mobileOrderByWithRelationInput | broadcast_master_has_users_mobileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: broadcast_master_has_users_mobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_master_has_users_mobiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_master_has_users_mobiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned broadcast_master_has_users_mobiles
    **/
    _count?: true | Broadcast_master_has_users_mobileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Broadcast_master_has_users_mobileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Broadcast_master_has_users_mobileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Broadcast_master_has_users_mobileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Broadcast_master_has_users_mobileMaxAggregateInputType
  }

  export type GetBroadcast_master_has_users_mobileAggregateType<T extends Broadcast_master_has_users_mobileAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcast_master_has_users_mobile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcast_master_has_users_mobile[P]>
      : GetScalarType<T[P], AggregateBroadcast_master_has_users_mobile[P]>
  }




  export type broadcast_master_has_users_mobileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: broadcast_master_has_users_mobileWhereInput
    orderBy?: broadcast_master_has_users_mobileOrderByWithAggregationInput | broadcast_master_has_users_mobileOrderByWithAggregationInput[]
    by: Broadcast_master_has_users_mobileScalarFieldEnum[] | Broadcast_master_has_users_mobileScalarFieldEnum
    having?: broadcast_master_has_users_mobileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Broadcast_master_has_users_mobileCountAggregateInputType | true
    _avg?: Broadcast_master_has_users_mobileAvgAggregateInputType
    _sum?: Broadcast_master_has_users_mobileSumAggregateInputType
    _min?: Broadcast_master_has_users_mobileMinAggregateInputType
    _max?: Broadcast_master_has_users_mobileMaxAggregateInputType
  }

  export type Broadcast_master_has_users_mobileGroupByOutputType = {
    broadcast_master_has_users_mobile_id: number
    broadcast_master_id: number
    users_mobile_id: number
    created_by: number
    updated_by: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Broadcast_master_has_users_mobileCountAggregateOutputType | null
    _avg: Broadcast_master_has_users_mobileAvgAggregateOutputType | null
    _sum: Broadcast_master_has_users_mobileSumAggregateOutputType | null
    _min: Broadcast_master_has_users_mobileMinAggregateOutputType | null
    _max: Broadcast_master_has_users_mobileMaxAggregateOutputType | null
  }

  type GetBroadcast_master_has_users_mobileGroupByPayload<T extends broadcast_master_has_users_mobileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Broadcast_master_has_users_mobileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Broadcast_master_has_users_mobileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Broadcast_master_has_users_mobileGroupByOutputType[P]>
            : GetScalarType<T[P], Broadcast_master_has_users_mobileGroupByOutputType[P]>
        }
      >
    >


  export type broadcast_master_has_users_mobileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    broadcast_master_has_users_mobile_id?: boolean
    broadcast_master_id?: boolean
    users_mobile_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["broadcast_master_has_users_mobile"]>


  export type broadcast_master_has_users_mobileSelectScalar = {
    broadcast_master_has_users_mobile_id?: boolean
    broadcast_master_id?: boolean
    users_mobile_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $broadcast_master_has_users_mobilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "broadcast_master_has_users_mobile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      broadcast_master_has_users_mobile_id: number
      broadcast_master_id: number
      users_mobile_id: number
      created_by: number
      updated_by: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["broadcast_master_has_users_mobile"]>
    composites: {}
  }

  type broadcast_master_has_users_mobileGetPayload<S extends boolean | null | undefined | broadcast_master_has_users_mobileDefaultArgs> = $Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload, S>

  type broadcast_master_has_users_mobileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<broadcast_master_has_users_mobileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Broadcast_master_has_users_mobileCountAggregateInputType | true
    }

  export interface broadcast_master_has_users_mobileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['broadcast_master_has_users_mobile'], meta: { name: 'broadcast_master_has_users_mobile' } }
    /**
     * Find zero or one Broadcast_master_has_users_mobile that matches the filter.
     * @param {broadcast_master_has_users_mobileFindUniqueArgs} args - Arguments to find a Broadcast_master_has_users_mobile
     * @example
     * // Get one Broadcast_master_has_users_mobile
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends broadcast_master_has_users_mobileFindUniqueArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileFindUniqueArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Broadcast_master_has_users_mobile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {broadcast_master_has_users_mobileFindUniqueOrThrowArgs} args - Arguments to find a Broadcast_master_has_users_mobile
     * @example
     * // Get one Broadcast_master_has_users_mobile
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends broadcast_master_has_users_mobileFindUniqueOrThrowArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Broadcast_master_has_users_mobile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_master_has_users_mobileFindFirstArgs} args - Arguments to find a Broadcast_master_has_users_mobile
     * @example
     * // Get one Broadcast_master_has_users_mobile
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends broadcast_master_has_users_mobileFindFirstArgs>(args?: SelectSubset<T, broadcast_master_has_users_mobileFindFirstArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Broadcast_master_has_users_mobile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_master_has_users_mobileFindFirstOrThrowArgs} args - Arguments to find a Broadcast_master_has_users_mobile
     * @example
     * // Get one Broadcast_master_has_users_mobile
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends broadcast_master_has_users_mobileFindFirstOrThrowArgs>(args?: SelectSubset<T, broadcast_master_has_users_mobileFindFirstOrThrowArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Broadcast_master_has_users_mobiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_master_has_users_mobileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Broadcast_master_has_users_mobiles
     * const broadcast_master_has_users_mobiles = await prisma.broadcast_master_has_users_mobile.findMany()
     * 
     * // Get first 10 Broadcast_master_has_users_mobiles
     * const broadcast_master_has_users_mobiles = await prisma.broadcast_master_has_users_mobile.findMany({ take: 10 })
     * 
     * // Only select the `broadcast_master_has_users_mobile_id`
     * const broadcast_master_has_users_mobileWithBroadcast_master_has_users_mobile_idOnly = await prisma.broadcast_master_has_users_mobile.findMany({ select: { broadcast_master_has_users_mobile_id: true } })
     * 
     */
    findMany<T extends broadcast_master_has_users_mobileFindManyArgs>(args?: SelectSubset<T, broadcast_master_has_users_mobileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Broadcast_master_has_users_mobile.
     * @param {broadcast_master_has_users_mobileCreateArgs} args - Arguments to create a Broadcast_master_has_users_mobile.
     * @example
     * // Create one Broadcast_master_has_users_mobile
     * const Broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.create({
     *   data: {
     *     // ... data to create a Broadcast_master_has_users_mobile
     *   }
     * })
     * 
     */
    create<T extends broadcast_master_has_users_mobileCreateArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileCreateArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Broadcast_master_has_users_mobiles.
     * @param {broadcast_master_has_users_mobileCreateManyArgs} args - Arguments to create many Broadcast_master_has_users_mobiles.
     * @example
     * // Create many Broadcast_master_has_users_mobiles
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends broadcast_master_has_users_mobileCreateManyArgs>(args?: SelectSubset<T, broadcast_master_has_users_mobileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Broadcast_master_has_users_mobile.
     * @param {broadcast_master_has_users_mobileDeleteArgs} args - Arguments to delete one Broadcast_master_has_users_mobile.
     * @example
     * // Delete one Broadcast_master_has_users_mobile
     * const Broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.delete({
     *   where: {
     *     // ... filter to delete one Broadcast_master_has_users_mobile
     *   }
     * })
     * 
     */
    delete<T extends broadcast_master_has_users_mobileDeleteArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileDeleteArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Broadcast_master_has_users_mobile.
     * @param {broadcast_master_has_users_mobileUpdateArgs} args - Arguments to update one Broadcast_master_has_users_mobile.
     * @example
     * // Update one Broadcast_master_has_users_mobile
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends broadcast_master_has_users_mobileUpdateArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileUpdateArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Broadcast_master_has_users_mobiles.
     * @param {broadcast_master_has_users_mobileDeleteManyArgs} args - Arguments to filter Broadcast_master_has_users_mobiles to delete.
     * @example
     * // Delete a few Broadcast_master_has_users_mobiles
     * const { count } = await prisma.broadcast_master_has_users_mobile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends broadcast_master_has_users_mobileDeleteManyArgs>(args?: SelectSubset<T, broadcast_master_has_users_mobileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Broadcast_master_has_users_mobiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_master_has_users_mobileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Broadcast_master_has_users_mobiles
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends broadcast_master_has_users_mobileUpdateManyArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Broadcast_master_has_users_mobile.
     * @param {broadcast_master_has_users_mobileUpsertArgs} args - Arguments to update or create a Broadcast_master_has_users_mobile.
     * @example
     * // Update or create a Broadcast_master_has_users_mobile
     * const broadcast_master_has_users_mobile = await prisma.broadcast_master_has_users_mobile.upsert({
     *   create: {
     *     // ... data to create a Broadcast_master_has_users_mobile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broadcast_master_has_users_mobile we want to update
     *   }
     * })
     */
    upsert<T extends broadcast_master_has_users_mobileUpsertArgs>(args: SelectSubset<T, broadcast_master_has_users_mobileUpsertArgs<ExtArgs>>): Prisma__broadcast_master_has_users_mobileClient<$Result.GetResult<Prisma.$broadcast_master_has_users_mobilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Broadcast_master_has_users_mobiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_master_has_users_mobileCountArgs} args - Arguments to filter Broadcast_master_has_users_mobiles to count.
     * @example
     * // Count the number of Broadcast_master_has_users_mobiles
     * const count = await prisma.broadcast_master_has_users_mobile.count({
     *   where: {
     *     // ... the filter for the Broadcast_master_has_users_mobiles we want to count
     *   }
     * })
    **/
    count<T extends broadcast_master_has_users_mobileCountArgs>(
      args?: Subset<T, broadcast_master_has_users_mobileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Broadcast_master_has_users_mobileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Broadcast_master_has_users_mobile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Broadcast_master_has_users_mobileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Broadcast_master_has_users_mobileAggregateArgs>(args: Subset<T, Broadcast_master_has_users_mobileAggregateArgs>): Prisma.PrismaPromise<GetBroadcast_master_has_users_mobileAggregateType<T>>

    /**
     * Group by Broadcast_master_has_users_mobile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broadcast_master_has_users_mobileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends broadcast_master_has_users_mobileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: broadcast_master_has_users_mobileGroupByArgs['orderBy'] }
        : { orderBy?: broadcast_master_has_users_mobileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, broadcast_master_has_users_mobileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcast_master_has_users_mobileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the broadcast_master_has_users_mobile model
   */
  readonly fields: broadcast_master_has_users_mobileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for broadcast_master_has_users_mobile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__broadcast_master_has_users_mobileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the broadcast_master_has_users_mobile model
   */ 
  interface broadcast_master_has_users_mobileFieldRefs {
    readonly broadcast_master_has_users_mobile_id: FieldRef<"broadcast_master_has_users_mobile", 'Int'>
    readonly broadcast_master_id: FieldRef<"broadcast_master_has_users_mobile", 'Int'>
    readonly users_mobile_id: FieldRef<"broadcast_master_has_users_mobile", 'Int'>
    readonly created_by: FieldRef<"broadcast_master_has_users_mobile", 'Int'>
    readonly updated_by: FieldRef<"broadcast_master_has_users_mobile", 'Int'>
    readonly created_at: FieldRef<"broadcast_master_has_users_mobile", 'DateTime'>
    readonly updated_at: FieldRef<"broadcast_master_has_users_mobile", 'DateTime'>
    readonly deleted_at: FieldRef<"broadcast_master_has_users_mobile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * broadcast_master_has_users_mobile findUnique
   */
  export type broadcast_master_has_users_mobileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master_has_users_mobile to fetch.
     */
    where: broadcast_master_has_users_mobileWhereUniqueInput
  }

  /**
   * broadcast_master_has_users_mobile findUniqueOrThrow
   */
  export type broadcast_master_has_users_mobileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master_has_users_mobile to fetch.
     */
    where: broadcast_master_has_users_mobileWhereUniqueInput
  }

  /**
   * broadcast_master_has_users_mobile findFirst
   */
  export type broadcast_master_has_users_mobileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master_has_users_mobile to fetch.
     */
    where?: broadcast_master_has_users_mobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_master_has_users_mobiles to fetch.
     */
    orderBy?: broadcast_master_has_users_mobileOrderByWithRelationInput | broadcast_master_has_users_mobileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for broadcast_master_has_users_mobiles.
     */
    cursor?: broadcast_master_has_users_mobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_master_has_users_mobiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_master_has_users_mobiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of broadcast_master_has_users_mobiles.
     */
    distinct?: Broadcast_master_has_users_mobileScalarFieldEnum | Broadcast_master_has_users_mobileScalarFieldEnum[]
  }

  /**
   * broadcast_master_has_users_mobile findFirstOrThrow
   */
  export type broadcast_master_has_users_mobileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master_has_users_mobile to fetch.
     */
    where?: broadcast_master_has_users_mobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_master_has_users_mobiles to fetch.
     */
    orderBy?: broadcast_master_has_users_mobileOrderByWithRelationInput | broadcast_master_has_users_mobileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for broadcast_master_has_users_mobiles.
     */
    cursor?: broadcast_master_has_users_mobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_master_has_users_mobiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_master_has_users_mobiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of broadcast_master_has_users_mobiles.
     */
    distinct?: Broadcast_master_has_users_mobileScalarFieldEnum | Broadcast_master_has_users_mobileScalarFieldEnum[]
  }

  /**
   * broadcast_master_has_users_mobile findMany
   */
  export type broadcast_master_has_users_mobileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * Filter, which broadcast_master_has_users_mobiles to fetch.
     */
    where?: broadcast_master_has_users_mobileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broadcast_master_has_users_mobiles to fetch.
     */
    orderBy?: broadcast_master_has_users_mobileOrderByWithRelationInput | broadcast_master_has_users_mobileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing broadcast_master_has_users_mobiles.
     */
    cursor?: broadcast_master_has_users_mobileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broadcast_master_has_users_mobiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broadcast_master_has_users_mobiles.
     */
    skip?: number
    distinct?: Broadcast_master_has_users_mobileScalarFieldEnum | Broadcast_master_has_users_mobileScalarFieldEnum[]
  }

  /**
   * broadcast_master_has_users_mobile create
   */
  export type broadcast_master_has_users_mobileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * The data needed to create a broadcast_master_has_users_mobile.
     */
    data: XOR<broadcast_master_has_users_mobileCreateInput, broadcast_master_has_users_mobileUncheckedCreateInput>
  }

  /**
   * broadcast_master_has_users_mobile createMany
   */
  export type broadcast_master_has_users_mobileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many broadcast_master_has_users_mobiles.
     */
    data: broadcast_master_has_users_mobileCreateManyInput | broadcast_master_has_users_mobileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * broadcast_master_has_users_mobile update
   */
  export type broadcast_master_has_users_mobileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * The data needed to update a broadcast_master_has_users_mobile.
     */
    data: XOR<broadcast_master_has_users_mobileUpdateInput, broadcast_master_has_users_mobileUncheckedUpdateInput>
    /**
     * Choose, which broadcast_master_has_users_mobile to update.
     */
    where: broadcast_master_has_users_mobileWhereUniqueInput
  }

  /**
   * broadcast_master_has_users_mobile updateMany
   */
  export type broadcast_master_has_users_mobileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update broadcast_master_has_users_mobiles.
     */
    data: XOR<broadcast_master_has_users_mobileUpdateManyMutationInput, broadcast_master_has_users_mobileUncheckedUpdateManyInput>
    /**
     * Filter which broadcast_master_has_users_mobiles to update
     */
    where?: broadcast_master_has_users_mobileWhereInput
  }

  /**
   * broadcast_master_has_users_mobile upsert
   */
  export type broadcast_master_has_users_mobileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * The filter to search for the broadcast_master_has_users_mobile to update in case it exists.
     */
    where: broadcast_master_has_users_mobileWhereUniqueInput
    /**
     * In case the broadcast_master_has_users_mobile found by the `where` argument doesn't exist, create a new broadcast_master_has_users_mobile with this data.
     */
    create: XOR<broadcast_master_has_users_mobileCreateInput, broadcast_master_has_users_mobileUncheckedCreateInput>
    /**
     * In case the broadcast_master_has_users_mobile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<broadcast_master_has_users_mobileUpdateInput, broadcast_master_has_users_mobileUncheckedUpdateInput>
  }

  /**
   * broadcast_master_has_users_mobile delete
   */
  export type broadcast_master_has_users_mobileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
    /**
     * Filter which broadcast_master_has_users_mobile to delete.
     */
    where: broadcast_master_has_users_mobileWhereUniqueInput
  }

  /**
   * broadcast_master_has_users_mobile deleteMany
   */
  export type broadcast_master_has_users_mobileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which broadcast_master_has_users_mobiles to delete
     */
    where?: broadcast_master_has_users_mobileWhereInput
  }

  /**
   * broadcast_master_has_users_mobile without action
   */
  export type broadcast_master_has_users_mobileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broadcast_master_has_users_mobile
     */
    select?: broadcast_master_has_users_mobileSelect<ExtArgs> | null
  }


  /**
   * Model building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    building_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type BuildingSumAggregateOutputType = {
    building_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type BuildingMinAggregateOutputType = {
    building_id: number | null
    name: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BuildingMaxAggregateOutputType = {
    building_id: number | null
    name: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BuildingCountAggregateOutputType = {
    building_id: number
    name: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    building_id?: true
    created_by?: true
    updated_by?: true
  }

  export type BuildingSumAggregateInputType = {
    building_id?: true
    created_by?: true
    updated_by?: true
  }

  export type BuildingMinAggregateInputType = {
    building_id?: true
    name?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BuildingMaxAggregateInputType = {
    building_id?: true
    name?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BuildingCountAggregateInputType = {
    building_id?: true
    name?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which building to aggregate.
     */
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingOrderByWithRelationInput | buildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type buildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: buildingWhereInput
    orderBy?: buildingOrderByWithAggregationInput | buildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: buildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    building_id: number
    name: string
    created_by: number
    updated_by: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends buildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type buildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    building_id?: boolean
    name?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["building"]>


  export type buildingSelectScalar = {
    building_id?: boolean
    name?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $buildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "building"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      building_id: number
      name: string
      created_by: number
      updated_by: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type buildingGetPayload<S extends boolean | null | undefined | buildingDefaultArgs> = $Result.GetResult<Prisma.$buildingPayload, S>

  type buildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<buildingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface buildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['building'], meta: { name: 'building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {buildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends buildingFindUniqueArgs>(args: SelectSubset<T, buildingFindUniqueArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {buildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends buildingFindUniqueOrThrowArgs>(args: SelectSubset<T, buildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends buildingFindFirstArgs>(args?: SelectSubset<T, buildingFindFirstArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends buildingFindFirstOrThrowArgs>(args?: SelectSubset<T, buildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `building_id`
     * const buildingWithBuilding_idOnly = await prisma.building.findMany({ select: { building_id: true } })
     * 
     */
    findMany<T extends buildingFindManyArgs>(args?: SelectSubset<T, buildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Building.
     * @param {buildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends buildingCreateArgs>(args: SelectSubset<T, buildingCreateArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Buildings.
     * @param {buildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends buildingCreateManyArgs>(args?: SelectSubset<T, buildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Building.
     * @param {buildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends buildingDeleteArgs>(args: SelectSubset<T, buildingDeleteArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Building.
     * @param {buildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends buildingUpdateArgs>(args: SelectSubset<T, buildingUpdateArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Buildings.
     * @param {buildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends buildingDeleteManyArgs>(args?: SelectSubset<T, buildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends buildingUpdateManyArgs>(args: SelectSubset<T, buildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Building.
     * @param {buildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends buildingUpsertArgs>(args: SelectSubset<T, buildingUpsertArgs<ExtArgs>>): Prisma__buildingClient<$Result.GetResult<Prisma.$buildingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends buildingCountArgs>(
      args?: Subset<T, buildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buildingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends buildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: buildingGroupByArgs['orderBy'] }
        : { orderBy?: buildingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, buildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the building model
   */
  readonly fields: buildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__buildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the building model
   */ 
  interface buildingFieldRefs {
    readonly building_id: FieldRef<"building", 'Int'>
    readonly name: FieldRef<"building", 'String'>
    readonly created_by: FieldRef<"building", 'Int'>
    readonly updated_by: FieldRef<"building", 'Int'>
    readonly created_at: FieldRef<"building", 'DateTime'>
    readonly updated_at: FieldRef<"building", 'DateTime'>
    readonly deleted_at: FieldRef<"building", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * building findUnique
   */
  export type buildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * Filter, which building to fetch.
     */
    where: buildingWhereUniqueInput
  }

  /**
   * building findUniqueOrThrow
   */
  export type buildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * Filter, which building to fetch.
     */
    where: buildingWhereUniqueInput
  }

  /**
   * building findFirst
   */
  export type buildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * Filter, which building to fetch.
     */
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingOrderByWithRelationInput | buildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buildings.
     */
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * building findFirstOrThrow
   */
  export type buildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * Filter, which building to fetch.
     */
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingOrderByWithRelationInput | buildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buildings.
     */
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * building findMany
   */
  export type buildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * Filter, which buildings to fetch.
     */
    where?: buildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buildings to fetch.
     */
    orderBy?: buildingOrderByWithRelationInput | buildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buildings.
     */
    cursor?: buildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * building create
   */
  export type buildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * The data needed to create a building.
     */
    data: XOR<buildingCreateInput, buildingUncheckedCreateInput>
  }

  /**
   * building createMany
   */
  export type buildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buildings.
     */
    data: buildingCreateManyInput | buildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * building update
   */
  export type buildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * The data needed to update a building.
     */
    data: XOR<buildingUpdateInput, buildingUncheckedUpdateInput>
    /**
     * Choose, which building to update.
     */
    where: buildingWhereUniqueInput
  }

  /**
   * building updateMany
   */
  export type buildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buildings.
     */
    data: XOR<buildingUpdateManyMutationInput, buildingUncheckedUpdateManyInput>
    /**
     * Filter which buildings to update
     */
    where?: buildingWhereInput
  }

  /**
   * building upsert
   */
  export type buildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * The filter to search for the building to update in case it exists.
     */
    where: buildingWhereUniqueInput
    /**
     * In case the building found by the `where` argument doesn't exist, create a new building with this data.
     */
    create: XOR<buildingCreateInput, buildingUncheckedCreateInput>
    /**
     * In case the building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<buildingUpdateInput, buildingUncheckedUpdateInput>
  }

  /**
   * building delete
   */
  export type buildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
    /**
     * Filter which building to delete.
     */
    where: buildingWhereUniqueInput
  }

  /**
   * building deleteMany
   */
  export type buildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buildings to delete
     */
    where?: buildingWhereInput
  }

  /**
   * building without action
   */
  export type buildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the building
     */
    select?: buildingSelect<ExtArgs> | null
  }


  /**
   * Model cashier_queue
   */

  export type AggregateCashier_queue = {
    _count: Cashier_queueCountAggregateOutputType | null
    _avg: Cashier_queueAvgAggregateOutputType | null
    _sum: Cashier_queueSumAggregateOutputType | null
    _min: Cashier_queueMinAggregateOutputType | null
    _max: Cashier_queueMaxAggregateOutputType | null
  }

  export type Cashier_queueAvgAggregateOutputType = {
    cashier_queue_id: number | null
    medicine_room: number | null
    cashier_room: number | null
  }

  export type Cashier_queueSumAggregateOutputType = {
    cashier_queue_id: number | null
    medicine_room: number | null
    cashier_room: number | null
  }

  export type Cashier_queueMinAggregateOutputType = {
    cashier_queue_id: number | null
    patient_hn: string | null
    patient_name: string | null
    vn: string | null
    queue_no: string | null
    patient_location_code: string | null
    patient_location_name: string | null
    discharge_location_code: string | null
    discharge_location_name: string | null
    discharge_building: string | null
    meddischarge_date: string | null
    meddischarge_time: string | null
    accepted_date: string | null
    accepted_time: string | null
    collected_date: string | null
    collected_time: string | null
    is_cashier: $Enums.cashier_queue_is_cashier | null
    medicine_status: $Enums.cashier_queue_medicine_status | null
    medicine_room: number | null
    cashier_status: $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile: $Enums.cashier_queue_cashier_status_mobile | null
    payment_type: $Enums.cashier_queue_payment_type | null
    cashier_room: number | null
    remark: string | null
    method_status: $Enums.cashier_queue_method_status | null
    created_at: Date | null
    updated_at: Date | null
    lang: $Enums.cashier_queue_lang | null
  }

  export type Cashier_queueMaxAggregateOutputType = {
    cashier_queue_id: number | null
    patient_hn: string | null
    patient_name: string | null
    vn: string | null
    queue_no: string | null
    patient_location_code: string | null
    patient_location_name: string | null
    discharge_location_code: string | null
    discharge_location_name: string | null
    discharge_building: string | null
    meddischarge_date: string | null
    meddischarge_time: string | null
    accepted_date: string | null
    accepted_time: string | null
    collected_date: string | null
    collected_time: string | null
    is_cashier: $Enums.cashier_queue_is_cashier | null
    medicine_status: $Enums.cashier_queue_medicine_status | null
    medicine_room: number | null
    cashier_status: $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile: $Enums.cashier_queue_cashier_status_mobile | null
    payment_type: $Enums.cashier_queue_payment_type | null
    cashier_room: number | null
    remark: string | null
    method_status: $Enums.cashier_queue_method_status | null
    created_at: Date | null
    updated_at: Date | null
    lang: $Enums.cashier_queue_lang | null
  }

  export type Cashier_queueCountAggregateOutputType = {
    cashier_queue_id: number
    patient_hn: number
    patient_name: number
    vn: number
    queue_no: number
    patient_location_code: number
    patient_location_name: number
    discharge_location_code: number
    discharge_location_name: number
    discharge_building: number
    meddischarge_date: number
    meddischarge_time: number
    accepted_date: number
    accepted_time: number
    collected_date: number
    collected_time: number
    is_cashier: number
    medicine_status: number
    medicine_room: number
    cashier_status: number
    cashier_status_mobile: number
    payment_type: number
    cashier_room: number
    remark: number
    method_status: number
    created_at: number
    updated_at: number
    lang: number
    _all: number
  }


  export type Cashier_queueAvgAggregateInputType = {
    cashier_queue_id?: true
    medicine_room?: true
    cashier_room?: true
  }

  export type Cashier_queueSumAggregateInputType = {
    cashier_queue_id?: true
    medicine_room?: true
    cashier_room?: true
  }

  export type Cashier_queueMinAggregateInputType = {
    cashier_queue_id?: true
    patient_hn?: true
    patient_name?: true
    vn?: true
    queue_no?: true
    patient_location_code?: true
    patient_location_name?: true
    discharge_location_code?: true
    discharge_location_name?: true
    discharge_building?: true
    meddischarge_date?: true
    meddischarge_time?: true
    accepted_date?: true
    accepted_time?: true
    collected_date?: true
    collected_time?: true
    is_cashier?: true
    medicine_status?: true
    medicine_room?: true
    cashier_status?: true
    cashier_status_mobile?: true
    payment_type?: true
    cashier_room?: true
    remark?: true
    method_status?: true
    created_at?: true
    updated_at?: true
    lang?: true
  }

  export type Cashier_queueMaxAggregateInputType = {
    cashier_queue_id?: true
    patient_hn?: true
    patient_name?: true
    vn?: true
    queue_no?: true
    patient_location_code?: true
    patient_location_name?: true
    discharge_location_code?: true
    discharge_location_name?: true
    discharge_building?: true
    meddischarge_date?: true
    meddischarge_time?: true
    accepted_date?: true
    accepted_time?: true
    collected_date?: true
    collected_time?: true
    is_cashier?: true
    medicine_status?: true
    medicine_room?: true
    cashier_status?: true
    cashier_status_mobile?: true
    payment_type?: true
    cashier_room?: true
    remark?: true
    method_status?: true
    created_at?: true
    updated_at?: true
    lang?: true
  }

  export type Cashier_queueCountAggregateInputType = {
    cashier_queue_id?: true
    patient_hn?: true
    patient_name?: true
    vn?: true
    queue_no?: true
    patient_location_code?: true
    patient_location_name?: true
    discharge_location_code?: true
    discharge_location_name?: true
    discharge_building?: true
    meddischarge_date?: true
    meddischarge_time?: true
    accepted_date?: true
    accepted_time?: true
    collected_date?: true
    collected_time?: true
    is_cashier?: true
    medicine_status?: true
    medicine_room?: true
    cashier_status?: true
    cashier_status_mobile?: true
    payment_type?: true
    cashier_room?: true
    remark?: true
    method_status?: true
    created_at?: true
    updated_at?: true
    lang?: true
    _all?: true
  }

  export type Cashier_queueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cashier_queue to aggregate.
     */
    where?: cashier_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashier_queues to fetch.
     */
    orderBy?: cashier_queueOrderByWithRelationInput | cashier_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cashier_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashier_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashier_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cashier_queues
    **/
    _count?: true | Cashier_queueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cashier_queueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cashier_queueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cashier_queueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cashier_queueMaxAggregateInputType
  }

  export type GetCashier_queueAggregateType<T extends Cashier_queueAggregateArgs> = {
        [P in keyof T & keyof AggregateCashier_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashier_queue[P]>
      : GetScalarType<T[P], AggregateCashier_queue[P]>
  }




  export type cashier_queueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cashier_queueWhereInput
    orderBy?: cashier_queueOrderByWithAggregationInput | cashier_queueOrderByWithAggregationInput[]
    by: Cashier_queueScalarFieldEnum[] | Cashier_queueScalarFieldEnum
    having?: cashier_queueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cashier_queueCountAggregateInputType | true
    _avg?: Cashier_queueAvgAggregateInputType
    _sum?: Cashier_queueSumAggregateInputType
    _min?: Cashier_queueMinAggregateInputType
    _max?: Cashier_queueMaxAggregateInputType
  }

  export type Cashier_queueGroupByOutputType = {
    cashier_queue_id: number
    patient_hn: string
    patient_name: string
    vn: string
    queue_no: string
    patient_location_code: string
    patient_location_name: string
    discharge_location_code: string
    discharge_location_name: string
    discharge_building: string
    meddischarge_date: string
    meddischarge_time: string
    accepted_date: string
    accepted_time: string
    collected_date: string
    collected_time: string
    is_cashier: $Enums.cashier_queue_is_cashier
    medicine_status: $Enums.cashier_queue_medicine_status | null
    medicine_room: number | null
    cashier_status: $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile: $Enums.cashier_queue_cashier_status_mobile | null
    payment_type: $Enums.cashier_queue_payment_type | null
    cashier_room: number | null
    remark: string | null
    method_status: $Enums.cashier_queue_method_status | null
    created_at: Date
    updated_at: Date
    lang: $Enums.cashier_queue_lang | null
    _count: Cashier_queueCountAggregateOutputType | null
    _avg: Cashier_queueAvgAggregateOutputType | null
    _sum: Cashier_queueSumAggregateOutputType | null
    _min: Cashier_queueMinAggregateOutputType | null
    _max: Cashier_queueMaxAggregateOutputType | null
  }

  type GetCashier_queueGroupByPayload<T extends cashier_queueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cashier_queueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cashier_queueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cashier_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Cashier_queueGroupByOutputType[P]>
        }
      >
    >


  export type cashier_queueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cashier_queue_id?: boolean
    patient_hn?: boolean
    patient_name?: boolean
    vn?: boolean
    queue_no?: boolean
    patient_location_code?: boolean
    patient_location_name?: boolean
    discharge_location_code?: boolean
    discharge_location_name?: boolean
    discharge_building?: boolean
    meddischarge_date?: boolean
    meddischarge_time?: boolean
    accepted_date?: boolean
    accepted_time?: boolean
    collected_date?: boolean
    collected_time?: boolean
    is_cashier?: boolean
    medicine_status?: boolean
    medicine_room?: boolean
    cashier_status?: boolean
    cashier_status_mobile?: boolean
    payment_type?: boolean
    cashier_room?: boolean
    remark?: boolean
    method_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    lang?: boolean
  }, ExtArgs["result"]["cashier_queue"]>


  export type cashier_queueSelectScalar = {
    cashier_queue_id?: boolean
    patient_hn?: boolean
    patient_name?: boolean
    vn?: boolean
    queue_no?: boolean
    patient_location_code?: boolean
    patient_location_name?: boolean
    discharge_location_code?: boolean
    discharge_location_name?: boolean
    discharge_building?: boolean
    meddischarge_date?: boolean
    meddischarge_time?: boolean
    accepted_date?: boolean
    accepted_time?: boolean
    collected_date?: boolean
    collected_time?: boolean
    is_cashier?: boolean
    medicine_status?: boolean
    medicine_room?: boolean
    cashier_status?: boolean
    cashier_status_mobile?: boolean
    payment_type?: boolean
    cashier_room?: boolean
    remark?: boolean
    method_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    lang?: boolean
  }


  export type $cashier_queuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cashier_queue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cashier_queue_id: number
      patient_hn: string
      patient_name: string
      vn: string
      queue_no: string
      patient_location_code: string
      patient_location_name: string
      discharge_location_code: string
      discharge_location_name: string
      discharge_building: string
      meddischarge_date: string
      meddischarge_time: string
      accepted_date: string
      accepted_time: string
      collected_date: string
      collected_time: string
      is_cashier: $Enums.cashier_queue_is_cashier
      medicine_status: $Enums.cashier_queue_medicine_status | null
      medicine_room: number | null
      cashier_status: $Enums.cashier_queue_cashier_status | null
      cashier_status_mobile: $Enums.cashier_queue_cashier_status_mobile | null
      payment_type: $Enums.cashier_queue_payment_type | null
      cashier_room: number | null
      remark: string | null
      method_status: $Enums.cashier_queue_method_status | null
      created_at: Date
      updated_at: Date
      lang: $Enums.cashier_queue_lang | null
    }, ExtArgs["result"]["cashier_queue"]>
    composites: {}
  }

  type cashier_queueGetPayload<S extends boolean | null | undefined | cashier_queueDefaultArgs> = $Result.GetResult<Prisma.$cashier_queuePayload, S>

  type cashier_queueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cashier_queueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Cashier_queueCountAggregateInputType | true
    }

  export interface cashier_queueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cashier_queue'], meta: { name: 'cashier_queue' } }
    /**
     * Find zero or one Cashier_queue that matches the filter.
     * @param {cashier_queueFindUniqueArgs} args - Arguments to find a Cashier_queue
     * @example
     * // Get one Cashier_queue
     * const cashier_queue = await prisma.cashier_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cashier_queueFindUniqueArgs>(args: SelectSubset<T, cashier_queueFindUniqueArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cashier_queue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cashier_queueFindUniqueOrThrowArgs} args - Arguments to find a Cashier_queue
     * @example
     * // Get one Cashier_queue
     * const cashier_queue = await prisma.cashier_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cashier_queueFindUniqueOrThrowArgs>(args: SelectSubset<T, cashier_queueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cashier_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashier_queueFindFirstArgs} args - Arguments to find a Cashier_queue
     * @example
     * // Get one Cashier_queue
     * const cashier_queue = await prisma.cashier_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cashier_queueFindFirstArgs>(args?: SelectSubset<T, cashier_queueFindFirstArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cashier_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashier_queueFindFirstOrThrowArgs} args - Arguments to find a Cashier_queue
     * @example
     * // Get one Cashier_queue
     * const cashier_queue = await prisma.cashier_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cashier_queueFindFirstOrThrowArgs>(args?: SelectSubset<T, cashier_queueFindFirstOrThrowArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cashier_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashier_queueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cashier_queues
     * const cashier_queues = await prisma.cashier_queue.findMany()
     * 
     * // Get first 10 Cashier_queues
     * const cashier_queues = await prisma.cashier_queue.findMany({ take: 10 })
     * 
     * // Only select the `cashier_queue_id`
     * const cashier_queueWithCashier_queue_idOnly = await prisma.cashier_queue.findMany({ select: { cashier_queue_id: true } })
     * 
     */
    findMany<T extends cashier_queueFindManyArgs>(args?: SelectSubset<T, cashier_queueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cashier_queue.
     * @param {cashier_queueCreateArgs} args - Arguments to create a Cashier_queue.
     * @example
     * // Create one Cashier_queue
     * const Cashier_queue = await prisma.cashier_queue.create({
     *   data: {
     *     // ... data to create a Cashier_queue
     *   }
     * })
     * 
     */
    create<T extends cashier_queueCreateArgs>(args: SelectSubset<T, cashier_queueCreateArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cashier_queues.
     * @param {cashier_queueCreateManyArgs} args - Arguments to create many Cashier_queues.
     * @example
     * // Create many Cashier_queues
     * const cashier_queue = await prisma.cashier_queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cashier_queueCreateManyArgs>(args?: SelectSubset<T, cashier_queueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cashier_queue.
     * @param {cashier_queueDeleteArgs} args - Arguments to delete one Cashier_queue.
     * @example
     * // Delete one Cashier_queue
     * const Cashier_queue = await prisma.cashier_queue.delete({
     *   where: {
     *     // ... filter to delete one Cashier_queue
     *   }
     * })
     * 
     */
    delete<T extends cashier_queueDeleteArgs>(args: SelectSubset<T, cashier_queueDeleteArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cashier_queue.
     * @param {cashier_queueUpdateArgs} args - Arguments to update one Cashier_queue.
     * @example
     * // Update one Cashier_queue
     * const cashier_queue = await prisma.cashier_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cashier_queueUpdateArgs>(args: SelectSubset<T, cashier_queueUpdateArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cashier_queues.
     * @param {cashier_queueDeleteManyArgs} args - Arguments to filter Cashier_queues to delete.
     * @example
     * // Delete a few Cashier_queues
     * const { count } = await prisma.cashier_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cashier_queueDeleteManyArgs>(args?: SelectSubset<T, cashier_queueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cashier_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashier_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cashier_queues
     * const cashier_queue = await prisma.cashier_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cashier_queueUpdateManyArgs>(args: SelectSubset<T, cashier_queueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cashier_queue.
     * @param {cashier_queueUpsertArgs} args - Arguments to update or create a Cashier_queue.
     * @example
     * // Update or create a Cashier_queue
     * const cashier_queue = await prisma.cashier_queue.upsert({
     *   create: {
     *     // ... data to create a Cashier_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cashier_queue we want to update
     *   }
     * })
     */
    upsert<T extends cashier_queueUpsertArgs>(args: SelectSubset<T, cashier_queueUpsertArgs<ExtArgs>>): Prisma__cashier_queueClient<$Result.GetResult<Prisma.$cashier_queuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cashier_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashier_queueCountArgs} args - Arguments to filter Cashier_queues to count.
     * @example
     * // Count the number of Cashier_queues
     * const count = await prisma.cashier_queue.count({
     *   where: {
     *     // ... the filter for the Cashier_queues we want to count
     *   }
     * })
    **/
    count<T extends cashier_queueCountArgs>(
      args?: Subset<T, cashier_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cashier_queueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cashier_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cashier_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cashier_queueAggregateArgs>(args: Subset<T, Cashier_queueAggregateArgs>): Prisma.PrismaPromise<GetCashier_queueAggregateType<T>>

    /**
     * Group by Cashier_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashier_queueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cashier_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cashier_queueGroupByArgs['orderBy'] }
        : { orderBy?: cashier_queueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cashier_queueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashier_queueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cashier_queue model
   */
  readonly fields: cashier_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cashier_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cashier_queueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cashier_queue model
   */ 
  interface cashier_queueFieldRefs {
    readonly cashier_queue_id: FieldRef<"cashier_queue", 'Int'>
    readonly patient_hn: FieldRef<"cashier_queue", 'String'>
    readonly patient_name: FieldRef<"cashier_queue", 'String'>
    readonly vn: FieldRef<"cashier_queue", 'String'>
    readonly queue_no: FieldRef<"cashier_queue", 'String'>
    readonly patient_location_code: FieldRef<"cashier_queue", 'String'>
    readonly patient_location_name: FieldRef<"cashier_queue", 'String'>
    readonly discharge_location_code: FieldRef<"cashier_queue", 'String'>
    readonly discharge_location_name: FieldRef<"cashier_queue", 'String'>
    readonly discharge_building: FieldRef<"cashier_queue", 'String'>
    readonly meddischarge_date: FieldRef<"cashier_queue", 'String'>
    readonly meddischarge_time: FieldRef<"cashier_queue", 'String'>
    readonly accepted_date: FieldRef<"cashier_queue", 'String'>
    readonly accepted_time: FieldRef<"cashier_queue", 'String'>
    readonly collected_date: FieldRef<"cashier_queue", 'String'>
    readonly collected_time: FieldRef<"cashier_queue", 'String'>
    readonly is_cashier: FieldRef<"cashier_queue", 'cashier_queue_is_cashier'>
    readonly medicine_status: FieldRef<"cashier_queue", 'cashier_queue_medicine_status'>
    readonly medicine_room: FieldRef<"cashier_queue", 'Int'>
    readonly cashier_status: FieldRef<"cashier_queue", 'cashier_queue_cashier_status'>
    readonly cashier_status_mobile: FieldRef<"cashier_queue", 'cashier_queue_cashier_status_mobile'>
    readonly payment_type: FieldRef<"cashier_queue", 'cashier_queue_payment_type'>
    readonly cashier_room: FieldRef<"cashier_queue", 'Int'>
    readonly remark: FieldRef<"cashier_queue", 'String'>
    readonly method_status: FieldRef<"cashier_queue", 'cashier_queue_method_status'>
    readonly created_at: FieldRef<"cashier_queue", 'DateTime'>
    readonly updated_at: FieldRef<"cashier_queue", 'DateTime'>
    readonly lang: FieldRef<"cashier_queue", 'cashier_queue_lang'>
  }
    

  // Custom InputTypes
  /**
   * cashier_queue findUnique
   */
  export type cashier_queueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * Filter, which cashier_queue to fetch.
     */
    where: cashier_queueWhereUniqueInput
  }

  /**
   * cashier_queue findUniqueOrThrow
   */
  export type cashier_queueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * Filter, which cashier_queue to fetch.
     */
    where: cashier_queueWhereUniqueInput
  }

  /**
   * cashier_queue findFirst
   */
  export type cashier_queueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * Filter, which cashier_queue to fetch.
     */
    where?: cashier_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashier_queues to fetch.
     */
    orderBy?: cashier_queueOrderByWithRelationInput | cashier_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cashier_queues.
     */
    cursor?: cashier_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashier_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashier_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cashier_queues.
     */
    distinct?: Cashier_queueScalarFieldEnum | Cashier_queueScalarFieldEnum[]
  }

  /**
   * cashier_queue findFirstOrThrow
   */
  export type cashier_queueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * Filter, which cashier_queue to fetch.
     */
    where?: cashier_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashier_queues to fetch.
     */
    orderBy?: cashier_queueOrderByWithRelationInput | cashier_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cashier_queues.
     */
    cursor?: cashier_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashier_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashier_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cashier_queues.
     */
    distinct?: Cashier_queueScalarFieldEnum | Cashier_queueScalarFieldEnum[]
  }

  /**
   * cashier_queue findMany
   */
  export type cashier_queueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * Filter, which cashier_queues to fetch.
     */
    where?: cashier_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashier_queues to fetch.
     */
    orderBy?: cashier_queueOrderByWithRelationInput | cashier_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cashier_queues.
     */
    cursor?: cashier_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashier_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashier_queues.
     */
    skip?: number
    distinct?: Cashier_queueScalarFieldEnum | Cashier_queueScalarFieldEnum[]
  }

  /**
   * cashier_queue create
   */
  export type cashier_queueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * The data needed to create a cashier_queue.
     */
    data: XOR<cashier_queueCreateInput, cashier_queueUncheckedCreateInput>
  }

  /**
   * cashier_queue createMany
   */
  export type cashier_queueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cashier_queues.
     */
    data: cashier_queueCreateManyInput | cashier_queueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cashier_queue update
   */
  export type cashier_queueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * The data needed to update a cashier_queue.
     */
    data: XOR<cashier_queueUpdateInput, cashier_queueUncheckedUpdateInput>
    /**
     * Choose, which cashier_queue to update.
     */
    where: cashier_queueWhereUniqueInput
  }

  /**
   * cashier_queue updateMany
   */
  export type cashier_queueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cashier_queues.
     */
    data: XOR<cashier_queueUpdateManyMutationInput, cashier_queueUncheckedUpdateManyInput>
    /**
     * Filter which cashier_queues to update
     */
    where?: cashier_queueWhereInput
  }

  /**
   * cashier_queue upsert
   */
  export type cashier_queueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * The filter to search for the cashier_queue to update in case it exists.
     */
    where: cashier_queueWhereUniqueInput
    /**
     * In case the cashier_queue found by the `where` argument doesn't exist, create a new cashier_queue with this data.
     */
    create: XOR<cashier_queueCreateInput, cashier_queueUncheckedCreateInput>
    /**
     * In case the cashier_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cashier_queueUpdateInput, cashier_queueUncheckedUpdateInput>
  }

  /**
   * cashier_queue delete
   */
  export type cashier_queueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
    /**
     * Filter which cashier_queue to delete.
     */
    where: cashier_queueWhereUniqueInput
  }

  /**
   * cashier_queue deleteMany
   */
  export type cashier_queueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cashier_queues to delete
     */
    where?: cashier_queueWhereInput
  }

  /**
   * cashier_queue without action
   */
  export type cashier_queueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier_queue
     */
    select?: cashier_queueSelect<ExtArgs> | null
  }


  /**
   * Model doctor_queue
   */

  export type AggregateDoctor_queue = {
    _count: Doctor_queueCountAggregateOutputType | null
    _avg: Doctor_queueAvgAggregateOutputType | null
    _sum: Doctor_queueSumAggregateOutputType | null
    _min: Doctor_queueMinAggregateOutputType | null
    _max: Doctor_queueMaxAggregateOutputType | null
  }

  export type Doctor_queueAvgAggregateOutputType = {
    doctor_queue_id: number | null
  }

  export type Doctor_queueSumAggregateOutputType = {
    doctor_queue_id: number | null
  }

  export type Doctor_queueMinAggregateOutputType = {
    doctor_queue_id: number | null
    patient_hn: string | null
    patient_name: string | null
    vn: string | null
    doctor_code: string | null
    doctor_name: string | null
    location_code: string | null
    location_name: string | null
    building: string | null
    service: string | null
    appt_row_id: string | null
    appt_date: string | null
    appt_time: string | null
    arrive_date: string | null
    arrive_time: string | null
    queue_no: string | null
    status_lab: string | null
    status_xray: string | null
    is_emergency: $Enums.doctor_queue_is_emergency | null
    status: $Enums.doctor_queue_status | null
    created_at: Date | null
    updated_at: Date | null
    lang: $Enums.doctor_queue_lang | null
  }

  export type Doctor_queueMaxAggregateOutputType = {
    doctor_queue_id: number | null
    patient_hn: string | null
    patient_name: string | null
    vn: string | null
    doctor_code: string | null
    doctor_name: string | null
    location_code: string | null
    location_name: string | null
    building: string | null
    service: string | null
    appt_row_id: string | null
    appt_date: string | null
    appt_time: string | null
    arrive_date: string | null
    arrive_time: string | null
    queue_no: string | null
    status_lab: string | null
    status_xray: string | null
    is_emergency: $Enums.doctor_queue_is_emergency | null
    status: $Enums.doctor_queue_status | null
    created_at: Date | null
    updated_at: Date | null
    lang: $Enums.doctor_queue_lang | null
  }

  export type Doctor_queueCountAggregateOutputType = {
    doctor_queue_id: number
    patient_hn: number
    patient_name: number
    vn: number
    doctor_code: number
    doctor_name: number
    location_code: number
    location_name: number
    building: number
    service: number
    appt_row_id: number
    appt_date: number
    appt_time: number
    arrive_date: number
    arrive_time: number
    queue_no: number
    status_lab: number
    status_xray: number
    is_emergency: number
    status: number
    created_at: number
    updated_at: number
    lang: number
    _all: number
  }


  export type Doctor_queueAvgAggregateInputType = {
    doctor_queue_id?: true
  }

  export type Doctor_queueSumAggregateInputType = {
    doctor_queue_id?: true
  }

  export type Doctor_queueMinAggregateInputType = {
    doctor_queue_id?: true
    patient_hn?: true
    patient_name?: true
    vn?: true
    doctor_code?: true
    doctor_name?: true
    location_code?: true
    location_name?: true
    building?: true
    service?: true
    appt_row_id?: true
    appt_date?: true
    appt_time?: true
    arrive_date?: true
    arrive_time?: true
    queue_no?: true
    status_lab?: true
    status_xray?: true
    is_emergency?: true
    status?: true
    created_at?: true
    updated_at?: true
    lang?: true
  }

  export type Doctor_queueMaxAggregateInputType = {
    doctor_queue_id?: true
    patient_hn?: true
    patient_name?: true
    vn?: true
    doctor_code?: true
    doctor_name?: true
    location_code?: true
    location_name?: true
    building?: true
    service?: true
    appt_row_id?: true
    appt_date?: true
    appt_time?: true
    arrive_date?: true
    arrive_time?: true
    queue_no?: true
    status_lab?: true
    status_xray?: true
    is_emergency?: true
    status?: true
    created_at?: true
    updated_at?: true
    lang?: true
  }

  export type Doctor_queueCountAggregateInputType = {
    doctor_queue_id?: true
    patient_hn?: true
    patient_name?: true
    vn?: true
    doctor_code?: true
    doctor_name?: true
    location_code?: true
    location_name?: true
    building?: true
    service?: true
    appt_row_id?: true
    appt_date?: true
    appt_time?: true
    arrive_date?: true
    arrive_time?: true
    queue_no?: true
    status_lab?: true
    status_xray?: true
    is_emergency?: true
    status?: true
    created_at?: true
    updated_at?: true
    lang?: true
    _all?: true
  }

  export type Doctor_queueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor_queue to aggregate.
     */
    where?: doctor_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctor_queues to fetch.
     */
    orderBy?: doctor_queueOrderByWithRelationInput | doctor_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctor_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctor_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctor_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctor_queues
    **/
    _count?: true | Doctor_queueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Doctor_queueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Doctor_queueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Doctor_queueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Doctor_queueMaxAggregateInputType
  }

  export type GetDoctor_queueAggregateType<T extends Doctor_queueAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor_queue[P]>
      : GetScalarType<T[P], AggregateDoctor_queue[P]>
  }




  export type doctor_queueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctor_queueWhereInput
    orderBy?: doctor_queueOrderByWithAggregationInput | doctor_queueOrderByWithAggregationInput[]
    by: Doctor_queueScalarFieldEnum[] | Doctor_queueScalarFieldEnum
    having?: doctor_queueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Doctor_queueCountAggregateInputType | true
    _avg?: Doctor_queueAvgAggregateInputType
    _sum?: Doctor_queueSumAggregateInputType
    _min?: Doctor_queueMinAggregateInputType
    _max?: Doctor_queueMaxAggregateInputType
  }

  export type Doctor_queueGroupByOutputType = {
    doctor_queue_id: number
    patient_hn: string | null
    patient_name: string | null
    vn: string | null
    doctor_code: string | null
    doctor_name: string | null
    location_code: string | null
    location_name: string | null
    building: string | null
    service: string | null
    appt_row_id: string | null
    appt_date: string | null
    appt_time: string | null
    arrive_date: string | null
    arrive_time: string | null
    queue_no: string | null
    status_lab: string | null
    status_xray: string | null
    is_emergency: $Enums.doctor_queue_is_emergency | null
    status: $Enums.doctor_queue_status
    created_at: Date
    updated_at: Date
    lang: $Enums.doctor_queue_lang | null
    _count: Doctor_queueCountAggregateOutputType | null
    _avg: Doctor_queueAvgAggregateOutputType | null
    _sum: Doctor_queueSumAggregateOutputType | null
    _min: Doctor_queueMinAggregateOutputType | null
    _max: Doctor_queueMaxAggregateOutputType | null
  }

  type GetDoctor_queueGroupByPayload<T extends doctor_queueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Doctor_queueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Doctor_queueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Doctor_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Doctor_queueGroupByOutputType[P]>
        }
      >
    >


  export type doctor_queueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_queue_id?: boolean
    patient_hn?: boolean
    patient_name?: boolean
    vn?: boolean
    doctor_code?: boolean
    doctor_name?: boolean
    location_code?: boolean
    location_name?: boolean
    building?: boolean
    service?: boolean
    appt_row_id?: boolean
    appt_date?: boolean
    appt_time?: boolean
    arrive_date?: boolean
    arrive_time?: boolean
    queue_no?: boolean
    status_lab?: boolean
    status_xray?: boolean
    is_emergency?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    lang?: boolean
  }, ExtArgs["result"]["doctor_queue"]>


  export type doctor_queueSelectScalar = {
    doctor_queue_id?: boolean
    patient_hn?: boolean
    patient_name?: boolean
    vn?: boolean
    doctor_code?: boolean
    doctor_name?: boolean
    location_code?: boolean
    location_name?: boolean
    building?: boolean
    service?: boolean
    appt_row_id?: boolean
    appt_date?: boolean
    appt_time?: boolean
    arrive_date?: boolean
    arrive_time?: boolean
    queue_no?: boolean
    status_lab?: boolean
    status_xray?: boolean
    is_emergency?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    lang?: boolean
  }


  export type $doctor_queuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctor_queue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      doctor_queue_id: number
      patient_hn: string | null
      patient_name: string | null
      vn: string | null
      doctor_code: string | null
      doctor_name: string | null
      location_code: string | null
      location_name: string | null
      building: string | null
      service: string | null
      appt_row_id: string | null
      appt_date: string | null
      appt_time: string | null
      arrive_date: string | null
      arrive_time: string | null
      queue_no: string | null
      status_lab: string | null
      status_xray: string | null
      is_emergency: $Enums.doctor_queue_is_emergency | null
      status: $Enums.doctor_queue_status
      created_at: Date
      updated_at: Date
      lang: $Enums.doctor_queue_lang | null
    }, ExtArgs["result"]["doctor_queue"]>
    composites: {}
  }

  type doctor_queueGetPayload<S extends boolean | null | undefined | doctor_queueDefaultArgs> = $Result.GetResult<Prisma.$doctor_queuePayload, S>

  type doctor_queueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<doctor_queueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Doctor_queueCountAggregateInputType | true
    }

  export interface doctor_queueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor_queue'], meta: { name: 'doctor_queue' } }
    /**
     * Find zero or one Doctor_queue that matches the filter.
     * @param {doctor_queueFindUniqueArgs} args - Arguments to find a Doctor_queue
     * @example
     * // Get one Doctor_queue
     * const doctor_queue = await prisma.doctor_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctor_queueFindUniqueArgs>(args: SelectSubset<T, doctor_queueFindUniqueArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Doctor_queue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {doctor_queueFindUniqueOrThrowArgs} args - Arguments to find a Doctor_queue
     * @example
     * // Get one Doctor_queue
     * const doctor_queue = await prisma.doctor_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctor_queueFindUniqueOrThrowArgs>(args: SelectSubset<T, doctor_queueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Doctor_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctor_queueFindFirstArgs} args - Arguments to find a Doctor_queue
     * @example
     * // Get one Doctor_queue
     * const doctor_queue = await prisma.doctor_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctor_queueFindFirstArgs>(args?: SelectSubset<T, doctor_queueFindFirstArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Doctor_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctor_queueFindFirstOrThrowArgs} args - Arguments to find a Doctor_queue
     * @example
     * // Get one Doctor_queue
     * const doctor_queue = await prisma.doctor_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctor_queueFindFirstOrThrowArgs>(args?: SelectSubset<T, doctor_queueFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Doctor_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctor_queueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctor_queues
     * const doctor_queues = await prisma.doctor_queue.findMany()
     * 
     * // Get first 10 Doctor_queues
     * const doctor_queues = await prisma.doctor_queue.findMany({ take: 10 })
     * 
     * // Only select the `doctor_queue_id`
     * const doctor_queueWithDoctor_queue_idOnly = await prisma.doctor_queue.findMany({ select: { doctor_queue_id: true } })
     * 
     */
    findMany<T extends doctor_queueFindManyArgs>(args?: SelectSubset<T, doctor_queueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Doctor_queue.
     * @param {doctor_queueCreateArgs} args - Arguments to create a Doctor_queue.
     * @example
     * // Create one Doctor_queue
     * const Doctor_queue = await prisma.doctor_queue.create({
     *   data: {
     *     // ... data to create a Doctor_queue
     *   }
     * })
     * 
     */
    create<T extends doctor_queueCreateArgs>(args: SelectSubset<T, doctor_queueCreateArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Doctor_queues.
     * @param {doctor_queueCreateManyArgs} args - Arguments to create many Doctor_queues.
     * @example
     * // Create many Doctor_queues
     * const doctor_queue = await prisma.doctor_queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctor_queueCreateManyArgs>(args?: SelectSubset<T, doctor_queueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor_queue.
     * @param {doctor_queueDeleteArgs} args - Arguments to delete one Doctor_queue.
     * @example
     * // Delete one Doctor_queue
     * const Doctor_queue = await prisma.doctor_queue.delete({
     *   where: {
     *     // ... filter to delete one Doctor_queue
     *   }
     * })
     * 
     */
    delete<T extends doctor_queueDeleteArgs>(args: SelectSubset<T, doctor_queueDeleteArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Doctor_queue.
     * @param {doctor_queueUpdateArgs} args - Arguments to update one Doctor_queue.
     * @example
     * // Update one Doctor_queue
     * const doctor_queue = await prisma.doctor_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctor_queueUpdateArgs>(args: SelectSubset<T, doctor_queueUpdateArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Doctor_queues.
     * @param {doctor_queueDeleteManyArgs} args - Arguments to filter Doctor_queues to delete.
     * @example
     * // Delete a few Doctor_queues
     * const { count } = await prisma.doctor_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctor_queueDeleteManyArgs>(args?: SelectSubset<T, doctor_queueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctor_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctor_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctor_queues
     * const doctor_queue = await prisma.doctor_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctor_queueUpdateManyArgs>(args: SelectSubset<T, doctor_queueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor_queue.
     * @param {doctor_queueUpsertArgs} args - Arguments to update or create a Doctor_queue.
     * @example
     * // Update or create a Doctor_queue
     * const doctor_queue = await prisma.doctor_queue.upsert({
     *   create: {
     *     // ... data to create a Doctor_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor_queue we want to update
     *   }
     * })
     */
    upsert<T extends doctor_queueUpsertArgs>(args: SelectSubset<T, doctor_queueUpsertArgs<ExtArgs>>): Prisma__doctor_queueClient<$Result.GetResult<Prisma.$doctor_queuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Doctor_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctor_queueCountArgs} args - Arguments to filter Doctor_queues to count.
     * @example
     * // Count the number of Doctor_queues
     * const count = await prisma.doctor_queue.count({
     *   where: {
     *     // ... the filter for the Doctor_queues we want to count
     *   }
     * })
    **/
    count<T extends doctor_queueCountArgs>(
      args?: Subset<T, doctor_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Doctor_queueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doctor_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Doctor_queueAggregateArgs>(args: Subset<T, Doctor_queueAggregateArgs>): Prisma.PrismaPromise<GetDoctor_queueAggregateType<T>>

    /**
     * Group by Doctor_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctor_queueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctor_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctor_queueGroupByArgs['orderBy'] }
        : { orderBy?: doctor_queueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctor_queueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctor_queueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctor_queue model
   */
  readonly fields: doctor_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctor_queueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctor_queue model
   */ 
  interface doctor_queueFieldRefs {
    readonly doctor_queue_id: FieldRef<"doctor_queue", 'Int'>
    readonly patient_hn: FieldRef<"doctor_queue", 'String'>
    readonly patient_name: FieldRef<"doctor_queue", 'String'>
    readonly vn: FieldRef<"doctor_queue", 'String'>
    readonly doctor_code: FieldRef<"doctor_queue", 'String'>
    readonly doctor_name: FieldRef<"doctor_queue", 'String'>
    readonly location_code: FieldRef<"doctor_queue", 'String'>
    readonly location_name: FieldRef<"doctor_queue", 'String'>
    readonly building: FieldRef<"doctor_queue", 'String'>
    readonly service: FieldRef<"doctor_queue", 'String'>
    readonly appt_row_id: FieldRef<"doctor_queue", 'String'>
    readonly appt_date: FieldRef<"doctor_queue", 'String'>
    readonly appt_time: FieldRef<"doctor_queue", 'String'>
    readonly arrive_date: FieldRef<"doctor_queue", 'String'>
    readonly arrive_time: FieldRef<"doctor_queue", 'String'>
    readonly queue_no: FieldRef<"doctor_queue", 'String'>
    readonly status_lab: FieldRef<"doctor_queue", 'String'>
    readonly status_xray: FieldRef<"doctor_queue", 'String'>
    readonly is_emergency: FieldRef<"doctor_queue", 'doctor_queue_is_emergency'>
    readonly status: FieldRef<"doctor_queue", 'doctor_queue_status'>
    readonly created_at: FieldRef<"doctor_queue", 'DateTime'>
    readonly updated_at: FieldRef<"doctor_queue", 'DateTime'>
    readonly lang: FieldRef<"doctor_queue", 'doctor_queue_lang'>
  }
    

  // Custom InputTypes
  /**
   * doctor_queue findUnique
   */
  export type doctor_queueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * Filter, which doctor_queue to fetch.
     */
    where: doctor_queueWhereUniqueInput
  }

  /**
   * doctor_queue findUniqueOrThrow
   */
  export type doctor_queueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * Filter, which doctor_queue to fetch.
     */
    where: doctor_queueWhereUniqueInput
  }

  /**
   * doctor_queue findFirst
   */
  export type doctor_queueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * Filter, which doctor_queue to fetch.
     */
    where?: doctor_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctor_queues to fetch.
     */
    orderBy?: doctor_queueOrderByWithRelationInput | doctor_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctor_queues.
     */
    cursor?: doctor_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctor_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctor_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctor_queues.
     */
    distinct?: Doctor_queueScalarFieldEnum | Doctor_queueScalarFieldEnum[]
  }

  /**
   * doctor_queue findFirstOrThrow
   */
  export type doctor_queueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * Filter, which doctor_queue to fetch.
     */
    where?: doctor_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctor_queues to fetch.
     */
    orderBy?: doctor_queueOrderByWithRelationInput | doctor_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctor_queues.
     */
    cursor?: doctor_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctor_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctor_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctor_queues.
     */
    distinct?: Doctor_queueScalarFieldEnum | Doctor_queueScalarFieldEnum[]
  }

  /**
   * doctor_queue findMany
   */
  export type doctor_queueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * Filter, which doctor_queues to fetch.
     */
    where?: doctor_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctor_queues to fetch.
     */
    orderBy?: doctor_queueOrderByWithRelationInput | doctor_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctor_queues.
     */
    cursor?: doctor_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctor_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctor_queues.
     */
    skip?: number
    distinct?: Doctor_queueScalarFieldEnum | Doctor_queueScalarFieldEnum[]
  }

  /**
   * doctor_queue create
   */
  export type doctor_queueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * The data needed to create a doctor_queue.
     */
    data?: XOR<doctor_queueCreateInput, doctor_queueUncheckedCreateInput>
  }

  /**
   * doctor_queue createMany
   */
  export type doctor_queueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctor_queues.
     */
    data: doctor_queueCreateManyInput | doctor_queueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctor_queue update
   */
  export type doctor_queueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * The data needed to update a doctor_queue.
     */
    data: XOR<doctor_queueUpdateInput, doctor_queueUncheckedUpdateInput>
    /**
     * Choose, which doctor_queue to update.
     */
    where: doctor_queueWhereUniqueInput
  }

  /**
   * doctor_queue updateMany
   */
  export type doctor_queueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctor_queues.
     */
    data: XOR<doctor_queueUpdateManyMutationInput, doctor_queueUncheckedUpdateManyInput>
    /**
     * Filter which doctor_queues to update
     */
    where?: doctor_queueWhereInput
  }

  /**
   * doctor_queue upsert
   */
  export type doctor_queueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * The filter to search for the doctor_queue to update in case it exists.
     */
    where: doctor_queueWhereUniqueInput
    /**
     * In case the doctor_queue found by the `where` argument doesn't exist, create a new doctor_queue with this data.
     */
    create: XOR<doctor_queueCreateInput, doctor_queueUncheckedCreateInput>
    /**
     * In case the doctor_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctor_queueUpdateInput, doctor_queueUncheckedUpdateInput>
  }

  /**
   * doctor_queue delete
   */
  export type doctor_queueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
    /**
     * Filter which doctor_queue to delete.
     */
    where: doctor_queueWhereUniqueInput
  }

  /**
   * doctor_queue deleteMany
   */
  export type doctor_queueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor_queues to delete
     */
    where?: doctor_queueWhereInput
  }

  /**
   * doctor_queue without action
   */
  export type doctor_queueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor_queue
     */
    select?: doctor_queueSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppointmentsScalarFieldEnum: {
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

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const BillingScalarFieldEnum: {
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

  export type BillingScalarFieldEnum = (typeof BillingScalarFieldEnum)[keyof typeof BillingScalarFieldEnum]


  export const Broadcast_masterScalarFieldEnum: {
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

  export type Broadcast_masterScalarFieldEnum = (typeof Broadcast_masterScalarFieldEnum)[keyof typeof Broadcast_masterScalarFieldEnum]


  export const Broadcast_master_has_users_mobileScalarFieldEnum: {
    broadcast_master_has_users_mobile_id: 'broadcast_master_has_users_mobile_id',
    broadcast_master_id: 'broadcast_master_id',
    users_mobile_id: 'users_mobile_id',
    created_by: 'created_by',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Broadcast_master_has_users_mobileScalarFieldEnum = (typeof Broadcast_master_has_users_mobileScalarFieldEnum)[keyof typeof Broadcast_master_has_users_mobileScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
    building_id: 'building_id',
    name: 'name',
    created_by: 'created_by',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const Cashier_queueScalarFieldEnum: {
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

  export type Cashier_queueScalarFieldEnum = (typeof Cashier_queueScalarFieldEnum)[keyof typeof Cashier_queueScalarFieldEnum]


  export const Doctor_queueScalarFieldEnum: {
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

  export type Doctor_queueScalarFieldEnum = (typeof Doctor_queueScalarFieldEnum)[keyof typeof Doctor_queueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'appointments_rights'
   */
  export type Enumappointments_rightsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'appointments_rights'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'appointments_status'
   */
  export type Enumappointments_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'appointments_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'billing_has_webhook_notify'
   */
  export type Enumbilling_has_webhook_notifyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'billing_has_webhook_notify'>
    


  /**
   * Reference to a field of type 'billing_payment_status'
   */
  export type Enumbilling_payment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'billing_payment_status'>
    


  /**
   * Reference to a field of type 'cashier_queue_is_cashier'
   */
  export type Enumcashier_queue_is_cashierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_is_cashier'>
    


  /**
   * Reference to a field of type 'cashier_queue_medicine_status'
   */
  export type Enumcashier_queue_medicine_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_medicine_status'>
    


  /**
   * Reference to a field of type 'cashier_queue_cashier_status'
   */
  export type Enumcashier_queue_cashier_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_cashier_status'>
    


  /**
   * Reference to a field of type 'cashier_queue_cashier_status_mobile'
   */
  export type Enumcashier_queue_cashier_status_mobileFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_cashier_status_mobile'>
    


  /**
   * Reference to a field of type 'cashier_queue_payment_type'
   */
  export type Enumcashier_queue_payment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_payment_type'>
    


  /**
   * Reference to a field of type 'cashier_queue_method_status'
   */
  export type Enumcashier_queue_method_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_method_status'>
    


  /**
   * Reference to a field of type 'cashier_queue_lang'
   */
  export type Enumcashier_queue_langFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cashier_queue_lang'>
    


  /**
   * Reference to a field of type 'doctor_queue_is_emergency'
   */
  export type Enumdoctor_queue_is_emergencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'doctor_queue_is_emergency'>
    


  /**
   * Reference to a field of type 'doctor_queue_status'
   */
  export type Enumdoctor_queue_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'doctor_queue_status'>
    


  /**
   * Reference to a field of type 'doctor_queue_lang'
   */
  export type Enumdoctor_queue_langFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'doctor_queue_lang'>
    
  /**
   * Deep Input Types
   */


  export type appointmentsWhereInput = {
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    appointment_id?: IntFilter<"appointments"> | number
    rights?: Enumappointments_rightsFilter<"appointments"> | $Enums.appointments_rights
    appoint_date?: DateTimeFilter<"appointments"> | Date | string
    appoint_time?: StringFilter<"appointments"> | string
    clinic?: StringNullableFilter<"appointments"> | string | null
    doctor?: StringNullableFilter<"appointments"> | string | null
    users_mobile_id?: IntFilter<"appointments"> | number
    status?: Enumappointments_statusFilter<"appointments"> | $Enums.appointments_status
    created_by?: IntFilter<"appointments"> | number
    updated_by?: IntNullableFilter<"appointments"> | number | null
    created_at?: DateTimeFilter<"appointments"> | Date | string
    updated_at?: DateTimeFilter<"appointments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"appointments"> | Date | string | null
  }

  export type appointmentsOrderByWithRelationInput = {
    appointment_id?: SortOrder
    rights?: SortOrder
    appoint_date?: SortOrder
    appoint_time?: SortOrder
    clinic?: SortOrderInput | SortOrder
    doctor?: SortOrderInput | SortOrder
    users_mobile_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type appointmentsWhereUniqueInput = Prisma.AtLeast<{
    appointment_id?: number
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    rights?: Enumappointments_rightsFilter<"appointments"> | $Enums.appointments_rights
    appoint_date?: DateTimeFilter<"appointments"> | Date | string
    appoint_time?: StringFilter<"appointments"> | string
    clinic?: StringNullableFilter<"appointments"> | string | null
    doctor?: StringNullableFilter<"appointments"> | string | null
    users_mobile_id?: IntFilter<"appointments"> | number
    status?: Enumappointments_statusFilter<"appointments"> | $Enums.appointments_status
    created_by?: IntFilter<"appointments"> | number
    updated_by?: IntNullableFilter<"appointments"> | number | null
    created_at?: DateTimeFilter<"appointments"> | Date | string
    updated_at?: DateTimeFilter<"appointments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"appointments"> | Date | string | null
  }, "appointment_id">

  export type appointmentsOrderByWithAggregationInput = {
    appointment_id?: SortOrder
    rights?: SortOrder
    appoint_date?: SortOrder
    appoint_time?: SortOrder
    clinic?: SortOrderInput | SortOrder
    doctor?: SortOrderInput | SortOrder
    users_mobile_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: appointmentsCountOrderByAggregateInput
    _avg?: appointmentsAvgOrderByAggregateInput
    _max?: appointmentsMaxOrderByAggregateInput
    _min?: appointmentsMinOrderByAggregateInput
    _sum?: appointmentsSumOrderByAggregateInput
  }

  export type appointmentsScalarWhereWithAggregatesInput = {
    AND?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    OR?: appointmentsScalarWhereWithAggregatesInput[]
    NOT?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    appointment_id?: IntWithAggregatesFilter<"appointments"> | number
    rights?: Enumappointments_rightsWithAggregatesFilter<"appointments"> | $Enums.appointments_rights
    appoint_date?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
    appoint_time?: StringWithAggregatesFilter<"appointments"> | string
    clinic?: StringNullableWithAggregatesFilter<"appointments"> | string | null
    doctor?: StringNullableWithAggregatesFilter<"appointments"> | string | null
    users_mobile_id?: IntWithAggregatesFilter<"appointments"> | number
    status?: Enumappointments_statusWithAggregatesFilter<"appointments"> | $Enums.appointments_status
    created_by?: IntWithAggregatesFilter<"appointments"> | number
    updated_by?: IntNullableWithAggregatesFilter<"appointments"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"appointments"> | Date | string | null
  }

  export type billingWhereInput = {
    AND?: billingWhereInput | billingWhereInput[]
    OR?: billingWhereInput[]
    NOT?: billingWhereInput | billingWhereInput[]
    billing_id?: IntFilter<"billing"> | number
    vn?: StringFilter<"billing"> | string
    queue_no?: StringFilter<"billing"> | string
    bill_no?: StringFilter<"billing"> | string
    order_id?: StringNullableFilter<"billing"> | string | null
    charge_id?: StringNullableFilter<"billing"> | string | null
    total_price?: FloatFilter<"billing"> | number
    patient_hn?: StringFilter<"billing"> | string
    patient_name?: StringFilter<"billing"> | string
    cashier_queue_id?: IntNullableFilter<"billing"> | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyFilter<"billing"> | $Enums.billing_has_webhook_notify
    created_at?: DateTimeFilter<"billing"> | Date | string
    updated_at?: DateTimeFilter<"billing"> | Date | string
    payment_status?: Enumbilling_payment_statusNullableFilter<"billing"> | $Enums.billing_payment_status | null
  }

  export type billingOrderByWithRelationInput = {
    billing_id?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    bill_no?: SortOrder
    order_id?: SortOrderInput | SortOrder
    charge_id?: SortOrderInput | SortOrder
    total_price?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    cashier_queue_id?: SortOrderInput | SortOrder
    has_webhook_notify?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_status?: SortOrderInput | SortOrder
  }

  export type billingWhereUniqueInput = Prisma.AtLeast<{
    billing_id?: number
    AND?: billingWhereInput | billingWhereInput[]
    OR?: billingWhereInput[]
    NOT?: billingWhereInput | billingWhereInput[]
    vn?: StringFilter<"billing"> | string
    queue_no?: StringFilter<"billing"> | string
    bill_no?: StringFilter<"billing"> | string
    order_id?: StringNullableFilter<"billing"> | string | null
    charge_id?: StringNullableFilter<"billing"> | string | null
    total_price?: FloatFilter<"billing"> | number
    patient_hn?: StringFilter<"billing"> | string
    patient_name?: StringFilter<"billing"> | string
    cashier_queue_id?: IntNullableFilter<"billing"> | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyFilter<"billing"> | $Enums.billing_has_webhook_notify
    created_at?: DateTimeFilter<"billing"> | Date | string
    updated_at?: DateTimeFilter<"billing"> | Date | string
    payment_status?: Enumbilling_payment_statusNullableFilter<"billing"> | $Enums.billing_payment_status | null
  }, "billing_id">

  export type billingOrderByWithAggregationInput = {
    billing_id?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    bill_no?: SortOrder
    order_id?: SortOrderInput | SortOrder
    charge_id?: SortOrderInput | SortOrder
    total_price?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    cashier_queue_id?: SortOrderInput | SortOrder
    has_webhook_notify?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_status?: SortOrderInput | SortOrder
    _count?: billingCountOrderByAggregateInput
    _avg?: billingAvgOrderByAggregateInput
    _max?: billingMaxOrderByAggregateInput
    _min?: billingMinOrderByAggregateInput
    _sum?: billingSumOrderByAggregateInput
  }

  export type billingScalarWhereWithAggregatesInput = {
    AND?: billingScalarWhereWithAggregatesInput | billingScalarWhereWithAggregatesInput[]
    OR?: billingScalarWhereWithAggregatesInput[]
    NOT?: billingScalarWhereWithAggregatesInput | billingScalarWhereWithAggregatesInput[]
    billing_id?: IntWithAggregatesFilter<"billing"> | number
    vn?: StringWithAggregatesFilter<"billing"> | string
    queue_no?: StringWithAggregatesFilter<"billing"> | string
    bill_no?: StringWithAggregatesFilter<"billing"> | string
    order_id?: StringNullableWithAggregatesFilter<"billing"> | string | null
    charge_id?: StringNullableWithAggregatesFilter<"billing"> | string | null
    total_price?: FloatWithAggregatesFilter<"billing"> | number
    patient_hn?: StringWithAggregatesFilter<"billing"> | string
    patient_name?: StringWithAggregatesFilter<"billing"> | string
    cashier_queue_id?: IntNullableWithAggregatesFilter<"billing"> | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyWithAggregatesFilter<"billing"> | $Enums.billing_has_webhook_notify
    created_at?: DateTimeWithAggregatesFilter<"billing"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"billing"> | Date | string
    payment_status?: Enumbilling_payment_statusNullableWithAggregatesFilter<"billing"> | $Enums.billing_payment_status | null
  }

  export type broadcast_masterWhereInput = {
    AND?: broadcast_masterWhereInput | broadcast_masterWhereInput[]
    OR?: broadcast_masterWhereInput[]
    NOT?: broadcast_masterWhereInput | broadcast_masterWhereInput[]
    broadcast_master_id?: IntFilter<"broadcast_master"> | number
    message_title?: StringFilter<"broadcast_master"> | string
    message_body?: StringFilter<"broadcast_master"> | string
    date?: DateTimeFilter<"broadcast_master"> | Date | string
    image?: StringNullableFilter<"broadcast_master"> | string | null
    created_by?: IntFilter<"broadcast_master"> | number
    updated_by?: IntFilter<"broadcast_master"> | number
    created_at?: DateTimeFilter<"broadcast_master"> | Date | string
    updated_at?: DateTimeFilter<"broadcast_master"> | Date | string
    deleted_at?: DateTimeNullableFilter<"broadcast_master"> | Date | string | null
    link_url?: StringNullableFilter<"broadcast_master"> | string | null
  }

  export type broadcast_masterOrderByWithRelationInput = {
    broadcast_master_id?: SortOrder
    message_title?: SortOrder
    message_body?: SortOrder
    date?: SortOrder
    image?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    link_url?: SortOrderInput | SortOrder
  }

  export type broadcast_masterWhereUniqueInput = Prisma.AtLeast<{
    broadcast_master_id?: number
    AND?: broadcast_masterWhereInput | broadcast_masterWhereInput[]
    OR?: broadcast_masterWhereInput[]
    NOT?: broadcast_masterWhereInput | broadcast_masterWhereInput[]
    message_title?: StringFilter<"broadcast_master"> | string
    message_body?: StringFilter<"broadcast_master"> | string
    date?: DateTimeFilter<"broadcast_master"> | Date | string
    image?: StringNullableFilter<"broadcast_master"> | string | null
    created_by?: IntFilter<"broadcast_master"> | number
    updated_by?: IntFilter<"broadcast_master"> | number
    created_at?: DateTimeFilter<"broadcast_master"> | Date | string
    updated_at?: DateTimeFilter<"broadcast_master"> | Date | string
    deleted_at?: DateTimeNullableFilter<"broadcast_master"> | Date | string | null
    link_url?: StringNullableFilter<"broadcast_master"> | string | null
  }, "broadcast_master_id">

  export type broadcast_masterOrderByWithAggregationInput = {
    broadcast_master_id?: SortOrder
    message_title?: SortOrder
    message_body?: SortOrder
    date?: SortOrder
    image?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    link_url?: SortOrderInput | SortOrder
    _count?: broadcast_masterCountOrderByAggregateInput
    _avg?: broadcast_masterAvgOrderByAggregateInput
    _max?: broadcast_masterMaxOrderByAggregateInput
    _min?: broadcast_masterMinOrderByAggregateInput
    _sum?: broadcast_masterSumOrderByAggregateInput
  }

  export type broadcast_masterScalarWhereWithAggregatesInput = {
    AND?: broadcast_masterScalarWhereWithAggregatesInput | broadcast_masterScalarWhereWithAggregatesInput[]
    OR?: broadcast_masterScalarWhereWithAggregatesInput[]
    NOT?: broadcast_masterScalarWhereWithAggregatesInput | broadcast_masterScalarWhereWithAggregatesInput[]
    broadcast_master_id?: IntWithAggregatesFilter<"broadcast_master"> | number
    message_title?: StringWithAggregatesFilter<"broadcast_master"> | string
    message_body?: StringWithAggregatesFilter<"broadcast_master"> | string
    date?: DateTimeWithAggregatesFilter<"broadcast_master"> | Date | string
    image?: StringNullableWithAggregatesFilter<"broadcast_master"> | string | null
    created_by?: IntWithAggregatesFilter<"broadcast_master"> | number
    updated_by?: IntWithAggregatesFilter<"broadcast_master"> | number
    created_at?: DateTimeWithAggregatesFilter<"broadcast_master"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"broadcast_master"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"broadcast_master"> | Date | string | null
    link_url?: StringNullableWithAggregatesFilter<"broadcast_master"> | string | null
  }

  export type broadcast_master_has_users_mobileWhereInput = {
    AND?: broadcast_master_has_users_mobileWhereInput | broadcast_master_has_users_mobileWhereInput[]
    OR?: broadcast_master_has_users_mobileWhereInput[]
    NOT?: broadcast_master_has_users_mobileWhereInput | broadcast_master_has_users_mobileWhereInput[]
    broadcast_master_has_users_mobile_id?: IntFilter<"broadcast_master_has_users_mobile"> | number
    broadcast_master_id?: IntFilter<"broadcast_master_has_users_mobile"> | number
    users_mobile_id?: IntFilter<"broadcast_master_has_users_mobile"> | number
    created_by?: IntFilter<"broadcast_master_has_users_mobile"> | number
    updated_by?: IntFilter<"broadcast_master_has_users_mobile"> | number
    created_at?: DateTimeFilter<"broadcast_master_has_users_mobile"> | Date | string
    updated_at?: DateTimeFilter<"broadcast_master_has_users_mobile"> | Date | string
    deleted_at?: DateTimeNullableFilter<"broadcast_master_has_users_mobile"> | Date | string | null
  }

  export type broadcast_master_has_users_mobileOrderByWithRelationInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type broadcast_master_has_users_mobileWhereUniqueInput = Prisma.AtLeast<{
    broadcast_master_has_users_mobile_id?: number
    AND?: broadcast_master_has_users_mobileWhereInput | broadcast_master_has_users_mobileWhereInput[]
    OR?: broadcast_master_has_users_mobileWhereInput[]
    NOT?: broadcast_master_has_users_mobileWhereInput | broadcast_master_has_users_mobileWhereInput[]
    broadcast_master_id?: IntFilter<"broadcast_master_has_users_mobile"> | number
    users_mobile_id?: IntFilter<"broadcast_master_has_users_mobile"> | number
    created_by?: IntFilter<"broadcast_master_has_users_mobile"> | number
    updated_by?: IntFilter<"broadcast_master_has_users_mobile"> | number
    created_at?: DateTimeFilter<"broadcast_master_has_users_mobile"> | Date | string
    updated_at?: DateTimeFilter<"broadcast_master_has_users_mobile"> | Date | string
    deleted_at?: DateTimeNullableFilter<"broadcast_master_has_users_mobile"> | Date | string | null
  }, "broadcast_master_has_users_mobile_id">

  export type broadcast_master_has_users_mobileOrderByWithAggregationInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: broadcast_master_has_users_mobileCountOrderByAggregateInput
    _avg?: broadcast_master_has_users_mobileAvgOrderByAggregateInput
    _max?: broadcast_master_has_users_mobileMaxOrderByAggregateInput
    _min?: broadcast_master_has_users_mobileMinOrderByAggregateInput
    _sum?: broadcast_master_has_users_mobileSumOrderByAggregateInput
  }

  export type broadcast_master_has_users_mobileScalarWhereWithAggregatesInput = {
    AND?: broadcast_master_has_users_mobileScalarWhereWithAggregatesInput | broadcast_master_has_users_mobileScalarWhereWithAggregatesInput[]
    OR?: broadcast_master_has_users_mobileScalarWhereWithAggregatesInput[]
    NOT?: broadcast_master_has_users_mobileScalarWhereWithAggregatesInput | broadcast_master_has_users_mobileScalarWhereWithAggregatesInput[]
    broadcast_master_has_users_mobile_id?: IntWithAggregatesFilter<"broadcast_master_has_users_mobile"> | number
    broadcast_master_id?: IntWithAggregatesFilter<"broadcast_master_has_users_mobile"> | number
    users_mobile_id?: IntWithAggregatesFilter<"broadcast_master_has_users_mobile"> | number
    created_by?: IntWithAggregatesFilter<"broadcast_master_has_users_mobile"> | number
    updated_by?: IntWithAggregatesFilter<"broadcast_master_has_users_mobile"> | number
    created_at?: DateTimeWithAggregatesFilter<"broadcast_master_has_users_mobile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"broadcast_master_has_users_mobile"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"broadcast_master_has_users_mobile"> | Date | string | null
  }

  export type buildingWhereInput = {
    AND?: buildingWhereInput | buildingWhereInput[]
    OR?: buildingWhereInput[]
    NOT?: buildingWhereInput | buildingWhereInput[]
    building_id?: IntFilter<"building"> | number
    name?: StringFilter<"building"> | string
    created_by?: IntFilter<"building"> | number
    updated_by?: IntFilter<"building"> | number
    created_at?: DateTimeFilter<"building"> | Date | string
    updated_at?: DateTimeFilter<"building"> | Date | string
    deleted_at?: DateTimeNullableFilter<"building"> | Date | string | null
  }

  export type buildingOrderByWithRelationInput = {
    building_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type buildingWhereUniqueInput = Prisma.AtLeast<{
    building_id?: number
    AND?: buildingWhereInput | buildingWhereInput[]
    OR?: buildingWhereInput[]
    NOT?: buildingWhereInput | buildingWhereInput[]
    name?: StringFilter<"building"> | string
    created_by?: IntFilter<"building"> | number
    updated_by?: IntFilter<"building"> | number
    created_at?: DateTimeFilter<"building"> | Date | string
    updated_at?: DateTimeFilter<"building"> | Date | string
    deleted_at?: DateTimeNullableFilter<"building"> | Date | string | null
  }, "building_id">

  export type buildingOrderByWithAggregationInput = {
    building_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: buildingCountOrderByAggregateInput
    _avg?: buildingAvgOrderByAggregateInput
    _max?: buildingMaxOrderByAggregateInput
    _min?: buildingMinOrderByAggregateInput
    _sum?: buildingSumOrderByAggregateInput
  }

  export type buildingScalarWhereWithAggregatesInput = {
    AND?: buildingScalarWhereWithAggregatesInput | buildingScalarWhereWithAggregatesInput[]
    OR?: buildingScalarWhereWithAggregatesInput[]
    NOT?: buildingScalarWhereWithAggregatesInput | buildingScalarWhereWithAggregatesInput[]
    building_id?: IntWithAggregatesFilter<"building"> | number
    name?: StringWithAggregatesFilter<"building"> | string
    created_by?: IntWithAggregatesFilter<"building"> | number
    updated_by?: IntWithAggregatesFilter<"building"> | number
    created_at?: DateTimeWithAggregatesFilter<"building"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"building"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"building"> | Date | string | null
  }

  export type cashier_queueWhereInput = {
    AND?: cashier_queueWhereInput | cashier_queueWhereInput[]
    OR?: cashier_queueWhereInput[]
    NOT?: cashier_queueWhereInput | cashier_queueWhereInput[]
    cashier_queue_id?: IntFilter<"cashier_queue"> | number
    patient_hn?: StringFilter<"cashier_queue"> | string
    patient_name?: StringFilter<"cashier_queue"> | string
    vn?: StringFilter<"cashier_queue"> | string
    queue_no?: StringFilter<"cashier_queue"> | string
    patient_location_code?: StringFilter<"cashier_queue"> | string
    patient_location_name?: StringFilter<"cashier_queue"> | string
    discharge_location_code?: StringFilter<"cashier_queue"> | string
    discharge_location_name?: StringFilter<"cashier_queue"> | string
    discharge_building?: StringFilter<"cashier_queue"> | string
    meddischarge_date?: StringFilter<"cashier_queue"> | string
    meddischarge_time?: StringFilter<"cashier_queue"> | string
    accepted_date?: StringFilter<"cashier_queue"> | string
    accepted_time?: StringFilter<"cashier_queue"> | string
    collected_date?: StringFilter<"cashier_queue"> | string
    collected_time?: StringFilter<"cashier_queue"> | string
    is_cashier?: Enumcashier_queue_is_cashierFilter<"cashier_queue"> | $Enums.cashier_queue_is_cashier
    medicine_status?: Enumcashier_queue_medicine_statusNullableFilter<"cashier_queue"> | $Enums.cashier_queue_medicine_status | null
    medicine_room?: IntNullableFilter<"cashier_queue"> | number | null
    cashier_status?: Enumcashier_queue_cashier_statusNullableFilter<"cashier_queue"> | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: Enumcashier_queue_cashier_status_mobileNullableFilter<"cashier_queue"> | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: Enumcashier_queue_payment_typeNullableFilter<"cashier_queue"> | $Enums.cashier_queue_payment_type | null
    cashier_room?: IntNullableFilter<"cashier_queue"> | number | null
    remark?: StringNullableFilter<"cashier_queue"> | string | null
    method_status?: Enumcashier_queue_method_statusNullableFilter<"cashier_queue"> | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeFilter<"cashier_queue"> | Date | string
    updated_at?: DateTimeFilter<"cashier_queue"> | Date | string
    lang?: Enumcashier_queue_langNullableFilter<"cashier_queue"> | $Enums.cashier_queue_lang | null
  }

  export type cashier_queueOrderByWithRelationInput = {
    cashier_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    patient_location_code?: SortOrder
    patient_location_name?: SortOrder
    discharge_location_code?: SortOrder
    discharge_location_name?: SortOrder
    discharge_building?: SortOrder
    meddischarge_date?: SortOrder
    meddischarge_time?: SortOrder
    accepted_date?: SortOrder
    accepted_time?: SortOrder
    collected_date?: SortOrder
    collected_time?: SortOrder
    is_cashier?: SortOrder
    medicine_status?: SortOrderInput | SortOrder
    medicine_room?: SortOrderInput | SortOrder
    cashier_status?: SortOrderInput | SortOrder
    cashier_status_mobile?: SortOrderInput | SortOrder
    payment_type?: SortOrderInput | SortOrder
    cashier_room?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    method_status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrderInput | SortOrder
  }

  export type cashier_queueWhereUniqueInput = Prisma.AtLeast<{
    cashier_queue_id?: number
    AND?: cashier_queueWhereInput | cashier_queueWhereInput[]
    OR?: cashier_queueWhereInput[]
    NOT?: cashier_queueWhereInput | cashier_queueWhereInput[]
    patient_hn?: StringFilter<"cashier_queue"> | string
    patient_name?: StringFilter<"cashier_queue"> | string
    vn?: StringFilter<"cashier_queue"> | string
    queue_no?: StringFilter<"cashier_queue"> | string
    patient_location_code?: StringFilter<"cashier_queue"> | string
    patient_location_name?: StringFilter<"cashier_queue"> | string
    discharge_location_code?: StringFilter<"cashier_queue"> | string
    discharge_location_name?: StringFilter<"cashier_queue"> | string
    discharge_building?: StringFilter<"cashier_queue"> | string
    meddischarge_date?: StringFilter<"cashier_queue"> | string
    meddischarge_time?: StringFilter<"cashier_queue"> | string
    accepted_date?: StringFilter<"cashier_queue"> | string
    accepted_time?: StringFilter<"cashier_queue"> | string
    collected_date?: StringFilter<"cashier_queue"> | string
    collected_time?: StringFilter<"cashier_queue"> | string
    is_cashier?: Enumcashier_queue_is_cashierFilter<"cashier_queue"> | $Enums.cashier_queue_is_cashier
    medicine_status?: Enumcashier_queue_medicine_statusNullableFilter<"cashier_queue"> | $Enums.cashier_queue_medicine_status | null
    medicine_room?: IntNullableFilter<"cashier_queue"> | number | null
    cashier_status?: Enumcashier_queue_cashier_statusNullableFilter<"cashier_queue"> | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: Enumcashier_queue_cashier_status_mobileNullableFilter<"cashier_queue"> | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: Enumcashier_queue_payment_typeNullableFilter<"cashier_queue"> | $Enums.cashier_queue_payment_type | null
    cashier_room?: IntNullableFilter<"cashier_queue"> | number | null
    remark?: StringNullableFilter<"cashier_queue"> | string | null
    method_status?: Enumcashier_queue_method_statusNullableFilter<"cashier_queue"> | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeFilter<"cashier_queue"> | Date | string
    updated_at?: DateTimeFilter<"cashier_queue"> | Date | string
    lang?: Enumcashier_queue_langNullableFilter<"cashier_queue"> | $Enums.cashier_queue_lang | null
  }, "cashier_queue_id">

  export type cashier_queueOrderByWithAggregationInput = {
    cashier_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    patient_location_code?: SortOrder
    patient_location_name?: SortOrder
    discharge_location_code?: SortOrder
    discharge_location_name?: SortOrder
    discharge_building?: SortOrder
    meddischarge_date?: SortOrder
    meddischarge_time?: SortOrder
    accepted_date?: SortOrder
    accepted_time?: SortOrder
    collected_date?: SortOrder
    collected_time?: SortOrder
    is_cashier?: SortOrder
    medicine_status?: SortOrderInput | SortOrder
    medicine_room?: SortOrderInput | SortOrder
    cashier_status?: SortOrderInput | SortOrder
    cashier_status_mobile?: SortOrderInput | SortOrder
    payment_type?: SortOrderInput | SortOrder
    cashier_room?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    method_status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrderInput | SortOrder
    _count?: cashier_queueCountOrderByAggregateInput
    _avg?: cashier_queueAvgOrderByAggregateInput
    _max?: cashier_queueMaxOrderByAggregateInput
    _min?: cashier_queueMinOrderByAggregateInput
    _sum?: cashier_queueSumOrderByAggregateInput
  }

  export type cashier_queueScalarWhereWithAggregatesInput = {
    AND?: cashier_queueScalarWhereWithAggregatesInput | cashier_queueScalarWhereWithAggregatesInput[]
    OR?: cashier_queueScalarWhereWithAggregatesInput[]
    NOT?: cashier_queueScalarWhereWithAggregatesInput | cashier_queueScalarWhereWithAggregatesInput[]
    cashier_queue_id?: IntWithAggregatesFilter<"cashier_queue"> | number
    patient_hn?: StringWithAggregatesFilter<"cashier_queue"> | string
    patient_name?: StringWithAggregatesFilter<"cashier_queue"> | string
    vn?: StringWithAggregatesFilter<"cashier_queue"> | string
    queue_no?: StringWithAggregatesFilter<"cashier_queue"> | string
    patient_location_code?: StringWithAggregatesFilter<"cashier_queue"> | string
    patient_location_name?: StringWithAggregatesFilter<"cashier_queue"> | string
    discharge_location_code?: StringWithAggregatesFilter<"cashier_queue"> | string
    discharge_location_name?: StringWithAggregatesFilter<"cashier_queue"> | string
    discharge_building?: StringWithAggregatesFilter<"cashier_queue"> | string
    meddischarge_date?: StringWithAggregatesFilter<"cashier_queue"> | string
    meddischarge_time?: StringWithAggregatesFilter<"cashier_queue"> | string
    accepted_date?: StringWithAggregatesFilter<"cashier_queue"> | string
    accepted_time?: StringWithAggregatesFilter<"cashier_queue"> | string
    collected_date?: StringWithAggregatesFilter<"cashier_queue"> | string
    collected_time?: StringWithAggregatesFilter<"cashier_queue"> | string
    is_cashier?: Enumcashier_queue_is_cashierWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_is_cashier
    medicine_status?: Enumcashier_queue_medicine_statusNullableWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_medicine_status | null
    medicine_room?: IntNullableWithAggregatesFilter<"cashier_queue"> | number | null
    cashier_status?: Enumcashier_queue_cashier_statusNullableWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: Enumcashier_queue_cashier_status_mobileNullableWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: Enumcashier_queue_payment_typeNullableWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_payment_type | null
    cashier_room?: IntNullableWithAggregatesFilter<"cashier_queue"> | number | null
    remark?: StringNullableWithAggregatesFilter<"cashier_queue"> | string | null
    method_status?: Enumcashier_queue_method_statusNullableWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeWithAggregatesFilter<"cashier_queue"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cashier_queue"> | Date | string
    lang?: Enumcashier_queue_langNullableWithAggregatesFilter<"cashier_queue"> | $Enums.cashier_queue_lang | null
  }

  export type doctor_queueWhereInput = {
    AND?: doctor_queueWhereInput | doctor_queueWhereInput[]
    OR?: doctor_queueWhereInput[]
    NOT?: doctor_queueWhereInput | doctor_queueWhereInput[]
    doctor_queue_id?: IntFilter<"doctor_queue"> | number
    patient_hn?: StringNullableFilter<"doctor_queue"> | string | null
    patient_name?: StringNullableFilter<"doctor_queue"> | string | null
    vn?: StringNullableFilter<"doctor_queue"> | string | null
    doctor_code?: StringNullableFilter<"doctor_queue"> | string | null
    doctor_name?: StringNullableFilter<"doctor_queue"> | string | null
    location_code?: StringNullableFilter<"doctor_queue"> | string | null
    location_name?: StringNullableFilter<"doctor_queue"> | string | null
    building?: StringNullableFilter<"doctor_queue"> | string | null
    service?: StringNullableFilter<"doctor_queue"> | string | null
    appt_row_id?: StringNullableFilter<"doctor_queue"> | string | null
    appt_date?: StringNullableFilter<"doctor_queue"> | string | null
    appt_time?: StringNullableFilter<"doctor_queue"> | string | null
    arrive_date?: StringNullableFilter<"doctor_queue"> | string | null
    arrive_time?: StringNullableFilter<"doctor_queue"> | string | null
    queue_no?: StringNullableFilter<"doctor_queue"> | string | null
    status_lab?: StringNullableFilter<"doctor_queue"> | string | null
    status_xray?: StringNullableFilter<"doctor_queue"> | string | null
    is_emergency?: Enumdoctor_queue_is_emergencyNullableFilter<"doctor_queue"> | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusFilter<"doctor_queue"> | $Enums.doctor_queue_status
    created_at?: DateTimeFilter<"doctor_queue"> | Date | string
    updated_at?: DateTimeFilter<"doctor_queue"> | Date | string
    lang?: Enumdoctor_queue_langNullableFilter<"doctor_queue"> | $Enums.doctor_queue_lang | null
  }

  export type doctor_queueOrderByWithRelationInput = {
    doctor_queue_id?: SortOrder
    patient_hn?: SortOrderInput | SortOrder
    patient_name?: SortOrderInput | SortOrder
    vn?: SortOrderInput | SortOrder
    doctor_code?: SortOrderInput | SortOrder
    doctor_name?: SortOrderInput | SortOrder
    location_code?: SortOrderInput | SortOrder
    location_name?: SortOrderInput | SortOrder
    building?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    appt_row_id?: SortOrderInput | SortOrder
    appt_date?: SortOrderInput | SortOrder
    appt_time?: SortOrderInput | SortOrder
    arrive_date?: SortOrderInput | SortOrder
    arrive_time?: SortOrderInput | SortOrder
    queue_no?: SortOrderInput | SortOrder
    status_lab?: SortOrderInput | SortOrder
    status_xray?: SortOrderInput | SortOrder
    is_emergency?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrderInput | SortOrder
  }

  export type doctor_queueWhereUniqueInput = Prisma.AtLeast<{
    doctor_queue_id?: number
    AND?: doctor_queueWhereInput | doctor_queueWhereInput[]
    OR?: doctor_queueWhereInput[]
    NOT?: doctor_queueWhereInput | doctor_queueWhereInput[]
    patient_hn?: StringNullableFilter<"doctor_queue"> | string | null
    patient_name?: StringNullableFilter<"doctor_queue"> | string | null
    vn?: StringNullableFilter<"doctor_queue"> | string | null
    doctor_code?: StringNullableFilter<"doctor_queue"> | string | null
    doctor_name?: StringNullableFilter<"doctor_queue"> | string | null
    location_code?: StringNullableFilter<"doctor_queue"> | string | null
    location_name?: StringNullableFilter<"doctor_queue"> | string | null
    building?: StringNullableFilter<"doctor_queue"> | string | null
    service?: StringNullableFilter<"doctor_queue"> | string | null
    appt_row_id?: StringNullableFilter<"doctor_queue"> | string | null
    appt_date?: StringNullableFilter<"doctor_queue"> | string | null
    appt_time?: StringNullableFilter<"doctor_queue"> | string | null
    arrive_date?: StringNullableFilter<"doctor_queue"> | string | null
    arrive_time?: StringNullableFilter<"doctor_queue"> | string | null
    queue_no?: StringNullableFilter<"doctor_queue"> | string | null
    status_lab?: StringNullableFilter<"doctor_queue"> | string | null
    status_xray?: StringNullableFilter<"doctor_queue"> | string | null
    is_emergency?: Enumdoctor_queue_is_emergencyNullableFilter<"doctor_queue"> | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusFilter<"doctor_queue"> | $Enums.doctor_queue_status
    created_at?: DateTimeFilter<"doctor_queue"> | Date | string
    updated_at?: DateTimeFilter<"doctor_queue"> | Date | string
    lang?: Enumdoctor_queue_langNullableFilter<"doctor_queue"> | $Enums.doctor_queue_lang | null
  }, "doctor_queue_id">

  export type doctor_queueOrderByWithAggregationInput = {
    doctor_queue_id?: SortOrder
    patient_hn?: SortOrderInput | SortOrder
    patient_name?: SortOrderInput | SortOrder
    vn?: SortOrderInput | SortOrder
    doctor_code?: SortOrderInput | SortOrder
    doctor_name?: SortOrderInput | SortOrder
    location_code?: SortOrderInput | SortOrder
    location_name?: SortOrderInput | SortOrder
    building?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    appt_row_id?: SortOrderInput | SortOrder
    appt_date?: SortOrderInput | SortOrder
    appt_time?: SortOrderInput | SortOrder
    arrive_date?: SortOrderInput | SortOrder
    arrive_time?: SortOrderInput | SortOrder
    queue_no?: SortOrderInput | SortOrder
    status_lab?: SortOrderInput | SortOrder
    status_xray?: SortOrderInput | SortOrder
    is_emergency?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrderInput | SortOrder
    _count?: doctor_queueCountOrderByAggregateInput
    _avg?: doctor_queueAvgOrderByAggregateInput
    _max?: doctor_queueMaxOrderByAggregateInput
    _min?: doctor_queueMinOrderByAggregateInput
    _sum?: doctor_queueSumOrderByAggregateInput
  }

  export type doctor_queueScalarWhereWithAggregatesInput = {
    AND?: doctor_queueScalarWhereWithAggregatesInput | doctor_queueScalarWhereWithAggregatesInput[]
    OR?: doctor_queueScalarWhereWithAggregatesInput[]
    NOT?: doctor_queueScalarWhereWithAggregatesInput | doctor_queueScalarWhereWithAggregatesInput[]
    doctor_queue_id?: IntWithAggregatesFilter<"doctor_queue"> | number
    patient_hn?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    patient_name?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    vn?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    doctor_code?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    doctor_name?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    location_code?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    location_name?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    building?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    service?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    appt_row_id?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    appt_date?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    appt_time?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    arrive_date?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    arrive_time?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    queue_no?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    status_lab?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    status_xray?: StringNullableWithAggregatesFilter<"doctor_queue"> | string | null
    is_emergency?: Enumdoctor_queue_is_emergencyNullableWithAggregatesFilter<"doctor_queue"> | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusWithAggregatesFilter<"doctor_queue"> | $Enums.doctor_queue_status
    created_at?: DateTimeWithAggregatesFilter<"doctor_queue"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"doctor_queue"> | Date | string
    lang?: Enumdoctor_queue_langNullableWithAggregatesFilter<"doctor_queue"> | $Enums.doctor_queue_lang | null
  }

  export type appointmentsCreateInput = {
    appointment_id: number
    rights: $Enums.appointments_rights
    appoint_date: Date | string
    appoint_time: string
    clinic?: string | null
    doctor?: string | null
    users_mobile_id: number
    status: $Enums.appointments_status
    created_by: number
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type appointmentsUncheckedCreateInput = {
    appointment_id: number
    rights: $Enums.appointments_rights
    appoint_date: Date | string
    appoint_time: string
    clinic?: string | null
    doctor?: string | null
    users_mobile_id: number
    status: $Enums.appointments_status
    created_by: number
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type appointmentsUpdateInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    rights?: Enumappointments_rightsFieldUpdateOperationsInput | $Enums.appointments_rights
    appoint_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appoint_time?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    status?: Enumappointments_statusFieldUpdateOperationsInput | $Enums.appointments_status
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentsUncheckedUpdateInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    rights?: Enumappointments_rightsFieldUpdateOperationsInput | $Enums.appointments_rights
    appoint_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appoint_time?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    status?: Enumappointments_statusFieldUpdateOperationsInput | $Enums.appointments_status
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentsCreateManyInput = {
    appointment_id: number
    rights: $Enums.appointments_rights
    appoint_date: Date | string
    appoint_time: string
    clinic?: string | null
    doctor?: string | null
    users_mobile_id: number
    status: $Enums.appointments_status
    created_by: number
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type appointmentsUpdateManyMutationInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    rights?: Enumappointments_rightsFieldUpdateOperationsInput | $Enums.appointments_rights
    appoint_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appoint_time?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    status?: Enumappointments_statusFieldUpdateOperationsInput | $Enums.appointments_status
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentsUncheckedUpdateManyInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    rights?: Enumappointments_rightsFieldUpdateOperationsInput | $Enums.appointments_rights
    appoint_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appoint_time?: StringFieldUpdateOperationsInput | string
    clinic?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: NullableStringFieldUpdateOperationsInput | string | null
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    status?: Enumappointments_statusFieldUpdateOperationsInput | $Enums.appointments_status
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type billingCreateInput = {
    billing_id: number
    vn: string
    queue_no: string
    bill_no: string
    order_id?: string | null
    charge_id?: string | null
    total_price: number
    patient_hn: string
    patient_name: string
    cashier_queue_id?: number | null
    has_webhook_notify?: $Enums.billing_has_webhook_notify
    created_at?: Date | string
    updated_at?: Date | string
    payment_status?: $Enums.billing_payment_status | null
  }

  export type billingUncheckedCreateInput = {
    billing_id: number
    vn: string
    queue_no: string
    bill_no: string
    order_id?: string | null
    charge_id?: string | null
    total_price: number
    patient_hn: string
    patient_name: string
    cashier_queue_id?: number | null
    has_webhook_notify?: $Enums.billing_has_webhook_notify
    created_at?: Date | string
    updated_at?: Date | string
    payment_status?: $Enums.billing_payment_status | null
  }

  export type billingUpdateInput = {
    billing_id?: IntFieldUpdateOperationsInput | number
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    charge_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    cashier_queue_id?: NullableIntFieldUpdateOperationsInput | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyFieldUpdateOperationsInput | $Enums.billing_has_webhook_notify
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: NullableEnumbilling_payment_statusFieldUpdateOperationsInput | $Enums.billing_payment_status | null
  }

  export type billingUncheckedUpdateInput = {
    billing_id?: IntFieldUpdateOperationsInput | number
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    charge_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    cashier_queue_id?: NullableIntFieldUpdateOperationsInput | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyFieldUpdateOperationsInput | $Enums.billing_has_webhook_notify
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: NullableEnumbilling_payment_statusFieldUpdateOperationsInput | $Enums.billing_payment_status | null
  }

  export type billingCreateManyInput = {
    billing_id: number
    vn: string
    queue_no: string
    bill_no: string
    order_id?: string | null
    charge_id?: string | null
    total_price: number
    patient_hn: string
    patient_name: string
    cashier_queue_id?: number | null
    has_webhook_notify?: $Enums.billing_has_webhook_notify
    created_at?: Date | string
    updated_at?: Date | string
    payment_status?: $Enums.billing_payment_status | null
  }

  export type billingUpdateManyMutationInput = {
    billing_id?: IntFieldUpdateOperationsInput | number
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    charge_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    cashier_queue_id?: NullableIntFieldUpdateOperationsInput | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyFieldUpdateOperationsInput | $Enums.billing_has_webhook_notify
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: NullableEnumbilling_payment_statusFieldUpdateOperationsInput | $Enums.billing_payment_status | null
  }

  export type billingUncheckedUpdateManyInput = {
    billing_id?: IntFieldUpdateOperationsInput | number
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    charge_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: FloatFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    cashier_queue_id?: NullableIntFieldUpdateOperationsInput | number | null
    has_webhook_notify?: Enumbilling_has_webhook_notifyFieldUpdateOperationsInput | $Enums.billing_has_webhook_notify
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: NullableEnumbilling_payment_statusFieldUpdateOperationsInput | $Enums.billing_payment_status | null
  }

  export type broadcast_masterCreateInput = {
    broadcast_master_id: number
    message_title: string
    message_body: string
    date: Date | string
    image?: string | null
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    link_url?: string | null
  }

  export type broadcast_masterUncheckedCreateInput = {
    broadcast_master_id: number
    message_title: string
    message_body: string
    date: Date | string
    image?: string | null
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    link_url?: string | null
  }

  export type broadcast_masterUpdateInput = {
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    message_title?: StringFieldUpdateOperationsInput | string
    message_body?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type broadcast_masterUncheckedUpdateInput = {
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    message_title?: StringFieldUpdateOperationsInput | string
    message_body?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type broadcast_masterCreateManyInput = {
    broadcast_master_id: number
    message_title: string
    message_body: string
    date: Date | string
    image?: string | null
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    link_url?: string | null
  }

  export type broadcast_masterUpdateManyMutationInput = {
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    message_title?: StringFieldUpdateOperationsInput | string
    message_body?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type broadcast_masterUncheckedUpdateManyInput = {
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    message_title?: StringFieldUpdateOperationsInput | string
    message_body?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type broadcast_master_has_users_mobileCreateInput = {
    broadcast_master_has_users_mobile_id: number
    broadcast_master_id: number
    users_mobile_id: number
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type broadcast_master_has_users_mobileUncheckedCreateInput = {
    broadcast_master_has_users_mobile_id: number
    broadcast_master_id: number
    users_mobile_id: number
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type broadcast_master_has_users_mobileUpdateInput = {
    broadcast_master_has_users_mobile_id?: IntFieldUpdateOperationsInput | number
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type broadcast_master_has_users_mobileUncheckedUpdateInput = {
    broadcast_master_has_users_mobile_id?: IntFieldUpdateOperationsInput | number
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type broadcast_master_has_users_mobileCreateManyInput = {
    broadcast_master_has_users_mobile_id: number
    broadcast_master_id: number
    users_mobile_id: number
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type broadcast_master_has_users_mobileUpdateManyMutationInput = {
    broadcast_master_has_users_mobile_id?: IntFieldUpdateOperationsInput | number
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type broadcast_master_has_users_mobileUncheckedUpdateManyInput = {
    broadcast_master_has_users_mobile_id?: IntFieldUpdateOperationsInput | number
    broadcast_master_id?: IntFieldUpdateOperationsInput | number
    users_mobile_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type buildingCreateInput = {
    building_id: number
    name: string
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type buildingUncheckedCreateInput = {
    building_id: number
    name: string
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type buildingUpdateInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type buildingUncheckedUpdateInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type buildingCreateManyInput = {
    building_id: number
    name: string
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type buildingUpdateManyMutationInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type buildingUncheckedUpdateManyInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cashier_queueCreateInput = {
    cashier_queue_id: number
    patient_hn: string
    patient_name: string
    vn: string
    queue_no: string
    patient_location_code: string
    patient_location_name: string
    discharge_location_code: string
    discharge_location_name: string
    discharge_building: string
    meddischarge_date: string
    meddischarge_time: string
    accepted_date: string
    accepted_time: string
    collected_date: string
    collected_time: string
    is_cashier: $Enums.cashier_queue_is_cashier
    medicine_status?: $Enums.cashier_queue_medicine_status | null
    medicine_room?: number | null
    cashier_status?: $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: $Enums.cashier_queue_payment_type | null
    cashier_room?: number | null
    remark?: string | null
    method_status?: $Enums.cashier_queue_method_status | null
    created_at?: Date | string
    updated_at?: Date | string
    lang?: $Enums.cashier_queue_lang | null
  }

  export type cashier_queueUncheckedCreateInput = {
    cashier_queue_id: number
    patient_hn: string
    patient_name: string
    vn: string
    queue_no: string
    patient_location_code: string
    patient_location_name: string
    discharge_location_code: string
    discharge_location_name: string
    discharge_building: string
    meddischarge_date: string
    meddischarge_time: string
    accepted_date: string
    accepted_time: string
    collected_date: string
    collected_time: string
    is_cashier: $Enums.cashier_queue_is_cashier
    medicine_status?: $Enums.cashier_queue_medicine_status | null
    medicine_room?: number | null
    cashier_status?: $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: $Enums.cashier_queue_payment_type | null
    cashier_room?: number | null
    remark?: string | null
    method_status?: $Enums.cashier_queue_method_status | null
    created_at?: Date | string
    updated_at?: Date | string
    lang?: $Enums.cashier_queue_lang | null
  }

  export type cashier_queueUpdateInput = {
    cashier_queue_id?: IntFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    patient_location_code?: StringFieldUpdateOperationsInput | string
    patient_location_name?: StringFieldUpdateOperationsInput | string
    discharge_location_code?: StringFieldUpdateOperationsInput | string
    discharge_location_name?: StringFieldUpdateOperationsInput | string
    discharge_building?: StringFieldUpdateOperationsInput | string
    meddischarge_date?: StringFieldUpdateOperationsInput | string
    meddischarge_time?: StringFieldUpdateOperationsInput | string
    accepted_date?: StringFieldUpdateOperationsInput | string
    accepted_time?: StringFieldUpdateOperationsInput | string
    collected_date?: StringFieldUpdateOperationsInput | string
    collected_time?: StringFieldUpdateOperationsInput | string
    is_cashier?: Enumcashier_queue_is_cashierFieldUpdateOperationsInput | $Enums.cashier_queue_is_cashier
    medicine_status?: NullableEnumcashier_queue_medicine_statusFieldUpdateOperationsInput | $Enums.cashier_queue_medicine_status | null
    medicine_room?: NullableIntFieldUpdateOperationsInput | number | null
    cashier_status?: NullableEnumcashier_queue_cashier_statusFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: NullableEnumcashier_queue_cashier_status_mobileFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: NullableEnumcashier_queue_payment_typeFieldUpdateOperationsInput | $Enums.cashier_queue_payment_type | null
    cashier_room?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    method_status?: NullableEnumcashier_queue_method_statusFieldUpdateOperationsInput | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumcashier_queue_langFieldUpdateOperationsInput | $Enums.cashier_queue_lang | null
  }

  export type cashier_queueUncheckedUpdateInput = {
    cashier_queue_id?: IntFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    patient_location_code?: StringFieldUpdateOperationsInput | string
    patient_location_name?: StringFieldUpdateOperationsInput | string
    discharge_location_code?: StringFieldUpdateOperationsInput | string
    discharge_location_name?: StringFieldUpdateOperationsInput | string
    discharge_building?: StringFieldUpdateOperationsInput | string
    meddischarge_date?: StringFieldUpdateOperationsInput | string
    meddischarge_time?: StringFieldUpdateOperationsInput | string
    accepted_date?: StringFieldUpdateOperationsInput | string
    accepted_time?: StringFieldUpdateOperationsInput | string
    collected_date?: StringFieldUpdateOperationsInput | string
    collected_time?: StringFieldUpdateOperationsInput | string
    is_cashier?: Enumcashier_queue_is_cashierFieldUpdateOperationsInput | $Enums.cashier_queue_is_cashier
    medicine_status?: NullableEnumcashier_queue_medicine_statusFieldUpdateOperationsInput | $Enums.cashier_queue_medicine_status | null
    medicine_room?: NullableIntFieldUpdateOperationsInput | number | null
    cashier_status?: NullableEnumcashier_queue_cashier_statusFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: NullableEnumcashier_queue_cashier_status_mobileFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: NullableEnumcashier_queue_payment_typeFieldUpdateOperationsInput | $Enums.cashier_queue_payment_type | null
    cashier_room?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    method_status?: NullableEnumcashier_queue_method_statusFieldUpdateOperationsInput | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumcashier_queue_langFieldUpdateOperationsInput | $Enums.cashier_queue_lang | null
  }

  export type cashier_queueCreateManyInput = {
    cashier_queue_id: number
    patient_hn: string
    patient_name: string
    vn: string
    queue_no: string
    patient_location_code: string
    patient_location_name: string
    discharge_location_code: string
    discharge_location_name: string
    discharge_building: string
    meddischarge_date: string
    meddischarge_time: string
    accepted_date: string
    accepted_time: string
    collected_date: string
    collected_time: string
    is_cashier: $Enums.cashier_queue_is_cashier
    medicine_status?: $Enums.cashier_queue_medicine_status | null
    medicine_room?: number | null
    cashier_status?: $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: $Enums.cashier_queue_payment_type | null
    cashier_room?: number | null
    remark?: string | null
    method_status?: $Enums.cashier_queue_method_status | null
    created_at?: Date | string
    updated_at?: Date | string
    lang?: $Enums.cashier_queue_lang | null
  }

  export type cashier_queueUpdateManyMutationInput = {
    cashier_queue_id?: IntFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    patient_location_code?: StringFieldUpdateOperationsInput | string
    patient_location_name?: StringFieldUpdateOperationsInput | string
    discharge_location_code?: StringFieldUpdateOperationsInput | string
    discharge_location_name?: StringFieldUpdateOperationsInput | string
    discharge_building?: StringFieldUpdateOperationsInput | string
    meddischarge_date?: StringFieldUpdateOperationsInput | string
    meddischarge_time?: StringFieldUpdateOperationsInput | string
    accepted_date?: StringFieldUpdateOperationsInput | string
    accepted_time?: StringFieldUpdateOperationsInput | string
    collected_date?: StringFieldUpdateOperationsInput | string
    collected_time?: StringFieldUpdateOperationsInput | string
    is_cashier?: Enumcashier_queue_is_cashierFieldUpdateOperationsInput | $Enums.cashier_queue_is_cashier
    medicine_status?: NullableEnumcashier_queue_medicine_statusFieldUpdateOperationsInput | $Enums.cashier_queue_medicine_status | null
    medicine_room?: NullableIntFieldUpdateOperationsInput | number | null
    cashier_status?: NullableEnumcashier_queue_cashier_statusFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: NullableEnumcashier_queue_cashier_status_mobileFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: NullableEnumcashier_queue_payment_typeFieldUpdateOperationsInput | $Enums.cashier_queue_payment_type | null
    cashier_room?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    method_status?: NullableEnumcashier_queue_method_statusFieldUpdateOperationsInput | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumcashier_queue_langFieldUpdateOperationsInput | $Enums.cashier_queue_lang | null
  }

  export type cashier_queueUncheckedUpdateManyInput = {
    cashier_queue_id?: IntFieldUpdateOperationsInput | number
    patient_hn?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    vn?: StringFieldUpdateOperationsInput | string
    queue_no?: StringFieldUpdateOperationsInput | string
    patient_location_code?: StringFieldUpdateOperationsInput | string
    patient_location_name?: StringFieldUpdateOperationsInput | string
    discharge_location_code?: StringFieldUpdateOperationsInput | string
    discharge_location_name?: StringFieldUpdateOperationsInput | string
    discharge_building?: StringFieldUpdateOperationsInput | string
    meddischarge_date?: StringFieldUpdateOperationsInput | string
    meddischarge_time?: StringFieldUpdateOperationsInput | string
    accepted_date?: StringFieldUpdateOperationsInput | string
    accepted_time?: StringFieldUpdateOperationsInput | string
    collected_date?: StringFieldUpdateOperationsInput | string
    collected_time?: StringFieldUpdateOperationsInput | string
    is_cashier?: Enumcashier_queue_is_cashierFieldUpdateOperationsInput | $Enums.cashier_queue_is_cashier
    medicine_status?: NullableEnumcashier_queue_medicine_statusFieldUpdateOperationsInput | $Enums.cashier_queue_medicine_status | null
    medicine_room?: NullableIntFieldUpdateOperationsInput | number | null
    cashier_status?: NullableEnumcashier_queue_cashier_statusFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status | null
    cashier_status_mobile?: NullableEnumcashier_queue_cashier_status_mobileFieldUpdateOperationsInput | $Enums.cashier_queue_cashier_status_mobile | null
    payment_type?: NullableEnumcashier_queue_payment_typeFieldUpdateOperationsInput | $Enums.cashier_queue_payment_type | null
    cashier_room?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    method_status?: NullableEnumcashier_queue_method_statusFieldUpdateOperationsInput | $Enums.cashier_queue_method_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumcashier_queue_langFieldUpdateOperationsInput | $Enums.cashier_queue_lang | null
  }

  export type doctor_queueCreateInput = {
    patient_hn?: string | null
    patient_name?: string | null
    vn?: string | null
    doctor_code?: string | null
    doctor_name?: string | null
    location_code?: string | null
    location_name?: string | null
    building?: string | null
    service?: string | null
    appt_row_id?: string | null
    appt_date?: string | null
    appt_time?: string | null
    arrive_date?: string | null
    arrive_time?: string | null
    queue_no?: string | null
    status_lab?: string | null
    status_xray?: string | null
    is_emergency?: $Enums.doctor_queue_is_emergency | null
    status?: $Enums.doctor_queue_status
    created_at?: Date | string
    updated_at?: Date | string
    lang?: $Enums.doctor_queue_lang | null
  }

  export type doctor_queueUncheckedCreateInput = {
    doctor_queue_id?: number
    patient_hn?: string | null
    patient_name?: string | null
    vn?: string | null
    doctor_code?: string | null
    doctor_name?: string | null
    location_code?: string | null
    location_name?: string | null
    building?: string | null
    service?: string | null
    appt_row_id?: string | null
    appt_date?: string | null
    appt_time?: string | null
    arrive_date?: string | null
    arrive_time?: string | null
    queue_no?: string | null
    status_lab?: string | null
    status_xray?: string | null
    is_emergency?: $Enums.doctor_queue_is_emergency | null
    status?: $Enums.doctor_queue_status
    created_at?: Date | string
    updated_at?: Date | string
    lang?: $Enums.doctor_queue_lang | null
  }

  export type doctor_queueUpdateInput = {
    patient_hn?: NullableStringFieldUpdateOperationsInput | string | null
    patient_name?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_code?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_code?: NullableStringFieldUpdateOperationsInput | string | null
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    appt_row_id?: NullableStringFieldUpdateOperationsInput | string | null
    appt_date?: NullableStringFieldUpdateOperationsInput | string | null
    appt_time?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_date?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_time?: NullableStringFieldUpdateOperationsInput | string | null
    queue_no?: NullableStringFieldUpdateOperationsInput | string | null
    status_lab?: NullableStringFieldUpdateOperationsInput | string | null
    status_xray?: NullableStringFieldUpdateOperationsInput | string | null
    is_emergency?: NullableEnumdoctor_queue_is_emergencyFieldUpdateOperationsInput | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusFieldUpdateOperationsInput | $Enums.doctor_queue_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumdoctor_queue_langFieldUpdateOperationsInput | $Enums.doctor_queue_lang | null
  }

  export type doctor_queueUncheckedUpdateInput = {
    doctor_queue_id?: IntFieldUpdateOperationsInput | number
    patient_hn?: NullableStringFieldUpdateOperationsInput | string | null
    patient_name?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_code?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_code?: NullableStringFieldUpdateOperationsInput | string | null
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    appt_row_id?: NullableStringFieldUpdateOperationsInput | string | null
    appt_date?: NullableStringFieldUpdateOperationsInput | string | null
    appt_time?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_date?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_time?: NullableStringFieldUpdateOperationsInput | string | null
    queue_no?: NullableStringFieldUpdateOperationsInput | string | null
    status_lab?: NullableStringFieldUpdateOperationsInput | string | null
    status_xray?: NullableStringFieldUpdateOperationsInput | string | null
    is_emergency?: NullableEnumdoctor_queue_is_emergencyFieldUpdateOperationsInput | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusFieldUpdateOperationsInput | $Enums.doctor_queue_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumdoctor_queue_langFieldUpdateOperationsInput | $Enums.doctor_queue_lang | null
  }

  export type doctor_queueCreateManyInput = {
    doctor_queue_id?: number
    patient_hn?: string | null
    patient_name?: string | null
    vn?: string | null
    doctor_code?: string | null
    doctor_name?: string | null
    location_code?: string | null
    location_name?: string | null
    building?: string | null
    service?: string | null
    appt_row_id?: string | null
    appt_date?: string | null
    appt_time?: string | null
    arrive_date?: string | null
    arrive_time?: string | null
    queue_no?: string | null
    status_lab?: string | null
    status_xray?: string | null
    is_emergency?: $Enums.doctor_queue_is_emergency | null
    status?: $Enums.doctor_queue_status
    created_at?: Date | string
    updated_at?: Date | string
    lang?: $Enums.doctor_queue_lang | null
  }

  export type doctor_queueUpdateManyMutationInput = {
    patient_hn?: NullableStringFieldUpdateOperationsInput | string | null
    patient_name?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_code?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_code?: NullableStringFieldUpdateOperationsInput | string | null
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    appt_row_id?: NullableStringFieldUpdateOperationsInput | string | null
    appt_date?: NullableStringFieldUpdateOperationsInput | string | null
    appt_time?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_date?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_time?: NullableStringFieldUpdateOperationsInput | string | null
    queue_no?: NullableStringFieldUpdateOperationsInput | string | null
    status_lab?: NullableStringFieldUpdateOperationsInput | string | null
    status_xray?: NullableStringFieldUpdateOperationsInput | string | null
    is_emergency?: NullableEnumdoctor_queue_is_emergencyFieldUpdateOperationsInput | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusFieldUpdateOperationsInput | $Enums.doctor_queue_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumdoctor_queue_langFieldUpdateOperationsInput | $Enums.doctor_queue_lang | null
  }

  export type doctor_queueUncheckedUpdateManyInput = {
    doctor_queue_id?: IntFieldUpdateOperationsInput | number
    patient_hn?: NullableStringFieldUpdateOperationsInput | string | null
    patient_name?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_code?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_name?: NullableStringFieldUpdateOperationsInput | string | null
    location_code?: NullableStringFieldUpdateOperationsInput | string | null
    location_name?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    appt_row_id?: NullableStringFieldUpdateOperationsInput | string | null
    appt_date?: NullableStringFieldUpdateOperationsInput | string | null
    appt_time?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_date?: NullableStringFieldUpdateOperationsInput | string | null
    arrive_time?: NullableStringFieldUpdateOperationsInput | string | null
    queue_no?: NullableStringFieldUpdateOperationsInput | string | null
    status_lab?: NullableStringFieldUpdateOperationsInput | string | null
    status_xray?: NullableStringFieldUpdateOperationsInput | string | null
    is_emergency?: NullableEnumdoctor_queue_is_emergencyFieldUpdateOperationsInput | $Enums.doctor_queue_is_emergency | null
    status?: Enumdoctor_queue_statusFieldUpdateOperationsInput | $Enums.doctor_queue_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lang?: NullableEnumdoctor_queue_langFieldUpdateOperationsInput | $Enums.doctor_queue_lang | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumappointments_rightsFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_rights | Enumappointments_rightsFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_rights[]
    notIn?: $Enums.appointments_rights[]
    not?: NestedEnumappointments_rightsFilter<$PrismaModel> | $Enums.appointments_rights
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumappointments_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_status | Enumappointments_statusFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_status[]
    notIn?: $Enums.appointments_status[]
    not?: NestedEnumappointments_statusFilter<$PrismaModel> | $Enums.appointments_status
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type appointmentsCountOrderByAggregateInput = {
    appointment_id?: SortOrder
    rights?: SortOrder
    appoint_date?: SortOrder
    appoint_time?: SortOrder
    clinic?: SortOrder
    doctor?: SortOrder
    users_mobile_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointmentsAvgOrderByAggregateInput = {
    appointment_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type appointmentsMaxOrderByAggregateInput = {
    appointment_id?: SortOrder
    rights?: SortOrder
    appoint_date?: SortOrder
    appoint_time?: SortOrder
    clinic?: SortOrder
    doctor?: SortOrder
    users_mobile_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointmentsMinOrderByAggregateInput = {
    appointment_id?: SortOrder
    rights?: SortOrder
    appoint_date?: SortOrder
    appoint_time?: SortOrder
    clinic?: SortOrder
    doctor?: SortOrder
    users_mobile_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type appointmentsSumOrderByAggregateInput = {
    appointment_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumappointments_rightsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_rights | Enumappointments_rightsFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_rights[]
    notIn?: $Enums.appointments_rights[]
    not?: NestedEnumappointments_rightsWithAggregatesFilter<$PrismaModel> | $Enums.appointments_rights
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumappointments_rightsFilter<$PrismaModel>
    _max?: NestedEnumappointments_rightsFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumappointments_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_status | Enumappointments_statusFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_status[]
    notIn?: $Enums.appointments_status[]
    not?: NestedEnumappointments_statusWithAggregatesFilter<$PrismaModel> | $Enums.appointments_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumappointments_statusFilter<$PrismaModel>
    _max?: NestedEnumappointments_statusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Enumbilling_has_webhook_notifyFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_has_webhook_notify | Enumbilling_has_webhook_notifyFieldRefInput<$PrismaModel>
    in?: $Enums.billing_has_webhook_notify[]
    notIn?: $Enums.billing_has_webhook_notify[]
    not?: NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel> | $Enums.billing_has_webhook_notify
  }

  export type Enumbilling_payment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_payment_status | Enumbilling_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.billing_payment_status[] | null
    notIn?: $Enums.billing_payment_status[] | null
    not?: NestedEnumbilling_payment_statusNullableFilter<$PrismaModel> | $Enums.billing_payment_status | null
  }

  export type billingCountOrderByAggregateInput = {
    billing_id?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    bill_no?: SortOrder
    order_id?: SortOrder
    charge_id?: SortOrder
    total_price?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    cashier_queue_id?: SortOrder
    has_webhook_notify?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_status?: SortOrder
  }

  export type billingAvgOrderByAggregateInput = {
    billing_id?: SortOrder
    total_price?: SortOrder
    cashier_queue_id?: SortOrder
  }

  export type billingMaxOrderByAggregateInput = {
    billing_id?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    bill_no?: SortOrder
    order_id?: SortOrder
    charge_id?: SortOrder
    total_price?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    cashier_queue_id?: SortOrder
    has_webhook_notify?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_status?: SortOrder
  }

  export type billingMinOrderByAggregateInput = {
    billing_id?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    bill_no?: SortOrder
    order_id?: SortOrder
    charge_id?: SortOrder
    total_price?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    cashier_queue_id?: SortOrder
    has_webhook_notify?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_status?: SortOrder
  }

  export type billingSumOrderByAggregateInput = {
    billing_id?: SortOrder
    total_price?: SortOrder
    cashier_queue_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Enumbilling_has_webhook_notifyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_has_webhook_notify | Enumbilling_has_webhook_notifyFieldRefInput<$PrismaModel>
    in?: $Enums.billing_has_webhook_notify[]
    notIn?: $Enums.billing_has_webhook_notify[]
    not?: NestedEnumbilling_has_webhook_notifyWithAggregatesFilter<$PrismaModel> | $Enums.billing_has_webhook_notify
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel>
    _max?: NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel>
  }

  export type Enumbilling_payment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_payment_status | Enumbilling_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.billing_payment_status[] | null
    notIn?: $Enums.billing_payment_status[] | null
    not?: NestedEnumbilling_payment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.billing_payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumbilling_payment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumbilling_payment_statusNullableFilter<$PrismaModel>
  }

  export type broadcast_masterCountOrderByAggregateInput = {
    broadcast_master_id?: SortOrder
    message_title?: SortOrder
    message_body?: SortOrder
    date?: SortOrder
    image?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    link_url?: SortOrder
  }

  export type broadcast_masterAvgOrderByAggregateInput = {
    broadcast_master_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type broadcast_masterMaxOrderByAggregateInput = {
    broadcast_master_id?: SortOrder
    message_title?: SortOrder
    message_body?: SortOrder
    date?: SortOrder
    image?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    link_url?: SortOrder
  }

  export type broadcast_masterMinOrderByAggregateInput = {
    broadcast_master_id?: SortOrder
    message_title?: SortOrder
    message_body?: SortOrder
    date?: SortOrder
    image?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    link_url?: SortOrder
  }

  export type broadcast_masterSumOrderByAggregateInput = {
    broadcast_master_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type broadcast_master_has_users_mobileCountOrderByAggregateInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type broadcast_master_has_users_mobileAvgOrderByAggregateInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type broadcast_master_has_users_mobileMaxOrderByAggregateInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type broadcast_master_has_users_mobileMinOrderByAggregateInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type broadcast_master_has_users_mobileSumOrderByAggregateInput = {
    broadcast_master_has_users_mobile_id?: SortOrder
    broadcast_master_id?: SortOrder
    users_mobile_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type buildingCountOrderByAggregateInput = {
    building_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type buildingAvgOrderByAggregateInput = {
    building_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type buildingMaxOrderByAggregateInput = {
    building_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type buildingMinOrderByAggregateInput = {
    building_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type buildingSumOrderByAggregateInput = {
    building_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type Enumcashier_queue_is_cashierFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_is_cashier | Enumcashier_queue_is_cashierFieldRefInput<$PrismaModel>
    in?: $Enums.cashier_queue_is_cashier[]
    notIn?: $Enums.cashier_queue_is_cashier[]
    not?: NestedEnumcashier_queue_is_cashierFilter<$PrismaModel> | $Enums.cashier_queue_is_cashier
  }

  export type Enumcashier_queue_medicine_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_medicine_status | Enumcashier_queue_medicine_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_medicine_status[] | null
    notIn?: $Enums.cashier_queue_medicine_status[] | null
    not?: NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel> | $Enums.cashier_queue_medicine_status | null
  }

  export type Enumcashier_queue_cashier_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status | Enumcashier_queue_cashier_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status[] | null
    notIn?: $Enums.cashier_queue_cashier_status[] | null
    not?: NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status | null
  }

  export type Enumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status_mobile | Enumcashier_queue_cashier_status_mobileFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status_mobile[] | null
    notIn?: $Enums.cashier_queue_cashier_status_mobile[] | null
    not?: NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status_mobile | null
  }

  export type Enumcashier_queue_payment_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_payment_type | Enumcashier_queue_payment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_payment_type[] | null
    notIn?: $Enums.cashier_queue_payment_type[] | null
    not?: NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel> | $Enums.cashier_queue_payment_type | null
  }

  export type Enumcashier_queue_method_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_method_status | Enumcashier_queue_method_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_method_status[] | null
    notIn?: $Enums.cashier_queue_method_status[] | null
    not?: NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel> | $Enums.cashier_queue_method_status | null
  }

  export type Enumcashier_queue_langNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_lang | Enumcashier_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_lang[] | null
    notIn?: $Enums.cashier_queue_lang[] | null
    not?: NestedEnumcashier_queue_langNullableFilter<$PrismaModel> | $Enums.cashier_queue_lang | null
  }

  export type cashier_queueCountOrderByAggregateInput = {
    cashier_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    patient_location_code?: SortOrder
    patient_location_name?: SortOrder
    discharge_location_code?: SortOrder
    discharge_location_name?: SortOrder
    discharge_building?: SortOrder
    meddischarge_date?: SortOrder
    meddischarge_time?: SortOrder
    accepted_date?: SortOrder
    accepted_time?: SortOrder
    collected_date?: SortOrder
    collected_time?: SortOrder
    is_cashier?: SortOrder
    medicine_status?: SortOrder
    medicine_room?: SortOrder
    cashier_status?: SortOrder
    cashier_status_mobile?: SortOrder
    payment_type?: SortOrder
    cashier_room?: SortOrder
    remark?: SortOrder
    method_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrder
  }

  export type cashier_queueAvgOrderByAggregateInput = {
    cashier_queue_id?: SortOrder
    medicine_room?: SortOrder
    cashier_room?: SortOrder
  }

  export type cashier_queueMaxOrderByAggregateInput = {
    cashier_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    patient_location_code?: SortOrder
    patient_location_name?: SortOrder
    discharge_location_code?: SortOrder
    discharge_location_name?: SortOrder
    discharge_building?: SortOrder
    meddischarge_date?: SortOrder
    meddischarge_time?: SortOrder
    accepted_date?: SortOrder
    accepted_time?: SortOrder
    collected_date?: SortOrder
    collected_time?: SortOrder
    is_cashier?: SortOrder
    medicine_status?: SortOrder
    medicine_room?: SortOrder
    cashier_status?: SortOrder
    cashier_status_mobile?: SortOrder
    payment_type?: SortOrder
    cashier_room?: SortOrder
    remark?: SortOrder
    method_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrder
  }

  export type cashier_queueMinOrderByAggregateInput = {
    cashier_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    queue_no?: SortOrder
    patient_location_code?: SortOrder
    patient_location_name?: SortOrder
    discharge_location_code?: SortOrder
    discharge_location_name?: SortOrder
    discharge_building?: SortOrder
    meddischarge_date?: SortOrder
    meddischarge_time?: SortOrder
    accepted_date?: SortOrder
    accepted_time?: SortOrder
    collected_date?: SortOrder
    collected_time?: SortOrder
    is_cashier?: SortOrder
    medicine_status?: SortOrder
    medicine_room?: SortOrder
    cashier_status?: SortOrder
    cashier_status_mobile?: SortOrder
    payment_type?: SortOrder
    cashier_room?: SortOrder
    remark?: SortOrder
    method_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrder
  }

  export type cashier_queueSumOrderByAggregateInput = {
    cashier_queue_id?: SortOrder
    medicine_room?: SortOrder
    cashier_room?: SortOrder
  }

  export type Enumcashier_queue_is_cashierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_is_cashier | Enumcashier_queue_is_cashierFieldRefInput<$PrismaModel>
    in?: $Enums.cashier_queue_is_cashier[]
    notIn?: $Enums.cashier_queue_is_cashier[]
    not?: NestedEnumcashier_queue_is_cashierWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_is_cashier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_is_cashierFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_is_cashierFilter<$PrismaModel>
  }

  export type Enumcashier_queue_medicine_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_medicine_status | Enumcashier_queue_medicine_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_medicine_status[] | null
    notIn?: $Enums.cashier_queue_medicine_status[] | null
    not?: NestedEnumcashier_queue_medicine_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_medicine_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel>
  }

  export type Enumcashier_queue_cashier_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status | Enumcashier_queue_cashier_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status[] | null
    notIn?: $Enums.cashier_queue_cashier_status[] | null
    not?: NestedEnumcashier_queue_cashier_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel>
  }

  export type Enumcashier_queue_cashier_status_mobileNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status_mobile | Enumcashier_queue_cashier_status_mobileFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status_mobile[] | null
    notIn?: $Enums.cashier_queue_cashier_status_mobile[] | null
    not?: NestedEnumcashier_queue_cashier_status_mobileNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status_mobile | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel>
  }

  export type Enumcashier_queue_payment_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_payment_type | Enumcashier_queue_payment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_payment_type[] | null
    notIn?: $Enums.cashier_queue_payment_type[] | null
    not?: NestedEnumcashier_queue_payment_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_payment_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel>
  }

  export type Enumcashier_queue_method_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_method_status | Enumcashier_queue_method_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_method_status[] | null
    notIn?: $Enums.cashier_queue_method_status[] | null
    not?: NestedEnumcashier_queue_method_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_method_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel>
  }

  export type Enumcashier_queue_langNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_lang | Enumcashier_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_lang[] | null
    notIn?: $Enums.cashier_queue_lang[] | null
    not?: NestedEnumcashier_queue_langNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_lang | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_langNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_langNullableFilter<$PrismaModel>
  }

  export type Enumdoctor_queue_is_emergencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_is_emergency | Enumdoctor_queue_is_emergencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_is_emergency[] | null
    notIn?: $Enums.doctor_queue_is_emergency[] | null
    not?: NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel> | $Enums.doctor_queue_is_emergency | null
  }

  export type Enumdoctor_queue_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_status | Enumdoctor_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.doctor_queue_status[]
    notIn?: $Enums.doctor_queue_status[]
    not?: NestedEnumdoctor_queue_statusFilter<$PrismaModel> | $Enums.doctor_queue_status
  }

  export type Enumdoctor_queue_langNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_lang | Enumdoctor_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_lang[] | null
    notIn?: $Enums.doctor_queue_lang[] | null
    not?: NestedEnumdoctor_queue_langNullableFilter<$PrismaModel> | $Enums.doctor_queue_lang | null
  }

  export type doctor_queueCountOrderByAggregateInput = {
    doctor_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    doctor_code?: SortOrder
    doctor_name?: SortOrder
    location_code?: SortOrder
    location_name?: SortOrder
    building?: SortOrder
    service?: SortOrder
    appt_row_id?: SortOrder
    appt_date?: SortOrder
    appt_time?: SortOrder
    arrive_date?: SortOrder
    arrive_time?: SortOrder
    queue_no?: SortOrder
    status_lab?: SortOrder
    status_xray?: SortOrder
    is_emergency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrder
  }

  export type doctor_queueAvgOrderByAggregateInput = {
    doctor_queue_id?: SortOrder
  }

  export type doctor_queueMaxOrderByAggregateInput = {
    doctor_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    doctor_code?: SortOrder
    doctor_name?: SortOrder
    location_code?: SortOrder
    location_name?: SortOrder
    building?: SortOrder
    service?: SortOrder
    appt_row_id?: SortOrder
    appt_date?: SortOrder
    appt_time?: SortOrder
    arrive_date?: SortOrder
    arrive_time?: SortOrder
    queue_no?: SortOrder
    status_lab?: SortOrder
    status_xray?: SortOrder
    is_emergency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrder
  }

  export type doctor_queueMinOrderByAggregateInput = {
    doctor_queue_id?: SortOrder
    patient_hn?: SortOrder
    patient_name?: SortOrder
    vn?: SortOrder
    doctor_code?: SortOrder
    doctor_name?: SortOrder
    location_code?: SortOrder
    location_name?: SortOrder
    building?: SortOrder
    service?: SortOrder
    appt_row_id?: SortOrder
    appt_date?: SortOrder
    appt_time?: SortOrder
    arrive_date?: SortOrder
    arrive_time?: SortOrder
    queue_no?: SortOrder
    status_lab?: SortOrder
    status_xray?: SortOrder
    is_emergency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lang?: SortOrder
  }

  export type doctor_queueSumOrderByAggregateInput = {
    doctor_queue_id?: SortOrder
  }

  export type Enumdoctor_queue_is_emergencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_is_emergency | Enumdoctor_queue_is_emergencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_is_emergency[] | null
    notIn?: $Enums.doctor_queue_is_emergency[] | null
    not?: NestedEnumdoctor_queue_is_emergencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.doctor_queue_is_emergency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel>
    _max?: NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel>
  }

  export type Enumdoctor_queue_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_status | Enumdoctor_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.doctor_queue_status[]
    notIn?: $Enums.doctor_queue_status[]
    not?: NestedEnumdoctor_queue_statusWithAggregatesFilter<$PrismaModel> | $Enums.doctor_queue_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdoctor_queue_statusFilter<$PrismaModel>
    _max?: NestedEnumdoctor_queue_statusFilter<$PrismaModel>
  }

  export type Enumdoctor_queue_langNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_lang | Enumdoctor_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_lang[] | null
    notIn?: $Enums.doctor_queue_lang[] | null
    not?: NestedEnumdoctor_queue_langNullableWithAggregatesFilter<$PrismaModel> | $Enums.doctor_queue_lang | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdoctor_queue_langNullableFilter<$PrismaModel>
    _max?: NestedEnumdoctor_queue_langNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumappointments_rightsFieldUpdateOperationsInput = {
    set?: $Enums.appointments_rights
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumappointments_statusFieldUpdateOperationsInput = {
    set?: $Enums.appointments_status
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumbilling_has_webhook_notifyFieldUpdateOperationsInput = {
    set?: $Enums.billing_has_webhook_notify
  }

  export type NullableEnumbilling_payment_statusFieldUpdateOperationsInput = {
    set?: $Enums.billing_payment_status | null
  }

  export type Enumcashier_queue_is_cashierFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_is_cashier
  }

  export type NullableEnumcashier_queue_medicine_statusFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_medicine_status | null
  }

  export type NullableEnumcashier_queue_cashier_statusFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_cashier_status | null
  }

  export type NullableEnumcashier_queue_cashier_status_mobileFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_cashier_status_mobile | null
  }

  export type NullableEnumcashier_queue_payment_typeFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_payment_type | null
  }

  export type NullableEnumcashier_queue_method_statusFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_method_status | null
  }

  export type NullableEnumcashier_queue_langFieldUpdateOperationsInput = {
    set?: $Enums.cashier_queue_lang | null
  }

  export type NullableEnumdoctor_queue_is_emergencyFieldUpdateOperationsInput = {
    set?: $Enums.doctor_queue_is_emergency | null
  }

  export type Enumdoctor_queue_statusFieldUpdateOperationsInput = {
    set?: $Enums.doctor_queue_status
  }

  export type NullableEnumdoctor_queue_langFieldUpdateOperationsInput = {
    set?: $Enums.doctor_queue_lang | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumappointments_rightsFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_rights | Enumappointments_rightsFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_rights[]
    notIn?: $Enums.appointments_rights[]
    not?: NestedEnumappointments_rightsFilter<$PrismaModel> | $Enums.appointments_rights
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumappointments_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_status | Enumappointments_statusFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_status[]
    notIn?: $Enums.appointments_status[]
    not?: NestedEnumappointments_statusFilter<$PrismaModel> | $Enums.appointments_status
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumappointments_rightsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_rights | Enumappointments_rightsFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_rights[]
    notIn?: $Enums.appointments_rights[]
    not?: NestedEnumappointments_rightsWithAggregatesFilter<$PrismaModel> | $Enums.appointments_rights
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumappointments_rightsFilter<$PrismaModel>
    _max?: NestedEnumappointments_rightsFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumappointments_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.appointments_status | Enumappointments_statusFieldRefInput<$PrismaModel>
    in?: $Enums.appointments_status[]
    notIn?: $Enums.appointments_status[]
    not?: NestedEnumappointments_statusWithAggregatesFilter<$PrismaModel> | $Enums.appointments_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumappointments_statusFilter<$PrismaModel>
    _max?: NestedEnumappointments_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_has_webhook_notify | Enumbilling_has_webhook_notifyFieldRefInput<$PrismaModel>
    in?: $Enums.billing_has_webhook_notify[]
    notIn?: $Enums.billing_has_webhook_notify[]
    not?: NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel> | $Enums.billing_has_webhook_notify
  }

  export type NestedEnumbilling_payment_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_payment_status | Enumbilling_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.billing_payment_status[] | null
    notIn?: $Enums.billing_payment_status[] | null
    not?: NestedEnumbilling_payment_statusNullableFilter<$PrismaModel> | $Enums.billing_payment_status | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumbilling_has_webhook_notifyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_has_webhook_notify | Enumbilling_has_webhook_notifyFieldRefInput<$PrismaModel>
    in?: $Enums.billing_has_webhook_notify[]
    notIn?: $Enums.billing_has_webhook_notify[]
    not?: NestedEnumbilling_has_webhook_notifyWithAggregatesFilter<$PrismaModel> | $Enums.billing_has_webhook_notify
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel>
    _max?: NestedEnumbilling_has_webhook_notifyFilter<$PrismaModel>
  }

  export type NestedEnumbilling_payment_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_payment_status | Enumbilling_payment_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.billing_payment_status[] | null
    notIn?: $Enums.billing_payment_status[] | null
    not?: NestedEnumbilling_payment_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.billing_payment_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumbilling_payment_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumbilling_payment_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_is_cashierFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_is_cashier | Enumcashier_queue_is_cashierFieldRefInput<$PrismaModel>
    in?: $Enums.cashier_queue_is_cashier[]
    notIn?: $Enums.cashier_queue_is_cashier[]
    not?: NestedEnumcashier_queue_is_cashierFilter<$PrismaModel> | $Enums.cashier_queue_is_cashier
  }

  export type NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_medicine_status | Enumcashier_queue_medicine_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_medicine_status[] | null
    notIn?: $Enums.cashier_queue_medicine_status[] | null
    not?: NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel> | $Enums.cashier_queue_medicine_status | null
  }

  export type NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status | Enumcashier_queue_cashier_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status[] | null
    notIn?: $Enums.cashier_queue_cashier_status[] | null
    not?: NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status | null
  }

  export type NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status_mobile | Enumcashier_queue_cashier_status_mobileFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status_mobile[] | null
    notIn?: $Enums.cashier_queue_cashier_status_mobile[] | null
    not?: NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status_mobile | null
  }

  export type NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_payment_type | Enumcashier_queue_payment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_payment_type[] | null
    notIn?: $Enums.cashier_queue_payment_type[] | null
    not?: NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel> | $Enums.cashier_queue_payment_type | null
  }

  export type NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_method_status | Enumcashier_queue_method_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_method_status[] | null
    notIn?: $Enums.cashier_queue_method_status[] | null
    not?: NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel> | $Enums.cashier_queue_method_status | null
  }

  export type NestedEnumcashier_queue_langNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_lang | Enumcashier_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_lang[] | null
    notIn?: $Enums.cashier_queue_lang[] | null
    not?: NestedEnumcashier_queue_langNullableFilter<$PrismaModel> | $Enums.cashier_queue_lang | null
  }

  export type NestedEnumcashier_queue_is_cashierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_is_cashier | Enumcashier_queue_is_cashierFieldRefInput<$PrismaModel>
    in?: $Enums.cashier_queue_is_cashier[]
    notIn?: $Enums.cashier_queue_is_cashier[]
    not?: NestedEnumcashier_queue_is_cashierWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_is_cashier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_is_cashierFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_is_cashierFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_medicine_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_medicine_status | Enumcashier_queue_medicine_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_medicine_status[] | null
    notIn?: $Enums.cashier_queue_medicine_status[] | null
    not?: NestedEnumcashier_queue_medicine_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_medicine_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_medicine_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_cashier_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status | Enumcashier_queue_cashier_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status[] | null
    notIn?: $Enums.cashier_queue_cashier_status[] | null
    not?: NestedEnumcashier_queue_cashier_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_cashier_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_cashier_status_mobileNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_cashier_status_mobile | Enumcashier_queue_cashier_status_mobileFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_cashier_status_mobile[] | null
    notIn?: $Enums.cashier_queue_cashier_status_mobile[] | null
    not?: NestedEnumcashier_queue_cashier_status_mobileNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_cashier_status_mobile | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_cashier_status_mobileNullableFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_payment_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_payment_type | Enumcashier_queue_payment_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_payment_type[] | null
    notIn?: $Enums.cashier_queue_payment_type[] | null
    not?: NestedEnumcashier_queue_payment_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_payment_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_payment_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_method_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_method_status | Enumcashier_queue_method_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_method_status[] | null
    notIn?: $Enums.cashier_queue_method_status[] | null
    not?: NestedEnumcashier_queue_method_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_method_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_method_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumcashier_queue_langNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cashier_queue_lang | Enumcashier_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.cashier_queue_lang[] | null
    notIn?: $Enums.cashier_queue_lang[] | null
    not?: NestedEnumcashier_queue_langNullableWithAggregatesFilter<$PrismaModel> | $Enums.cashier_queue_lang | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcashier_queue_langNullableFilter<$PrismaModel>
    _max?: NestedEnumcashier_queue_langNullableFilter<$PrismaModel>
  }

  export type NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_is_emergency | Enumdoctor_queue_is_emergencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_is_emergency[] | null
    notIn?: $Enums.doctor_queue_is_emergency[] | null
    not?: NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel> | $Enums.doctor_queue_is_emergency | null
  }

  export type NestedEnumdoctor_queue_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_status | Enumdoctor_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.doctor_queue_status[]
    notIn?: $Enums.doctor_queue_status[]
    not?: NestedEnumdoctor_queue_statusFilter<$PrismaModel> | $Enums.doctor_queue_status
  }

  export type NestedEnumdoctor_queue_langNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_lang | Enumdoctor_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_lang[] | null
    notIn?: $Enums.doctor_queue_lang[] | null
    not?: NestedEnumdoctor_queue_langNullableFilter<$PrismaModel> | $Enums.doctor_queue_lang | null
  }

  export type NestedEnumdoctor_queue_is_emergencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_is_emergency | Enumdoctor_queue_is_emergencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_is_emergency[] | null
    notIn?: $Enums.doctor_queue_is_emergency[] | null
    not?: NestedEnumdoctor_queue_is_emergencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.doctor_queue_is_emergency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel>
    _max?: NestedEnumdoctor_queue_is_emergencyNullableFilter<$PrismaModel>
  }

  export type NestedEnumdoctor_queue_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_status | Enumdoctor_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.doctor_queue_status[]
    notIn?: $Enums.doctor_queue_status[]
    not?: NestedEnumdoctor_queue_statusWithAggregatesFilter<$PrismaModel> | $Enums.doctor_queue_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdoctor_queue_statusFilter<$PrismaModel>
    _max?: NestedEnumdoctor_queue_statusFilter<$PrismaModel>
  }

  export type NestedEnumdoctor_queue_langNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.doctor_queue_lang | Enumdoctor_queue_langFieldRefInput<$PrismaModel> | null
    in?: $Enums.doctor_queue_lang[] | null
    notIn?: $Enums.doctor_queue_lang[] | null
    not?: NestedEnumdoctor_queue_langNullableWithAggregatesFilter<$PrismaModel> | $Enums.doctor_queue_lang | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdoctor_queue_langNullableFilter<$PrismaModel>
    _max?: NestedEnumdoctor_queue_langNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use appointmentsDefaultArgs instead
     */
    export type appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = appointmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use billingDefaultArgs instead
     */
    export type billingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = billingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use broadcast_masterDefaultArgs instead
     */
    export type broadcast_masterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = broadcast_masterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use broadcast_master_has_users_mobileDefaultArgs instead
     */
    export type broadcast_master_has_users_mobileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = broadcast_master_has_users_mobileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use buildingDefaultArgs instead
     */
    export type buildingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = buildingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cashier_queueDefaultArgs instead
     */
    export type cashier_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cashier_queueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use doctor_queueDefaultArgs instead
     */
    export type doctor_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = doctor_queueDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}