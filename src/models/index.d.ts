
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model Lga
 * 
 */
export type Lga = $Result.DefaultSelection<Prisma.$LgaPayload>
/**
 * Model Farmer
 * 
 */
export type Farmer = $Result.DefaultSelection<Prisma.$FarmerPayload>
/**
 * Model Bank
 * 
 */
export type Bank = $Result.DefaultSelection<Prisma.$BankPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Farm
 * 
 */
export type Farm = $Result.DefaultSelection<Prisma.$FarmPayload>
/**
 * Model FarmMedia
 * 
 */
export type FarmMedia = $Result.DefaultSelection<Prisma.$FarmMediaPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductionType: {
  Crop: 'Crop',
  Livestock: 'Livestock'
};

export type ProductionType = (typeof ProductionType)[keyof typeof ProductionType]


export const SizeUnit: {
  Hectare: 'Hectare',
  Acre: 'Acre'
};

export type SizeUnit = (typeof SizeUnit)[keyof typeof SizeUnit]


export const FarmStage: {
  Cleared: 'Cleared',
  Planted: 'Planted',
  Harvesting: 'Harvesting'
};

export type FarmStage = (typeof FarmStage)[keyof typeof FarmStage]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const Role: {
  lga_admin: 'lga_admin',
  country_admin: 'country_admin',
  state_admin: 'state_admin',
  investor: 'investor',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Available: 'Available',
  Pending: 'Pending',
  Completed: 'Completed',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend',
  Paid: 'Paid'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type ProductionType = $Enums.ProductionType

export const ProductionType: typeof $Enums.ProductionType

export type SizeUnit = $Enums.SizeUnit

export const SizeUnit: typeof $Enums.SizeUnit

export type FarmStage = $Enums.FarmStage

export const FarmStage: typeof $Enums.FarmStage

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lga`: Exposes CRUD operations for the **Lga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lgas
    * const lgas = await prisma.lga.findMany()
    * ```
    */
  get lga(): Prisma.LgaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmer`: Exposes CRUD operations for the **Farmer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmers
    * const farmers = await prisma.farmer.findMany()
    * ```
    */
  get farmer(): Prisma.FarmerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank`: Exposes CRUD operations for the **Bank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.bank.findMany()
    * ```
    */
  get bank(): Prisma.BankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farm`: Exposes CRUD operations for the **Farm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farm.findMany()
    * ```
    */
  get farm(): Prisma.FarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmMedia`: Exposes CRUD operations for the **FarmMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmMedias
    * const farmMedias = await prisma.farmMedia.findMany()
    * ```
    */
  get farmMedia(): Prisma.FarmMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Admin: 'Admin',
    Users: 'Users',
    Country: 'Country',
    State: 'State',
    Lga: 'Lga',
    Farmer: 'Farmer',
    Bank: 'Bank',
    Invoice: 'Invoice',
    Farm: 'Farm',
    FarmMedia: 'FarmMedia',
    VerificationCode: 'VerificationCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "users" | "country" | "state" | "lga" | "farmer" | "bank" | "invoice" | "farm" | "farmMedia" | "verificationCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      Lga: {
        payload: Prisma.$LgaPayload<ExtArgs>
        fields: Prisma.LgaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LgaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LgaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>
          }
          findFirst: {
            args: Prisma.LgaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LgaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>
          }
          findMany: {
            args: Prisma.LgaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>[]
          }
          create: {
            args: Prisma.LgaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>
          }
          createMany: {
            args: Prisma.LgaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LgaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>
          }
          update: {
            args: Prisma.LgaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>
          }
          deleteMany: {
            args: Prisma.LgaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LgaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LgaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LgaPayload>
          }
          aggregate: {
            args: Prisma.LgaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLga>
          }
          groupBy: {
            args: Prisma.LgaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LgaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LgaCountArgs<ExtArgs>
            result: $Utils.Optional<LgaCountAggregateOutputType> | number
          }
        }
      }
      Farmer: {
        payload: Prisma.$FarmerPayload<ExtArgs>
        fields: Prisma.FarmerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          findFirst: {
            args: Prisma.FarmerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          findMany: {
            args: Prisma.FarmerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>[]
          }
          create: {
            args: Prisma.FarmerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          createMany: {
            args: Prisma.FarmerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FarmerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          update: {
            args: Prisma.FarmerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          deleteMany: {
            args: Prisma.FarmerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmerPayload>
          }
          aggregate: {
            args: Prisma.FarmerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmer>
          }
          groupBy: {
            args: Prisma.FarmerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmerCountArgs<ExtArgs>
            result: $Utils.Optional<FarmerCountAggregateOutputType> | number
          }
        }
      }
      Bank: {
        payload: Prisma.$BankPayload<ExtArgs>
        fields: Prisma.BankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findFirst: {
            args: Prisma.BankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findMany: {
            args: Prisma.BankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          create: {
            args: Prisma.BankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          createMany: {
            args: Prisma.BankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          update: {
            args: Prisma.BankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          deleteMany: {
            args: Prisma.BankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank>
          }
          groupBy: {
            args: Prisma.BankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCountArgs<ExtArgs>
            result: $Utils.Optional<BankCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Farm: {
        payload: Prisma.$FarmPayload<ExtArgs>
        fields: Prisma.FarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findFirst: {
            args: Prisma.FarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findMany: {
            args: Prisma.FarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          create: {
            args: Prisma.FarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          createMany: {
            args: Prisma.FarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          update: {
            args: Prisma.FarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          deleteMany: {
            args: Prisma.FarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          aggregate: {
            args: Prisma.FarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm>
          }
          groupBy: {
            args: Prisma.FarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCountAggregateOutputType> | number
          }
        }
      }
      FarmMedia: {
        payload: Prisma.$FarmMediaPayload<ExtArgs>
        fields: Prisma.FarmMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>
          }
          findFirst: {
            args: Prisma.FarmMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>
          }
          findMany: {
            args: Prisma.FarmMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>[]
          }
          create: {
            args: Prisma.FarmMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>
          }
          createMany: {
            args: Prisma.FarmMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FarmMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>
          }
          update: {
            args: Prisma.FarmMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>
          }
          deleteMany: {
            args: Prisma.FarmMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmMediaPayload>
          }
          aggregate: {
            args: Prisma.FarmMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmMedia>
          }
          groupBy: {
            args: Prisma.FarmMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmMediaCountArgs<ExtArgs>
            result: $Utils.Optional<FarmMediaCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    users?: UsersOmit
    country?: CountryOmit
    state?: StateOmit
    lga?: LgaOmit
    farmer?: FarmerOmit
    bank?: BankOmit
    invoice?: InvoiceOmit
    farm?: FarmOmit
    farmMedia?: FarmMediaOmit
    verificationCode?: VerificationCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    states: number
    users: number
    farmers: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    states?: boolean | CountryCountOutputTypeCountStatesArgs
    users?: boolean | CountryCountOutputTypeCountUsersArgs
    farmers?: boolean | CountryCountOutputTypeCountFarmersArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    lgas: number
    users: number
    farmers: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lgas?: boolean | StateCountOutputTypeCountLgasArgs
    users?: boolean | StateCountOutputTypeCountUsersArgs
    farmers?: boolean | StateCountOutputTypeCountFarmersArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountLgasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LgaWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * Count Type LgaCountOutputType
   */

  export type LgaCountOutputType = {
    users: number
    farmers: number
  }

  export type LgaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LgaCountOutputTypeCountUsersArgs
    farmers?: boolean | LgaCountOutputTypeCountFarmersArgs
  }

  // Custom InputTypes
  /**
   * LgaCountOutputType without action
   */
  export type LgaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LgaCountOutputType
     */
    select?: LgaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LgaCountOutputType without action
   */
  export type LgaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * LgaCountOutputType without action
   */
  export type LgaCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * Count Type FarmerCountOutputType
   */

  export type FarmerCountOutputType = {
    inovices: number
    farms: number
  }

  export type FarmerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inovices?: boolean | FarmerCountOutputTypeCountInovicesArgs
    farms?: boolean | FarmerCountOutputTypeCountFarmsArgs
  }

  // Custom InputTypes
  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerCountOutputType
     */
    select?: FarmerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountInovicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
  }


  /**
   * Count Type BankCountOutputType
   */

  export type BankCountOutputType = {
    farmers: number
  }

  export type BankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | BankCountOutputTypeCountFarmersArgs
  }

  // Custom InputTypes
  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCountOutputType
     */
    select?: BankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
  }


  /**
   * Count Type FarmCountOutputType
   */

  export type FarmCountOutputType = {
    media: number
  }

  export type FarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | FarmCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: FarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmMediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    email: string
    role: $Enums.Role
    profile_image: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "role" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      role: $Enums.Role
      profile_image: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullname: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly profile_image: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean | null
    status: $Enums.Status | null
    password: string | null
    temporal_password: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean | null
    status: $Enums.Status | null
    password: string | null
    temporal_password: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    role: number
    countryId: number
    stateId: number
    lgaId: number
    profile_image: number
    verification_code: number
    email_verified: number
    status: number
    password: number
    temporal_password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    countryId?: true
    stateId?: true
    lgaId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    countryId?: true
    stateId?: true
    lgaId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean
    status: $Enums.Status
    password: string
    temporal_password: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    countryId?: boolean
    stateId?: boolean
    lgaId?: boolean
    profile_image?: boolean
    verification_code?: boolean
    email_verified?: boolean
    status?: boolean
    password?: boolean
    temporal_password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | Users$countryArgs<ExtArgs>
    state?: boolean | Users$stateArgs<ExtArgs>
    lga?: boolean | Users$lgaArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    countryId?: boolean
    stateId?: boolean
    lgaId?: boolean
    profile_image?: boolean
    verification_code?: boolean
    email_verified?: boolean
    status?: boolean
    password?: boolean
    temporal_password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "phone_number" | "role" | "countryId" | "stateId" | "lgaId" | "profile_image" | "verification_code" | "email_verified" | "status" | "password" | "temporal_password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Users$countryArgs<ExtArgs>
    state?: boolean | Users$stateArgs<ExtArgs>
    lga?: boolean | Users$lgaArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs> | null
      state: Prisma.$StatePayload<ExtArgs> | null
      lga: Prisma.$LgaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      countryId: number | null
      stateId: number | null
      lgaId: number | null
      profile_image: string | null
      verification_code: string | null
      email_verified: boolean
      status: $Enums.Status
      password: string
      temporal_password: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends Users$countryArgs<ExtArgs> = {}>(args?: Subset<T, Users$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    state<T extends Users$stateArgs<ExtArgs> = {}>(args?: Subset<T, Users$stateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lga<T extends Users$lgaArgs<ExtArgs> = {}>(args?: Subset<T, Users$lgaArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly fullname: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone_number: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly countryId: FieldRef<"Users", 'Int'>
    readonly stateId: FieldRef<"Users", 'Int'>
    readonly lgaId: FieldRef<"Users", 'Int'>
    readonly profile_image: FieldRef<"Users", 'String'>
    readonly verification_code: FieldRef<"Users", 'String'>
    readonly email_verified: FieldRef<"Users", 'Boolean'>
    readonly status: FieldRef<"Users", 'Status'>
    readonly password: FieldRef<"Users", 'String'>
    readonly temporal_password: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.country
   */
  export type Users$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * Users.state
   */
  export type Users$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
  }

  /**
   * Users.lga
   */
  export type Users$lgaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    where?: LgaWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    iso2: string | null
    iso3: string | null
    numericCode: string | null
    phoneCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    iso2: string | null
    iso3: string | null
    numericCode: string | null
    phoneCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    iso2: number
    iso3: number
    numericCode: number
    phoneCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    iso2?: true
    iso3?: true
    numericCode?: true
    phoneCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    iso2?: true
    iso3?: true
    numericCode?: true
    phoneCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    iso2?: true
    iso3?: true
    numericCode?: true
    phoneCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    iso2: string | null
    iso3: string | null
    numericCode: string | null
    phoneCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso2?: boolean
    iso3?: boolean
    numericCode?: boolean
    phoneCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    states?: boolean | Country$statesArgs<ExtArgs>
    users?: boolean | Country$usersArgs<ExtArgs>
    farmers?: boolean | Country$farmersArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>



  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    iso2?: boolean
    iso3?: boolean
    numericCode?: boolean
    phoneCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iso2" | "iso3" | "numericCode" | "phoneCode" | "createdAt" | "updatedAt", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    states?: boolean | Country$statesArgs<ExtArgs>
    users?: boolean | Country$usersArgs<ExtArgs>
    farmers?: boolean | Country$farmersArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      states: Prisma.$StatePayload<ExtArgs>[]
      users: Prisma.$UsersPayload<ExtArgs>[]
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      iso2: string | null
      iso3: string | null
      numericCode: string | null
      phoneCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    states<T extends Country$statesArgs<ExtArgs> = {}>(args?: Subset<T, Country$statesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Country$usersArgs<ExtArgs> = {}>(args?: Subset<T, Country$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farmers<T extends Country$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Country$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly iso2: FieldRef<"Country", 'String'>
    readonly iso3: FieldRef<"Country", 'String'>
    readonly numericCode: FieldRef<"Country", 'String'>
    readonly phoneCode: FieldRef<"Country", 'String'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
    readonly updatedAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.states
   */
  export type Country$statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    cursor?: StateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * Country.users
   */
  export type Country$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Country.farmers
   */
  export type Country$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    countryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    countryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    code: number
    countryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    name: string
    code: string | null
    countryId: number
    createdAt: Date
    updatedAt: Date
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    lgas?: boolean | State$lgasArgs<ExtArgs>
    users?: boolean | State$usersArgs<ExtArgs>
    farmers?: boolean | State$farmersArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>



  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "countryId" | "createdAt" | "updatedAt", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    lgas?: boolean | State$lgasArgs<ExtArgs>
    users?: boolean | State$usersArgs<ExtArgs>
    farmers?: boolean | State$farmersArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      lgas: Prisma.$LgaPayload<ExtArgs>[]
      users: Prisma.$UsersPayload<ExtArgs>[]
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string | null
      countryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lgas<T extends State$lgasArgs<ExtArgs> = {}>(args?: Subset<T, State$lgasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends State$usersArgs<ExtArgs> = {}>(args?: Subset<T, State$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farmers<T extends State$farmersArgs<ExtArgs> = {}>(args?: Subset<T, State$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly name: FieldRef<"State", 'String'>
    readonly code: FieldRef<"State", 'String'>
    readonly countryId: FieldRef<"State", 'Int'>
    readonly createdAt: FieldRef<"State", 'DateTime'>
    readonly updatedAt: FieldRef<"State", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.lgas
   */
  export type State$lgasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    where?: LgaWhereInput
    orderBy?: LgaOrderByWithRelationInput | LgaOrderByWithRelationInput[]
    cursor?: LgaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LgaScalarFieldEnum | LgaScalarFieldEnum[]
  }

  /**
   * State.users
   */
  export type State$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * State.farmers
   */
  export type State$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model Lga
   */

  export type AggregateLga = {
    _count: LgaCountAggregateOutputType | null
    _avg: LgaAvgAggregateOutputType | null
    _sum: LgaSumAggregateOutputType | null
    _min: LgaMinAggregateOutputType | null
    _max: LgaMaxAggregateOutputType | null
  }

  export type LgaAvgAggregateOutputType = {
    id: number | null
    stateId: number | null
  }

  export type LgaSumAggregateOutputType = {
    id: number | null
    stateId: number | null
  }

  export type LgaMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    stateId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LgaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    stateId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LgaCountAggregateOutputType = {
    id: number
    name: number
    code: number
    stateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LgaAvgAggregateInputType = {
    id?: true
    stateId?: true
  }

  export type LgaSumAggregateInputType = {
    id?: true
    stateId?: true
  }

  export type LgaMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    stateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LgaMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    stateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LgaCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    stateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LgaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lga to aggregate.
     */
    where?: LgaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lgas to fetch.
     */
    orderBy?: LgaOrderByWithRelationInput | LgaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LgaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lgas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lgas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lgas
    **/
    _count?: true | LgaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LgaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LgaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LgaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LgaMaxAggregateInputType
  }

  export type GetLgaAggregateType<T extends LgaAggregateArgs> = {
        [P in keyof T & keyof AggregateLga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLga[P]>
      : GetScalarType<T[P], AggregateLga[P]>
  }




  export type LgaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LgaWhereInput
    orderBy?: LgaOrderByWithAggregationInput | LgaOrderByWithAggregationInput[]
    by: LgaScalarFieldEnum[] | LgaScalarFieldEnum
    having?: LgaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LgaCountAggregateInputType | true
    _avg?: LgaAvgAggregateInputType
    _sum?: LgaSumAggregateInputType
    _min?: LgaMinAggregateInputType
    _max?: LgaMaxAggregateInputType
  }

  export type LgaGroupByOutputType = {
    id: number
    name: string
    code: string | null
    stateId: number
    createdAt: Date
    updatedAt: Date
    _count: LgaCountAggregateOutputType | null
    _avg: LgaAvgAggregateOutputType | null
    _sum: LgaSumAggregateOutputType | null
    _min: LgaMinAggregateOutputType | null
    _max: LgaMaxAggregateOutputType | null
  }

  type GetLgaGroupByPayload<T extends LgaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LgaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LgaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LgaGroupByOutputType[P]>
            : GetScalarType<T[P], LgaGroupByOutputType[P]>
        }
      >
    >


  export type LgaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    stateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
    users?: boolean | Lga$usersArgs<ExtArgs>
    farmers?: boolean | Lga$farmersArgs<ExtArgs>
    _count?: boolean | LgaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lga"]>



  export type LgaSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    stateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LgaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "stateId" | "createdAt" | "updatedAt", ExtArgs["result"]["lga"]>
  export type LgaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
    users?: boolean | Lga$usersArgs<ExtArgs>
    farmers?: boolean | Lga$farmersArgs<ExtArgs>
    _count?: boolean | LgaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LgaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lga"
    objects: {
      state: Prisma.$StatePayload<ExtArgs>
      users: Prisma.$UsersPayload<ExtArgs>[]
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string | null
      stateId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lga"]>
    composites: {}
  }

  type LgaGetPayload<S extends boolean | null | undefined | LgaDefaultArgs> = $Result.GetResult<Prisma.$LgaPayload, S>

  type LgaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LgaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LgaCountAggregateInputType | true
    }

  export interface LgaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lga'], meta: { name: 'Lga' } }
    /**
     * Find zero or one Lga that matches the filter.
     * @param {LgaFindUniqueArgs} args - Arguments to find a Lga
     * @example
     * // Get one Lga
     * const lga = await prisma.lga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LgaFindUniqueArgs>(args: SelectSubset<T, LgaFindUniqueArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LgaFindUniqueOrThrowArgs} args - Arguments to find a Lga
     * @example
     * // Get one Lga
     * const lga = await prisma.lga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LgaFindUniqueOrThrowArgs>(args: SelectSubset<T, LgaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaFindFirstArgs} args - Arguments to find a Lga
     * @example
     * // Get one Lga
     * const lga = await prisma.lga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LgaFindFirstArgs>(args?: SelectSubset<T, LgaFindFirstArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaFindFirstOrThrowArgs} args - Arguments to find a Lga
     * @example
     * // Get one Lga
     * const lga = await prisma.lga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LgaFindFirstOrThrowArgs>(args?: SelectSubset<T, LgaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lgas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lgas
     * const lgas = await prisma.lga.findMany()
     * 
     * // Get first 10 Lgas
     * const lgas = await prisma.lga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lgaWithIdOnly = await prisma.lga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LgaFindManyArgs>(args?: SelectSubset<T, LgaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lga.
     * @param {LgaCreateArgs} args - Arguments to create a Lga.
     * @example
     * // Create one Lga
     * const Lga = await prisma.lga.create({
     *   data: {
     *     // ... data to create a Lga
     *   }
     * })
     * 
     */
    create<T extends LgaCreateArgs>(args: SelectSubset<T, LgaCreateArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lgas.
     * @param {LgaCreateManyArgs} args - Arguments to create many Lgas.
     * @example
     * // Create many Lgas
     * const lga = await prisma.lga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LgaCreateManyArgs>(args?: SelectSubset<T, LgaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lga.
     * @param {LgaDeleteArgs} args - Arguments to delete one Lga.
     * @example
     * // Delete one Lga
     * const Lga = await prisma.lga.delete({
     *   where: {
     *     // ... filter to delete one Lga
     *   }
     * })
     * 
     */
    delete<T extends LgaDeleteArgs>(args: SelectSubset<T, LgaDeleteArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lga.
     * @param {LgaUpdateArgs} args - Arguments to update one Lga.
     * @example
     * // Update one Lga
     * const lga = await prisma.lga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LgaUpdateArgs>(args: SelectSubset<T, LgaUpdateArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lgas.
     * @param {LgaDeleteManyArgs} args - Arguments to filter Lgas to delete.
     * @example
     * // Delete a few Lgas
     * const { count } = await prisma.lga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LgaDeleteManyArgs>(args?: SelectSubset<T, LgaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lgas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lgas
     * const lga = await prisma.lga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LgaUpdateManyArgs>(args: SelectSubset<T, LgaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lga.
     * @param {LgaUpsertArgs} args - Arguments to update or create a Lga.
     * @example
     * // Update or create a Lga
     * const lga = await prisma.lga.upsert({
     *   create: {
     *     // ... data to create a Lga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lga we want to update
     *   }
     * })
     */
    upsert<T extends LgaUpsertArgs>(args: SelectSubset<T, LgaUpsertArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lgas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaCountArgs} args - Arguments to filter Lgas to count.
     * @example
     * // Count the number of Lgas
     * const count = await prisma.lga.count({
     *   where: {
     *     // ... the filter for the Lgas we want to count
     *   }
     * })
    **/
    count<T extends LgaCountArgs>(
      args?: Subset<T, LgaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LgaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LgaAggregateArgs>(args: Subset<T, LgaAggregateArgs>): Prisma.PrismaPromise<GetLgaAggregateType<T>>

    /**
     * Group by Lga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LgaGroupByArgs} args - Group by arguments.
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
      T extends LgaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LgaGroupByArgs['orderBy'] }
        : { orderBy?: LgaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LgaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLgaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lga model
   */
  readonly fields: LgaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LgaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Lga$usersArgs<ExtArgs> = {}>(args?: Subset<T, Lga$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farmers<T extends Lga$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Lga$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lga model
   */
  interface LgaFieldRefs {
    readonly id: FieldRef<"Lga", 'Int'>
    readonly name: FieldRef<"Lga", 'String'>
    readonly code: FieldRef<"Lga", 'String'>
    readonly stateId: FieldRef<"Lga", 'Int'>
    readonly createdAt: FieldRef<"Lga", 'DateTime'>
    readonly updatedAt: FieldRef<"Lga", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lga findUnique
   */
  export type LgaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * Filter, which Lga to fetch.
     */
    where: LgaWhereUniqueInput
  }

  /**
   * Lga findUniqueOrThrow
   */
  export type LgaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * Filter, which Lga to fetch.
     */
    where: LgaWhereUniqueInput
  }

  /**
   * Lga findFirst
   */
  export type LgaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * Filter, which Lga to fetch.
     */
    where?: LgaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lgas to fetch.
     */
    orderBy?: LgaOrderByWithRelationInput | LgaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lgas.
     */
    cursor?: LgaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lgas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lgas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lgas.
     */
    distinct?: LgaScalarFieldEnum | LgaScalarFieldEnum[]
  }

  /**
   * Lga findFirstOrThrow
   */
  export type LgaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * Filter, which Lga to fetch.
     */
    where?: LgaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lgas to fetch.
     */
    orderBy?: LgaOrderByWithRelationInput | LgaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lgas.
     */
    cursor?: LgaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lgas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lgas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lgas.
     */
    distinct?: LgaScalarFieldEnum | LgaScalarFieldEnum[]
  }

  /**
   * Lga findMany
   */
  export type LgaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * Filter, which Lgas to fetch.
     */
    where?: LgaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lgas to fetch.
     */
    orderBy?: LgaOrderByWithRelationInput | LgaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lgas.
     */
    cursor?: LgaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lgas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lgas.
     */
    skip?: number
    distinct?: LgaScalarFieldEnum | LgaScalarFieldEnum[]
  }

  /**
   * Lga create
   */
  export type LgaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * The data needed to create a Lga.
     */
    data: XOR<LgaCreateInput, LgaUncheckedCreateInput>
  }

  /**
   * Lga createMany
   */
  export type LgaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lgas.
     */
    data: LgaCreateManyInput | LgaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lga update
   */
  export type LgaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * The data needed to update a Lga.
     */
    data: XOR<LgaUpdateInput, LgaUncheckedUpdateInput>
    /**
     * Choose, which Lga to update.
     */
    where: LgaWhereUniqueInput
  }

  /**
   * Lga updateMany
   */
  export type LgaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lgas.
     */
    data: XOR<LgaUpdateManyMutationInput, LgaUncheckedUpdateManyInput>
    /**
     * Filter which Lgas to update
     */
    where?: LgaWhereInput
    /**
     * Limit how many Lgas to update.
     */
    limit?: number
  }

  /**
   * Lga upsert
   */
  export type LgaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * The filter to search for the Lga to update in case it exists.
     */
    where: LgaWhereUniqueInput
    /**
     * In case the Lga found by the `where` argument doesn't exist, create a new Lga with this data.
     */
    create: XOR<LgaCreateInput, LgaUncheckedCreateInput>
    /**
     * In case the Lga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LgaUpdateInput, LgaUncheckedUpdateInput>
  }

  /**
   * Lga delete
   */
  export type LgaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
    /**
     * Filter which Lga to delete.
     */
    where: LgaWhereUniqueInput
  }

  /**
   * Lga deleteMany
   */
  export type LgaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lgas to delete
     */
    where?: LgaWhereInput
    /**
     * Limit how many Lgas to delete.
     */
    limit?: number
  }

  /**
   * Lga.users
   */
  export type Lga$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Lga.farmers
   */
  export type Lga$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * Lga without action
   */
  export type LgaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lga
     */
    select?: LgaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lga
     */
    omit?: LgaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LgaInclude<ExtArgs> | null
  }


  /**
   * Model Farmer
   */

  export type AggregateFarmer = {
    _count: FarmerCountAggregateOutputType | null
    _avg: FarmerAvgAggregateOutputType | null
    _sum: FarmerSumAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  export type FarmerAvgAggregateOutputType = {
    id: number | null
    bankId: number | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    account_created_by: number | null
  }

  export type FarmerSumAggregateOutputType = {
    id: number | null
    bankId: number | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    account_created_by: number | null
  }

  export type FarmerMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    nin: string | null
    profile_image: string | null
    proof_of_address: string | null
    bankId: number | null
    account_number: string | null
    account_name: string | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    email_verified: boolean | null
    phone_verified: boolean | null
    nin_verified: boolean | null
    has_paid: boolean | null
    status: $Enums.Status | null
    account_created_by: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmerMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    address: string | null
    nin: string | null
    profile_image: string | null
    proof_of_address: string | null
    bankId: number | null
    account_number: string | null
    account_name: string | null
    countryId: number | null
    stateId: number | null
    lgaId: number | null
    email_verified: boolean | null
    phone_verified: boolean | null
    nin_verified: boolean | null
    has_paid: boolean | null
    status: $Enums.Status | null
    account_created_by: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmerCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    phone_number: number
    address: number
    nin: number
    profile_image: number
    proof_of_address: number
    bankId: number
    account_number: number
    account_name: number
    countryId: number
    stateId: number
    lgaId: number
    email_verified: number
    phone_verified: number
    nin_verified: number
    has_paid: number
    status: number
    account_created_by: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmerAvgAggregateInputType = {
    id?: true
    bankId?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    account_created_by?: true
  }

  export type FarmerSumAggregateInputType = {
    id?: true
    bankId?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    account_created_by?: true
  }

  export type FarmerMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    nin?: true
    profile_image?: true
    proof_of_address?: true
    bankId?: true
    account_number?: true
    account_name?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    email_verified?: true
    phone_verified?: true
    nin_verified?: true
    has_paid?: true
    status?: true
    account_created_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmerMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    nin?: true
    profile_image?: true
    proof_of_address?: true
    bankId?: true
    account_number?: true
    account_name?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    email_verified?: true
    phone_verified?: true
    nin_verified?: true
    has_paid?: true
    status?: true
    account_created_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmerCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    address?: true
    nin?: true
    profile_image?: true
    proof_of_address?: true
    bankId?: true
    account_number?: true
    account_name?: true
    countryId?: true
    stateId?: true
    lgaId?: true
    email_verified?: true
    phone_verified?: true
    nin_verified?: true
    has_paid?: true
    status?: true
    account_created_by?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmer to aggregate.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farmers
    **/
    _count?: true | FarmerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmerMaxAggregateInputType
  }

  export type GetFarmerAggregateType<T extends FarmerAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmer[P]>
      : GetScalarType<T[P], AggregateFarmer[P]>
  }




  export type FarmerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithAggregationInput | FarmerOrderByWithAggregationInput[]
    by: FarmerScalarFieldEnum[] | FarmerScalarFieldEnum
    having?: FarmerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmerCountAggregateInputType | true
    _avg?: FarmerAvgAggregateInputType
    _sum?: FarmerSumAggregateInputType
    _min?: FarmerMinAggregateInputType
    _max?: FarmerMaxAggregateInputType
  }

  export type FarmerGroupByOutputType = {
    id: number
    fullname: string
    email: string | null
    phone_number: string
    address: string
    nin: string
    profile_image: string | null
    proof_of_address: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified: boolean
    phone_verified: boolean
    nin_verified: boolean
    has_paid: boolean
    status: $Enums.Status
    account_created_by: number
    createdAt: Date
    updatedAt: Date
    _count: FarmerCountAggregateOutputType | null
    _avg: FarmerAvgAggregateOutputType | null
    _sum: FarmerSumAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  type GetFarmerGroupByPayload<T extends FarmerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerGroupByOutputType[P]>
        }
      >
    >


  export type FarmerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    nin?: boolean
    profile_image?: boolean
    proof_of_address?: boolean
    bankId?: boolean
    account_number?: boolean
    account_name?: boolean
    countryId?: boolean
    stateId?: boolean
    lgaId?: boolean
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: boolean
    account_created_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    lga?: boolean | LgaDefaultArgs<ExtArgs>
    inovices?: boolean | Farmer$inovicesArgs<ExtArgs>
    farms?: boolean | Farmer$farmsArgs<ExtArgs>
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmer"]>



  export type FarmerSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    nin?: boolean
    profile_image?: boolean
    proof_of_address?: boolean
    bankId?: boolean
    account_number?: boolean
    account_name?: boolean
    countryId?: boolean
    stateId?: boolean
    lgaId?: boolean
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: boolean
    account_created_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "phone_number" | "address" | "nin" | "profile_image" | "proof_of_address" | "bankId" | "account_number" | "account_name" | "countryId" | "stateId" | "lgaId" | "email_verified" | "phone_verified" | "nin_verified" | "has_paid" | "status" | "account_created_by" | "createdAt" | "updatedAt", ExtArgs["result"]["farmer"]>
  export type FarmerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    state?: boolean | StateDefaultArgs<ExtArgs>
    lga?: boolean | LgaDefaultArgs<ExtArgs>
    inovices?: boolean | Farmer$inovicesArgs<ExtArgs>
    farms?: boolean | Farmer$farmsArgs<ExtArgs>
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FarmerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farmer"
    objects: {
      bank: Prisma.$BankPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      state: Prisma.$StatePayload<ExtArgs>
      lga: Prisma.$LgaPayload<ExtArgs>
      inovices: Prisma.$InvoicePayload<ExtArgs>[]
      farms: Prisma.$FarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string | null
      phone_number: string
      address: string
      nin: string
      profile_image: string | null
      proof_of_address: string | null
      bankId: number
      account_number: string
      account_name: string
      countryId: number
      stateId: number
      lgaId: number
      email_verified: boolean
      phone_verified: boolean
      nin_verified: boolean
      has_paid: boolean
      status: $Enums.Status
      account_created_by: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farmer"]>
    composites: {}
  }

  type FarmerGetPayload<S extends boolean | null | undefined | FarmerDefaultArgs> = $Result.GetResult<Prisma.$FarmerPayload, S>

  type FarmerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmerCountAggregateInputType | true
    }

  export interface FarmerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farmer'], meta: { name: 'Farmer' } }
    /**
     * Find zero or one Farmer that matches the filter.
     * @param {FarmerFindUniqueArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmerFindUniqueArgs>(args: SelectSubset<T, FarmerFindUniqueArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farmer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmerFindUniqueOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmerFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmerFindFirstArgs>(args?: SelectSubset<T, FarmerFindFirstArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindFirstOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmerFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmer.findMany()
     * 
     * // Get first 10 Farmers
     * const farmers = await prisma.farmer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmerWithIdOnly = await prisma.farmer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmerFindManyArgs>(args?: SelectSubset<T, FarmerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farmer.
     * @param {FarmerCreateArgs} args - Arguments to create a Farmer.
     * @example
     * // Create one Farmer
     * const Farmer = await prisma.farmer.create({
     *   data: {
     *     // ... data to create a Farmer
     *   }
     * })
     * 
     */
    create<T extends FarmerCreateArgs>(args: SelectSubset<T, FarmerCreateArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farmers.
     * @param {FarmerCreateManyArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmer = await prisma.farmer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmerCreateManyArgs>(args?: SelectSubset<T, FarmerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farmer.
     * @param {FarmerDeleteArgs} args - Arguments to delete one Farmer.
     * @example
     * // Delete one Farmer
     * const Farmer = await prisma.farmer.delete({
     *   where: {
     *     // ... filter to delete one Farmer
     *   }
     * })
     * 
     */
    delete<T extends FarmerDeleteArgs>(args: SelectSubset<T, FarmerDeleteArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farmer.
     * @param {FarmerUpdateArgs} args - Arguments to update one Farmer.
     * @example
     * // Update one Farmer
     * const farmer = await prisma.farmer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmerUpdateArgs>(args: SelectSubset<T, FarmerUpdateArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farmers.
     * @param {FarmerDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmerDeleteManyArgs>(args?: SelectSubset<T, FarmerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmerUpdateManyArgs>(args: SelectSubset<T, FarmerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farmer.
     * @param {FarmerUpsertArgs} args - Arguments to update or create a Farmer.
     * @example
     * // Update or create a Farmer
     * const farmer = await prisma.farmer.upsert({
     *   create: {
     *     // ... data to create a Farmer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmer we want to update
     *   }
     * })
     */
    upsert<T extends FarmerUpsertArgs>(args: SelectSubset<T, FarmerUpsertArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmer.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
    **/
    count<T extends FarmerCountArgs>(
      args?: Subset<T, FarmerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmerAggregateArgs>(args: Subset<T, FarmerAggregateArgs>): Prisma.PrismaPromise<GetFarmerAggregateType<T>>

    /**
     * Group by Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerGroupByArgs} args - Group by arguments.
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
      T extends FarmerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmerGroupByArgs['orderBy'] }
        : { orderBy?: FarmerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farmer model
   */
  readonly fields: FarmerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farmer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends BankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankDefaultArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lga<T extends LgaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LgaDefaultArgs<ExtArgs>>): Prisma__LgaClient<$Result.GetResult<Prisma.$LgaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inovices<T extends Farmer$inovicesArgs<ExtArgs> = {}>(args?: Subset<T, Farmer$inovicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farms<T extends Farmer$farmsArgs<ExtArgs> = {}>(args?: Subset<T, Farmer$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Farmer model
   */
  interface FarmerFieldRefs {
    readonly id: FieldRef<"Farmer", 'Int'>
    readonly fullname: FieldRef<"Farmer", 'String'>
    readonly email: FieldRef<"Farmer", 'String'>
    readonly phone_number: FieldRef<"Farmer", 'String'>
    readonly address: FieldRef<"Farmer", 'String'>
    readonly nin: FieldRef<"Farmer", 'String'>
    readonly profile_image: FieldRef<"Farmer", 'String'>
    readonly proof_of_address: FieldRef<"Farmer", 'String'>
    readonly bankId: FieldRef<"Farmer", 'Int'>
    readonly account_number: FieldRef<"Farmer", 'String'>
    readonly account_name: FieldRef<"Farmer", 'String'>
    readonly countryId: FieldRef<"Farmer", 'Int'>
    readonly stateId: FieldRef<"Farmer", 'Int'>
    readonly lgaId: FieldRef<"Farmer", 'Int'>
    readonly email_verified: FieldRef<"Farmer", 'Boolean'>
    readonly phone_verified: FieldRef<"Farmer", 'Boolean'>
    readonly nin_verified: FieldRef<"Farmer", 'Boolean'>
    readonly has_paid: FieldRef<"Farmer", 'Boolean'>
    readonly status: FieldRef<"Farmer", 'Status'>
    readonly account_created_by: FieldRef<"Farmer", 'Int'>
    readonly createdAt: FieldRef<"Farmer", 'DateTime'>
    readonly updatedAt: FieldRef<"Farmer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farmer findUnique
   */
  export type FarmerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where: FarmerWhereUniqueInput
  }

  /**
   * Farmer findUniqueOrThrow
   */
  export type FarmerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where: FarmerWhereUniqueInput
  }

  /**
   * Farmer findFirst
   */
  export type FarmerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * Farmer findFirstOrThrow
   */
  export type FarmerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmer to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * Farmer findMany
   */
  export type FarmerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter, which Farmers to fetch.
     */
    where?: FarmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmers to fetch.
     */
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farmers.
     */
    cursor?: FarmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmers.
     */
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * Farmer create
   */
  export type FarmerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * The data needed to create a Farmer.
     */
    data: XOR<FarmerCreateInput, FarmerUncheckedCreateInput>
  }

  /**
   * Farmer createMany
   */
  export type FarmerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farmers.
     */
    data: FarmerCreateManyInput | FarmerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farmer update
   */
  export type FarmerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * The data needed to update a Farmer.
     */
    data: XOR<FarmerUpdateInput, FarmerUncheckedUpdateInput>
    /**
     * Choose, which Farmer to update.
     */
    where: FarmerWhereUniqueInput
  }

  /**
   * Farmer updateMany
   */
  export type FarmerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farmers.
     */
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyInput>
    /**
     * Filter which Farmers to update
     */
    where?: FarmerWhereInput
    /**
     * Limit how many Farmers to update.
     */
    limit?: number
  }

  /**
   * Farmer upsert
   */
  export type FarmerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * The filter to search for the Farmer to update in case it exists.
     */
    where: FarmerWhereUniqueInput
    /**
     * In case the Farmer found by the `where` argument doesn't exist, create a new Farmer with this data.
     */
    create: XOR<FarmerCreateInput, FarmerUncheckedCreateInput>
    /**
     * In case the Farmer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmerUpdateInput, FarmerUncheckedUpdateInput>
  }

  /**
   * Farmer delete
   */
  export type FarmerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    /**
     * Filter which Farmer to delete.
     */
    where: FarmerWhereUniqueInput
  }

  /**
   * Farmer deleteMany
   */
  export type FarmerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmers to delete
     */
    where?: FarmerWhereInput
    /**
     * Limit how many Farmers to delete.
     */
    limit?: number
  }

  /**
   * Farmer.inovices
   */
  export type Farmer$inovicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Farmer.farms
   */
  export type Farmer$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    cursor?: FarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farmer without action
   */
  export type FarmerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
  }


  /**
   * Model Bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  export type BankAvgAggregateOutputType = {
    id: number | null
  }

  export type BankSumAggregateOutputType = {
    id: number | null
  }

  export type BankMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankAvgAggregateInputType = {
    id?: true
  }

  export type BankSumAggregateInputType = {
    id?: true
  }

  export type BankMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank to aggregate.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banks
    **/
    _count?: true | BankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankMaxAggregateInputType
  }

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
        [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>
  }




  export type BankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
    orderBy?: BankOrderByWithAggregationInput | BankOrderByWithAggregationInput[]
    by: BankScalarFieldEnum[] | BankScalarFieldEnum
    having?: BankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCountAggregateInputType | true
    _avg?: BankAvgAggregateInputType
    _sum?: BankSumAggregateInputType
    _min?: BankMinAggregateInputType
    _max?: BankMaxAggregateInputType
  }

  export type BankGroupByOutputType = {
    id: number
    name: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  type GetBankGroupByPayload<T extends BankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankGroupByOutputType[P]>
            : GetScalarType<T[P], BankGroupByOutputType[P]>
        }
      >
    >


  export type BankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmers?: boolean | Bank$farmersArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>



  export type BankSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["bank"]>
  export type BankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | Bank$farmersArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank"
    objects: {
      farmers: Prisma.$FarmerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bank"]>
    composites: {}
  }

  type BankGetPayload<S extends boolean | null | undefined | BankDefaultArgs> = $Result.GetResult<Prisma.$BankPayload, S>

  type BankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCountAggregateInputType | true
    }

  export interface BankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank'], meta: { name: 'Bank' } }
    /**
     * Find zero or one Bank that matches the filter.
     * @param {BankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankFindUniqueArgs>(args: SelectSubset<T, BankFindUniqueArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankFindUniqueOrThrowArgs>(args: SelectSubset<T, BankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankFindFirstArgs>(args?: SelectSubset<T, BankFindFirstArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankFindFirstOrThrowArgs>(args?: SelectSubset<T, BankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankFindManyArgs>(args?: SelectSubset<T, BankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank.
     * @param {BankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     * 
     */
    create<T extends BankCreateArgs>(args: SelectSubset<T, BankCreateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {BankCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCreateManyArgs>(args?: SelectSubset<T, BankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bank.
     * @param {BankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     * 
     */
    delete<T extends BankDeleteArgs>(args: SelectSubset<T, BankDeleteArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank.
     * @param {BankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankUpdateArgs>(args: SelectSubset<T, BankUpdateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {BankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankDeleteManyArgs>(args?: SelectSubset<T, BankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankUpdateManyArgs>(args: SelectSubset<T, BankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bank.
     * @param {BankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     */
    upsert<T extends BankUpsertArgs>(args: SelectSubset<T, BankUpsertArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends BankCountArgs>(
      args?: Subset<T, BankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAggregateArgs>(args: Subset<T, BankAggregateArgs>): Prisma.PrismaPromise<GetBankAggregateType<T>>

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankGroupByArgs} args - Group by arguments.
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
      T extends BankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankGroupByArgs['orderBy'] }
        : { orderBy?: BankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank model
   */
  readonly fields: BankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmers<T extends Bank$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Bank$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bank model
   */
  interface BankFieldRefs {
    readonly id: FieldRef<"Bank", 'Int'>
    readonly name: FieldRef<"Bank", 'String'>
    readonly code: FieldRef<"Bank", 'String'>
    readonly createdAt: FieldRef<"Bank", 'DateTime'>
    readonly updatedAt: FieldRef<"Bank", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bank findUnique
   */
  export type BankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findUniqueOrThrow
   */
  export type BankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findFirst
   */
  export type BankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findFirstOrThrow
   */
  export type BankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findMany
   */
  export type BankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Banks to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank create
   */
  export type BankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank.
     */
    data: XOR<BankCreateInput, BankUncheckedCreateInput>
  }

  /**
   * Bank createMany
   */
  export type BankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank update
   */
  export type BankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank.
     */
    data: XOR<BankUpdateInput, BankUncheckedUpdateInput>
    /**
     * Choose, which Bank to update.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank updateMany
   */
  export type BankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank upsert
   */
  export type BankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank to update in case it exists.
     */
    where: BankWhereUniqueInput
    /**
     * In case the Bank found by the `where` argument doesn't exist, create a new Bank with this data.
     */
    create: XOR<BankCreateInput, BankUncheckedCreateInput>
    /**
     * In case the Bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankUpdateInput, BankUncheckedUpdateInput>
  }

  /**
   * Bank delete
   */
  export type BankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter which Bank to delete.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank deleteMany
   */
  export type BankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banks to delete
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to delete.
     */
    limit?: number
  }

  /**
   * Bank.farmers
   */
  export type Bank$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmer
     */
    select?: FarmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmer
     */
    omit?: FarmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmerInclude<ExtArgs> | null
    where?: FarmerWhereInput
    orderBy?: FarmerOrderByWithRelationInput | FarmerOrderByWithRelationInput[]
    cursor?: FarmerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * Bank without action
   */
  export type BankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    farmerId: number | null
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    farmerId: number | null
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    farmerId: number | null
    amount: number | null
    phone_number: string | null
    has_paid: boolean | null
    payment_reference: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    farmerId: number | null
    amount: number | null
    phone_number: string | null
    has_paid: boolean | null
    payment_reference: string | null
    status: $Enums.Status | null
    createdAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    farmerId: number
    amount: number
    phone_number: number
    has_paid: number
    payment_reference: number
    status: number
    createdAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    farmerId?: true
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    farmerId?: true
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    farmerId?: true
    amount?: true
    phone_number?: true
    has_paid?: true
    payment_reference?: true
    status?: true
    createdAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    farmerId?: true
    amount?: true
    phone_number?: true
    has_paid?: true
    payment_reference?: true
    status?: true
    createdAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    farmerId?: true
    amount?: true
    phone_number?: true
    has_paid?: true
    payment_reference?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    farmerId: number
    amount: number
    phone_number: string
    has_paid: boolean
    payment_reference: string | null
    status: $Enums.Status
    createdAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    amount?: boolean
    phone_number?: boolean
    has_paid?: boolean
    payment_reference?: boolean
    status?: boolean
    createdAt?: boolean
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>



  export type InvoiceSelectScalar = {
    id?: boolean
    farmerId?: boolean
    amount?: boolean
    phone_number?: boolean
    has_paid?: boolean
    payment_reference?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmerId" | "amount" | "phone_number" | "has_paid" | "payment_reference" | "status" | "createdAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      farmer: Prisma.$FarmerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      farmerId: number
      amount: number
      phone_number: string
      has_paid: boolean
      payment_reference: string | null
      status: $Enums.Status
      createdAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends FarmerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmerDefaultArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly farmerId: FieldRef<"Invoice", 'Int'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly phone_number: FieldRef<"Invoice", 'String'>
    readonly has_paid: FieldRef<"Invoice", 'Boolean'>
    readonly payment_reference: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'Status'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Farm
   */

  export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  export type FarmAvgAggregateOutputType = {
    id: number | null
    farmerId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    size: number | null
    number_of_workers: number | null
  }

  export type FarmSumAggregateOutputType = {
    id: number | null
    farmerId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    size: number | null
    number_of_workers: number | null
  }

  export type FarmMinAggregateOutputType = {
    id: number | null
    farmerId: number | null
    name: string | null
    location: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    type: $Enums.ProductionType | null
    production_type: string | null
    size: number | null
    sizeUnit: $Enums.SizeUnit | null
    stage: $Enums.FarmStage | null
    ownershipDocument: string | null
    number_of_workers: number | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmMaxAggregateOutputType = {
    id: number | null
    farmerId: number | null
    name: string | null
    location: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    type: $Enums.ProductionType | null
    production_type: string | null
    size: number | null
    sizeUnit: $Enums.SizeUnit | null
    stage: $Enums.FarmStage | null
    ownershipDocument: string | null
    number_of_workers: number | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmCountAggregateOutputType = {
    id: number
    farmerId: number
    name: number
    location: number
    latitude: number
    longitude: number
    type: number
    production_type: number
    size: number
    sizeUnit: number
    stage: number
    ownershipDocument: number
    number_of_workers: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmAvgAggregateInputType = {
    id?: true
    farmerId?: true
    latitude?: true
    longitude?: true
    size?: true
    number_of_workers?: true
  }

  export type FarmSumAggregateInputType = {
    id?: true
    farmerId?: true
    latitude?: true
    longitude?: true
    size?: true
    number_of_workers?: true
  }

  export type FarmMinAggregateInputType = {
    id?: true
    farmerId?: true
    name?: true
    location?: true
    latitude?: true
    longitude?: true
    type?: true
    production_type?: true
    size?: true
    sizeUnit?: true
    stage?: true
    ownershipDocument?: true
    number_of_workers?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmMaxAggregateInputType = {
    id?: true
    farmerId?: true
    name?: true
    location?: true
    latitude?: true
    longitude?: true
    type?: true
    production_type?: true
    size?: true
    sizeUnit?: true
    stage?: true
    ownershipDocument?: true
    number_of_workers?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmCountAggregateInputType = {
    id?: true
    farmerId?: true
    name?: true
    location?: true
    latitude?: true
    longitude?: true
    type?: true
    production_type?: true
    size?: true
    sizeUnit?: true
    stage?: true
    ownershipDocument?: true
    number_of_workers?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType
  }

  export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm[P]>
      : GetScalarType<T[P], AggregateFarm[P]>
  }




  export type FarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithAggregationInput | FarmOrderByWithAggregationInput[]
    by: FarmScalarFieldEnum[] | FarmScalarFieldEnum
    having?: FarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCountAggregateInputType | true
    _avg?: FarmAvgAggregateInputType
    _sum?: FarmSumAggregateInputType
    _min?: FarmMinAggregateInputType
    _max?: FarmMaxAggregateInputType
  }

  export type FarmGroupByOutputType = {
    id: number
    farmerId: number
    name: string
    location: string
    latitude: Decimal | null
    longitude: Decimal | null
    type: $Enums.ProductionType
    production_type: string | null
    size: number | null
    sizeUnit: $Enums.SizeUnit | null
    stage: $Enums.FarmStage
    ownershipDocument: string | null
    number_of_workers: number | null
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmGroupByOutputType[P]>
            : GetScalarType<T[P], FarmGroupByOutputType[P]>
        }
      >
    >


  export type FarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    name?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    production_type?: boolean
    size?: boolean
    sizeUnit?: boolean
    stage?: boolean
    ownershipDocument?: boolean
    number_of_workers?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
    media?: boolean | Farm$mediaArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>



  export type FarmSelectScalar = {
    id?: boolean
    farmerId?: boolean
    name?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    production_type?: boolean
    size?: boolean
    sizeUnit?: boolean
    stage?: boolean
    ownershipDocument?: boolean
    number_of_workers?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmerId" | "name" | "location" | "latitude" | "longitude" | "type" | "production_type" | "size" | "sizeUnit" | "stage" | "ownershipDocument" | "number_of_workers" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["farm"]>
  export type FarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | FarmerDefaultArgs<ExtArgs>
    media?: boolean | Farm$mediaArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm"
    objects: {
      farmer: Prisma.$FarmerPayload<ExtArgs>
      media: Prisma.$FarmMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      farmerId: number
      name: string
      location: string
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      type: $Enums.ProductionType
      production_type: string | null
      size: number | null
      sizeUnit: $Enums.SizeUnit | null
      stage: $Enums.FarmStage
      ownershipDocument: string | null
      number_of_workers: number | null
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farm"]>
    composites: {}
  }

  type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = $Result.GetResult<Prisma.$FarmPayload, S>

  type FarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmCountAggregateInputType | true
    }

  export interface FarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm'], meta: { name: 'Farm' } }
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmFindManyArgs>(args?: SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     * 
     */
    create<T extends FarmCreateArgs>(args: SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCreateManyArgs>(args?: SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     * 
     */
    delete<T extends FarmDeleteArgs>(args: SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmUpdateArgs>(args: SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmUpdateManyArgs>(args: SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(
      args?: Subset<T, FarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmAggregateArgs>(args: Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>

    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
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
      T extends FarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmGroupByArgs['orderBy'] }
        : { orderBy?: FarmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm model
   */
  readonly fields: FarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends FarmerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmerDefaultArgs<ExtArgs>>): Prisma__FarmerClient<$Result.GetResult<Prisma.$FarmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Farm$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Farm$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Farm model
   */
  interface FarmFieldRefs {
    readonly id: FieldRef<"Farm", 'Int'>
    readonly farmerId: FieldRef<"Farm", 'Int'>
    readonly name: FieldRef<"Farm", 'String'>
    readonly location: FieldRef<"Farm", 'String'>
    readonly latitude: FieldRef<"Farm", 'Decimal'>
    readonly longitude: FieldRef<"Farm", 'Decimal'>
    readonly type: FieldRef<"Farm", 'ProductionType'>
    readonly production_type: FieldRef<"Farm", 'String'>
    readonly size: FieldRef<"Farm", 'Float'>
    readonly sizeUnit: FieldRef<"Farm", 'SizeUnit'>
    readonly stage: FieldRef<"Farm", 'FarmStage'>
    readonly ownershipDocument: FieldRef<"Farm", 'String'>
    readonly number_of_workers: FieldRef<"Farm", 'Int'>
    readonly verified: FieldRef<"Farm", 'Boolean'>
    readonly createdAt: FieldRef<"Farm", 'DateTime'>
    readonly updatedAt: FieldRef<"Farm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farm findUnique
   */
  export type FarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findUniqueOrThrow
   */
  export type FarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findFirst
   */
  export type FarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findFirstOrThrow
   */
  export type FarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findMany
   */
  export type FarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm create
   */
  export type FarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm.
     */
    data: XOR<FarmCreateInput, FarmUncheckedCreateInput>
  }

  /**
   * Farm createMany
   */
  export type FarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm update
   */
  export type FarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm.
     */
    data: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
    /**
     * Choose, which Farm to update.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm updateMany
   */
  export type FarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
  }

  /**
   * Farm upsert
   */
  export type FarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: FarmWhereUniqueInput
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: XOR<FarmCreateInput, FarmUncheckedCreateInput>
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
  }

  /**
   * Farm delete
   */
  export type FarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter which Farm to delete.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm deleteMany
   */
  export type FarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to delete.
     */
    limit?: number
  }

  /**
   * Farm.media
   */
  export type Farm$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    where?: FarmMediaWhereInput
    orderBy?: FarmMediaOrderByWithRelationInput | FarmMediaOrderByWithRelationInput[]
    cursor?: FarmMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmMediaScalarFieldEnum | FarmMediaScalarFieldEnum[]
  }

  /**
   * Farm without action
   */
  export type FarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
  }


  /**
   * Model FarmMedia
   */

  export type AggregateFarmMedia = {
    _count: FarmMediaCountAggregateOutputType | null
    _avg: FarmMediaAvgAggregateOutputType | null
    _sum: FarmMediaSumAggregateOutputType | null
    _min: FarmMediaMinAggregateOutputType | null
    _max: FarmMediaMaxAggregateOutputType | null
  }

  export type FarmMediaAvgAggregateOutputType = {
    id: number | null
    farmId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type FarmMediaSumAggregateOutputType = {
    id: number | null
    farmId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type FarmMediaMinAggregateOutputType = {
    id: number | null
    farmId: number | null
    url: string | null
    mediaType: $Enums.MediaType | null
    latitude: Decimal | null
    longitude: Decimal | null
    caption: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmMediaMaxAggregateOutputType = {
    id: number | null
    farmId: number | null
    url: string | null
    mediaType: $Enums.MediaType | null
    latitude: Decimal | null
    longitude: Decimal | null
    caption: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmMediaCountAggregateOutputType = {
    id: number
    farmId: number
    url: number
    mediaType: number
    latitude: number
    longitude: number
    caption: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmMediaAvgAggregateInputType = {
    id?: true
    farmId?: true
    latitude?: true
    longitude?: true
  }

  export type FarmMediaSumAggregateInputType = {
    id?: true
    farmId?: true
    latitude?: true
    longitude?: true
  }

  export type FarmMediaMinAggregateInputType = {
    id?: true
    farmId?: true
    url?: true
    mediaType?: true
    latitude?: true
    longitude?: true
    caption?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmMediaMaxAggregateInputType = {
    id?: true
    farmId?: true
    url?: true
    mediaType?: true
    latitude?: true
    longitude?: true
    caption?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmMediaCountAggregateInputType = {
    id?: true
    farmId?: true
    url?: true
    mediaType?: true
    latitude?: true
    longitude?: true
    caption?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmMedia to aggregate.
     */
    where?: FarmMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmMedias to fetch.
     */
    orderBy?: FarmMediaOrderByWithRelationInput | FarmMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmMedias
    **/
    _count?: true | FarmMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMediaMaxAggregateInputType
  }

  export type GetFarmMediaAggregateType<T extends FarmMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmMedia[P]>
      : GetScalarType<T[P], AggregateFarmMedia[P]>
  }




  export type FarmMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmMediaWhereInput
    orderBy?: FarmMediaOrderByWithAggregationInput | FarmMediaOrderByWithAggregationInput[]
    by: FarmMediaScalarFieldEnum[] | FarmMediaScalarFieldEnum
    having?: FarmMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmMediaCountAggregateInputType | true
    _avg?: FarmMediaAvgAggregateInputType
    _sum?: FarmMediaSumAggregateInputType
    _min?: FarmMediaMinAggregateInputType
    _max?: FarmMediaMaxAggregateInputType
  }

  export type FarmMediaGroupByOutputType = {
    id: number
    farmId: number
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal
    longitude: Decimal
    caption: string | null
    createdAt: Date
    updatedAt: Date
    _count: FarmMediaCountAggregateOutputType | null
    _avg: FarmMediaAvgAggregateOutputType | null
    _sum: FarmMediaSumAggregateOutputType | null
    _min: FarmMediaMinAggregateOutputType | null
    _max: FarmMediaMaxAggregateOutputType | null
  }

  type GetFarmMediaGroupByPayload<T extends FarmMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmMediaGroupByOutputType[P]>
            : GetScalarType<T[P], FarmMediaGroupByOutputType[P]>
        }
      >
    >


  export type FarmMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    url?: boolean
    mediaType?: boolean
    latitude?: boolean
    longitude?: boolean
    caption?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmMedia"]>



  export type FarmMediaSelectScalar = {
    id?: boolean
    farmId?: boolean
    url?: boolean
    mediaType?: boolean
    latitude?: boolean
    longitude?: boolean
    caption?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmId" | "url" | "mediaType" | "latitude" | "longitude" | "caption" | "createdAt" | "updatedAt", ExtArgs["result"]["farmMedia"]>
  export type FarmMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }

  export type $FarmMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FarmMedia"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      farmId: number
      url: string
      mediaType: $Enums.MediaType
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      caption: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farmMedia"]>
    composites: {}
  }

  type FarmMediaGetPayload<S extends boolean | null | undefined | FarmMediaDefaultArgs> = $Result.GetResult<Prisma.$FarmMediaPayload, S>

  type FarmMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmMediaCountAggregateInputType | true
    }

  export interface FarmMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FarmMedia'], meta: { name: 'FarmMedia' } }
    /**
     * Find zero or one FarmMedia that matches the filter.
     * @param {FarmMediaFindUniqueArgs} args - Arguments to find a FarmMedia
     * @example
     * // Get one FarmMedia
     * const farmMedia = await prisma.farmMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmMediaFindUniqueArgs>(args: SelectSubset<T, FarmMediaFindUniqueArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FarmMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmMediaFindUniqueOrThrowArgs} args - Arguments to find a FarmMedia
     * @example
     * // Get one FarmMedia
     * const farmMedia = await prisma.farmMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaFindFirstArgs} args - Arguments to find a FarmMedia
     * @example
     * // Get one FarmMedia
     * const farmMedia = await prisma.farmMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmMediaFindFirstArgs>(args?: SelectSubset<T, FarmMediaFindFirstArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaFindFirstOrThrowArgs} args - Arguments to find a FarmMedia
     * @example
     * // Get one FarmMedia
     * const farmMedia = await prisma.farmMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FarmMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmMedias
     * const farmMedias = await prisma.farmMedia.findMany()
     * 
     * // Get first 10 FarmMedias
     * const farmMedias = await prisma.farmMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmMediaWithIdOnly = await prisma.farmMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmMediaFindManyArgs>(args?: SelectSubset<T, FarmMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FarmMedia.
     * @param {FarmMediaCreateArgs} args - Arguments to create a FarmMedia.
     * @example
     * // Create one FarmMedia
     * const FarmMedia = await prisma.farmMedia.create({
     *   data: {
     *     // ... data to create a FarmMedia
     *   }
     * })
     * 
     */
    create<T extends FarmMediaCreateArgs>(args: SelectSubset<T, FarmMediaCreateArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FarmMedias.
     * @param {FarmMediaCreateManyArgs} args - Arguments to create many FarmMedias.
     * @example
     * // Create many FarmMedias
     * const farmMedia = await prisma.farmMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmMediaCreateManyArgs>(args?: SelectSubset<T, FarmMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FarmMedia.
     * @param {FarmMediaDeleteArgs} args - Arguments to delete one FarmMedia.
     * @example
     * // Delete one FarmMedia
     * const FarmMedia = await prisma.farmMedia.delete({
     *   where: {
     *     // ... filter to delete one FarmMedia
     *   }
     * })
     * 
     */
    delete<T extends FarmMediaDeleteArgs>(args: SelectSubset<T, FarmMediaDeleteArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FarmMedia.
     * @param {FarmMediaUpdateArgs} args - Arguments to update one FarmMedia.
     * @example
     * // Update one FarmMedia
     * const farmMedia = await prisma.farmMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmMediaUpdateArgs>(args: SelectSubset<T, FarmMediaUpdateArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FarmMedias.
     * @param {FarmMediaDeleteManyArgs} args - Arguments to filter FarmMedias to delete.
     * @example
     * // Delete a few FarmMedias
     * const { count } = await prisma.farmMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmMediaDeleteManyArgs>(args?: SelectSubset<T, FarmMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmMedias
     * const farmMedia = await prisma.farmMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmMediaUpdateManyArgs>(args: SelectSubset<T, FarmMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FarmMedia.
     * @param {FarmMediaUpsertArgs} args - Arguments to update or create a FarmMedia.
     * @example
     * // Update or create a FarmMedia
     * const farmMedia = await prisma.farmMedia.upsert({
     *   create: {
     *     // ... data to create a FarmMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmMedia we want to update
     *   }
     * })
     */
    upsert<T extends FarmMediaUpsertArgs>(args: SelectSubset<T, FarmMediaUpsertArgs<ExtArgs>>): Prisma__FarmMediaClient<$Result.GetResult<Prisma.$FarmMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FarmMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaCountArgs} args - Arguments to filter FarmMedias to count.
     * @example
     * // Count the number of FarmMedias
     * const count = await prisma.farmMedia.count({
     *   where: {
     *     // ... the filter for the FarmMedias we want to count
     *   }
     * })
    **/
    count<T extends FarmMediaCountArgs>(
      args?: Subset<T, FarmMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmMediaAggregateArgs>(args: Subset<T, FarmMediaAggregateArgs>): Prisma.PrismaPromise<GetFarmMediaAggregateType<T>>

    /**
     * Group by FarmMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmMediaGroupByArgs} args - Group by arguments.
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
      T extends FarmMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmMediaGroupByArgs['orderBy'] }
        : { orderBy?: FarmMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FarmMedia model
   */
  readonly fields: FarmMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FarmMedia model
   */
  interface FarmMediaFieldRefs {
    readonly id: FieldRef<"FarmMedia", 'Int'>
    readonly farmId: FieldRef<"FarmMedia", 'Int'>
    readonly url: FieldRef<"FarmMedia", 'String'>
    readonly mediaType: FieldRef<"FarmMedia", 'MediaType'>
    readonly latitude: FieldRef<"FarmMedia", 'Decimal'>
    readonly longitude: FieldRef<"FarmMedia", 'Decimal'>
    readonly caption: FieldRef<"FarmMedia", 'String'>
    readonly createdAt: FieldRef<"FarmMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"FarmMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FarmMedia findUnique
   */
  export type FarmMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * Filter, which FarmMedia to fetch.
     */
    where: FarmMediaWhereUniqueInput
  }

  /**
   * FarmMedia findUniqueOrThrow
   */
  export type FarmMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * Filter, which FarmMedia to fetch.
     */
    where: FarmMediaWhereUniqueInput
  }

  /**
   * FarmMedia findFirst
   */
  export type FarmMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * Filter, which FarmMedia to fetch.
     */
    where?: FarmMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmMedias to fetch.
     */
    orderBy?: FarmMediaOrderByWithRelationInput | FarmMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmMedias.
     */
    cursor?: FarmMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmMedias.
     */
    distinct?: FarmMediaScalarFieldEnum | FarmMediaScalarFieldEnum[]
  }

  /**
   * FarmMedia findFirstOrThrow
   */
  export type FarmMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * Filter, which FarmMedia to fetch.
     */
    where?: FarmMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmMedias to fetch.
     */
    orderBy?: FarmMediaOrderByWithRelationInput | FarmMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmMedias.
     */
    cursor?: FarmMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmMedias.
     */
    distinct?: FarmMediaScalarFieldEnum | FarmMediaScalarFieldEnum[]
  }

  /**
   * FarmMedia findMany
   */
  export type FarmMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * Filter, which FarmMedias to fetch.
     */
    where?: FarmMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmMedias to fetch.
     */
    orderBy?: FarmMediaOrderByWithRelationInput | FarmMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmMedias.
     */
    cursor?: FarmMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmMedias.
     */
    skip?: number
    distinct?: FarmMediaScalarFieldEnum | FarmMediaScalarFieldEnum[]
  }

  /**
   * FarmMedia create
   */
  export type FarmMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a FarmMedia.
     */
    data: XOR<FarmMediaCreateInput, FarmMediaUncheckedCreateInput>
  }

  /**
   * FarmMedia createMany
   */
  export type FarmMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmMedias.
     */
    data: FarmMediaCreateManyInput | FarmMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmMedia update
   */
  export type FarmMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a FarmMedia.
     */
    data: XOR<FarmMediaUpdateInput, FarmMediaUncheckedUpdateInput>
    /**
     * Choose, which FarmMedia to update.
     */
    where: FarmMediaWhereUniqueInput
  }

  /**
   * FarmMedia updateMany
   */
  export type FarmMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmMedias.
     */
    data: XOR<FarmMediaUpdateManyMutationInput, FarmMediaUncheckedUpdateManyInput>
    /**
     * Filter which FarmMedias to update
     */
    where?: FarmMediaWhereInput
    /**
     * Limit how many FarmMedias to update.
     */
    limit?: number
  }

  /**
   * FarmMedia upsert
   */
  export type FarmMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the FarmMedia to update in case it exists.
     */
    where: FarmMediaWhereUniqueInput
    /**
     * In case the FarmMedia found by the `where` argument doesn't exist, create a new FarmMedia with this data.
     */
    create: XOR<FarmMediaCreateInput, FarmMediaUncheckedCreateInput>
    /**
     * In case the FarmMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmMediaUpdateInput, FarmMediaUncheckedUpdateInput>
  }

  /**
   * FarmMedia delete
   */
  export type FarmMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
    /**
     * Filter which FarmMedia to delete.
     */
    where: FarmMediaWhereUniqueInput
  }

  /**
   * FarmMedia deleteMany
   */
  export type FarmMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmMedias to delete
     */
    where?: FarmMediaWhereInput
    /**
     * Limit how many FarmMedias to delete.
     */
    limit?: number
  }

  /**
   * FarmMedia without action
   */
  export type FarmMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMedia
     */
    select?: FarmMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmMedia
     */
    omit?: FarmMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmMediaInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    identifier: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    identifier: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    identifier: number
    code: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationCodeMinAggregateInputType = {
    identifier?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    identifier?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    identifier?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    identifier: string
    code: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>



  export type VerificationCodeSelectScalar = {
    identifier?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "code" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationCode"]>

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      code: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationCodeWithIdentifierOnly = await prisma.verificationCode.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly identifier: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    countryId: 'countryId',
    stateId: 'stateId',
    lgaId: 'lgaId',
    profile_image: 'profile_image',
    verification_code: 'verification_code',
    email_verified: 'email_verified',
    status: 'status',
    password: 'password',
    temporal_password: 'temporal_password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iso2: 'iso2',
    iso3: 'iso3',
    numericCode: 'numericCode',
    phoneCode: 'phoneCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    countryId: 'countryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const LgaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    stateId: 'stateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LgaScalarFieldEnum = (typeof LgaScalarFieldEnum)[keyof typeof LgaScalarFieldEnum]


  export const FarmerScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    nin: 'nin',
    profile_image: 'profile_image',
    proof_of_address: 'proof_of_address',
    bankId: 'bankId',
    account_number: 'account_number',
    account_name: 'account_name',
    countryId: 'countryId',
    stateId: 'stateId',
    lgaId: 'lgaId',
    email_verified: 'email_verified',
    phone_verified: 'phone_verified',
    nin_verified: 'nin_verified',
    has_paid: 'has_paid',
    status: 'status',
    account_created_by: 'account_created_by',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmerScalarFieldEnum = (typeof FarmerScalarFieldEnum)[keyof typeof FarmerScalarFieldEnum]


  export const BankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    amount: 'amount',
    phone_number: 'phone_number',
    has_paid: 'has_paid',
    payment_reference: 'payment_reference',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const FarmScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    name: 'name',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    type: 'type',
    production_type: 'production_type',
    size: 'size',
    sizeUnit: 'sizeUnit',
    stage: 'stage',
    ownershipDocument: 'ownershipDocument',
    number_of_workers: 'number_of_workers',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum]


  export const FarmMediaScalarFieldEnum: {
    id: 'id',
    farmId: 'farmId',
    url: 'url',
    mediaType: 'mediaType',
    latitude: 'latitude',
    longitude: 'longitude',
    caption: 'caption',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmMediaScalarFieldEnum = (typeof FarmMediaScalarFieldEnum)[keyof typeof FarmMediaScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    identifier: 'identifier',
    code: 'code',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


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


  export const AdminOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    verification_code: 'verification_code',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const CountryOrderByRelevanceFieldEnum: {
    name: 'name',
    iso2: 'iso2',
    iso3: 'iso3',
    numericCode: 'numericCode',
    phoneCode: 'phoneCode'
  };

  export type CountryOrderByRelevanceFieldEnum = (typeof CountryOrderByRelevanceFieldEnum)[keyof typeof CountryOrderByRelevanceFieldEnum]


  export const StateOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code'
  };

  export type StateOrderByRelevanceFieldEnum = (typeof StateOrderByRelevanceFieldEnum)[keyof typeof StateOrderByRelevanceFieldEnum]


  export const LgaOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code'
  };

  export type LgaOrderByRelevanceFieldEnum = (typeof LgaOrderByRelevanceFieldEnum)[keyof typeof LgaOrderByRelevanceFieldEnum]


  export const FarmerOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    nin: 'nin',
    profile_image: 'profile_image',
    proof_of_address: 'proof_of_address',
    account_number: 'account_number',
    account_name: 'account_name'
  };

  export type FarmerOrderByRelevanceFieldEnum = (typeof FarmerOrderByRelevanceFieldEnum)[keyof typeof FarmerOrderByRelevanceFieldEnum]


  export const BankOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code'
  };

  export type BankOrderByRelevanceFieldEnum = (typeof BankOrderByRelevanceFieldEnum)[keyof typeof BankOrderByRelevanceFieldEnum]


  export const InvoiceOrderByRelevanceFieldEnum: {
    phone_number: 'phone_number',
    payment_reference: 'payment_reference'
  };

  export type InvoiceOrderByRelevanceFieldEnum = (typeof InvoiceOrderByRelevanceFieldEnum)[keyof typeof InvoiceOrderByRelevanceFieldEnum]


  export const FarmOrderByRelevanceFieldEnum: {
    name: 'name',
    location: 'location',
    production_type: 'production_type',
    ownershipDocument: 'ownershipDocument'
  };

  export type FarmOrderByRelevanceFieldEnum = (typeof FarmOrderByRelevanceFieldEnum)[keyof typeof FarmOrderByRelevanceFieldEnum]


  export const FarmMediaOrderByRelevanceFieldEnum: {
    url: 'url',
    caption: 'caption'
  };

  export type FarmMediaOrderByRelevanceFieldEnum = (typeof FarmMediaOrderByRelevanceFieldEnum)[keyof typeof FarmMediaOrderByRelevanceFieldEnum]


  export const VerificationCodeOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    code: 'code'
  };

  export type VerificationCodeOrderByRelevanceFieldEnum = (typeof VerificationCodeOrderByRelevanceFieldEnum)[keyof typeof VerificationCodeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ProductionType'
   */
  export type EnumProductionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductionType'>
    


  /**
   * Reference to a field of type 'SizeUnit'
   */
  export type EnumSizeUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SizeUnit'>
    


  /**
   * Reference to a field of type 'FarmStage'
   */
  export type EnumFarmStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FarmStage'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullname?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullname?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullname?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    fullname?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone_number?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    countryId?: IntNullableFilter<"Users"> | number | null
    stateId?: IntNullableFilter<"Users"> | number | null
    lgaId?: IntNullableFilter<"Users"> | number | null
    profile_image?: StringNullableFilter<"Users"> | string | null
    verification_code?: StringNullableFilter<"Users"> | string | null
    email_verified?: BoolFilter<"Users"> | boolean
    status?: EnumStatusFilter<"Users"> | $Enums.Status
    password?: StringFilter<"Users"> | string
    temporal_password?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    lga?: XOR<LgaNullableScalarRelationFilter, LgaWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    countryId?: SortOrderInput | SortOrder
    stateId?: SortOrderInput | SortOrder
    lgaId?: SortOrderInput | SortOrder
    profile_image?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    lga?: LgaOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullname?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    countryId?: IntNullableFilter<"Users"> | number | null
    stateId?: IntNullableFilter<"Users"> | number | null
    lgaId?: IntNullableFilter<"Users"> | number | null
    profile_image?: StringNullableFilter<"Users"> | string | null
    verification_code?: StringNullableFilter<"Users"> | string | null
    email_verified?: BoolFilter<"Users"> | boolean
    status?: EnumStatusFilter<"Users"> | $Enums.Status
    password?: StringFilter<"Users"> | string
    temporal_password?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    lga?: XOR<LgaNullableScalarRelationFilter, LgaWhereInput> | null
  }, "id" | "username" | "email" | "phone_number">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    countryId?: SortOrderInput | SortOrder
    stateId?: SortOrderInput | SortOrder
    lgaId?: SortOrderInput | SortOrder
    profile_image?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    fullname?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone_number?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    countryId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    stateId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    lgaId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    profile_image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    verification_code?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email_verified?: BoolWithAggregatesFilter<"Users"> | boolean
    status?: EnumStatusWithAggregatesFilter<"Users"> | $Enums.Status
    password?: StringWithAggregatesFilter<"Users"> | string
    temporal_password?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    iso2?: StringNullableFilter<"Country"> | string | null
    iso3?: StringNullableFilter<"Country"> | string | null
    numericCode?: StringNullableFilter<"Country"> | string | null
    phoneCode?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    states?: StateListRelationFilter
    users?: UsersListRelationFilter
    farmers?: FarmerListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrderInput | SortOrder
    iso3?: SortOrderInput | SortOrder
    numericCode?: SortOrderInput | SortOrder
    phoneCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    states?: StateOrderByRelationAggregateInput
    users?: UsersOrderByRelationAggregateInput
    farmers?: FarmerOrderByRelationAggregateInput
    _relevance?: CountryOrderByRelevanceInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    iso2?: string
    iso3?: string
    numericCode?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    phoneCode?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    states?: StateListRelationFilter
    users?: UsersListRelationFilter
    farmers?: FarmerListRelationFilter
  }, "id" | "iso2" | "iso3" | "numericCode">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrderInput | SortOrder
    iso3?: SortOrderInput | SortOrder
    numericCode?: SortOrderInput | SortOrder
    phoneCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    iso2?: StringNullableWithAggregatesFilter<"Country"> | string | null
    iso3?: StringNullableWithAggregatesFilter<"Country"> | string | null
    numericCode?: StringNullableWithAggregatesFilter<"Country"> | string | null
    phoneCode?: StringNullableWithAggregatesFilter<"Country"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    code?: StringNullableFilter<"State"> | string | null
    countryId?: IntFilter<"State"> | number
    createdAt?: DateTimeFilter<"State"> | Date | string
    updatedAt?: DateTimeFilter<"State"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    lgas?: LgaListRelationFilter
    users?: UsersListRelationFilter
    farmers?: FarmerListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    lgas?: LgaOrderByRelationAggregateInput
    users?: UsersOrderByRelationAggregateInput
    farmers?: FarmerOrderByRelationAggregateInput
    _relevance?: StateOrderByRelevanceInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_countryId?: StateNameCountryIdCompoundUniqueInput
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    name?: StringFilter<"State"> | string
    code?: StringNullableFilter<"State"> | string | null
    countryId?: IntFilter<"State"> | number
    createdAt?: DateTimeFilter<"State"> | Date | string
    updatedAt?: DateTimeFilter<"State"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    lgas?: LgaListRelationFilter
    users?: UsersListRelationFilter
    farmers?: FarmerListRelationFilter
  }, "id" | "name_countryId">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    name?: StringWithAggregatesFilter<"State"> | string
    code?: StringNullableWithAggregatesFilter<"State"> | string | null
    countryId?: IntWithAggregatesFilter<"State"> | number
    createdAt?: DateTimeWithAggregatesFilter<"State"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"State"> | Date | string
  }

  export type LgaWhereInput = {
    AND?: LgaWhereInput | LgaWhereInput[]
    OR?: LgaWhereInput[]
    NOT?: LgaWhereInput | LgaWhereInput[]
    id?: IntFilter<"Lga"> | number
    name?: StringFilter<"Lga"> | string
    code?: StringNullableFilter<"Lga"> | string | null
    stateId?: IntFilter<"Lga"> | number
    createdAt?: DateTimeFilter<"Lga"> | Date | string
    updatedAt?: DateTimeFilter<"Lga"> | Date | string
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    users?: UsersListRelationFilter
    farmers?: FarmerListRelationFilter
  }

  export type LgaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    stateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: StateOrderByWithRelationInput
    users?: UsersOrderByRelationAggregateInput
    farmers?: FarmerOrderByRelationAggregateInput
    _relevance?: LgaOrderByRelevanceInput
  }

  export type LgaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_stateId?: LgaNameStateIdCompoundUniqueInput
    AND?: LgaWhereInput | LgaWhereInput[]
    OR?: LgaWhereInput[]
    NOT?: LgaWhereInput | LgaWhereInput[]
    name?: StringFilter<"Lga"> | string
    code?: StringNullableFilter<"Lga"> | string | null
    stateId?: IntFilter<"Lga"> | number
    createdAt?: DateTimeFilter<"Lga"> | Date | string
    updatedAt?: DateTimeFilter<"Lga"> | Date | string
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    users?: UsersListRelationFilter
    farmers?: FarmerListRelationFilter
  }, "id" | "name_stateId">

  export type LgaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    stateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LgaCountOrderByAggregateInput
    _avg?: LgaAvgOrderByAggregateInput
    _max?: LgaMaxOrderByAggregateInput
    _min?: LgaMinOrderByAggregateInput
    _sum?: LgaSumOrderByAggregateInput
  }

  export type LgaScalarWhereWithAggregatesInput = {
    AND?: LgaScalarWhereWithAggregatesInput | LgaScalarWhereWithAggregatesInput[]
    OR?: LgaScalarWhereWithAggregatesInput[]
    NOT?: LgaScalarWhereWithAggregatesInput | LgaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lga"> | number
    name?: StringWithAggregatesFilter<"Lga"> | string
    code?: StringNullableWithAggregatesFilter<"Lga"> | string | null
    stateId?: IntWithAggregatesFilter<"Lga"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lga"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lga"> | Date | string
  }

  export type FarmerWhereInput = {
    AND?: FarmerWhereInput | FarmerWhereInput[]
    OR?: FarmerWhereInput[]
    NOT?: FarmerWhereInput | FarmerWhereInput[]
    id?: IntFilter<"Farmer"> | number
    fullname?: StringFilter<"Farmer"> | string
    email?: StringNullableFilter<"Farmer"> | string | null
    phone_number?: StringFilter<"Farmer"> | string
    address?: StringFilter<"Farmer"> | string
    nin?: StringFilter<"Farmer"> | string
    profile_image?: StringNullableFilter<"Farmer"> | string | null
    proof_of_address?: StringNullableFilter<"Farmer"> | string | null
    bankId?: IntFilter<"Farmer"> | number
    account_number?: StringFilter<"Farmer"> | string
    account_name?: StringFilter<"Farmer"> | string
    countryId?: IntFilter<"Farmer"> | number
    stateId?: IntFilter<"Farmer"> | number
    lgaId?: IntFilter<"Farmer"> | number
    email_verified?: BoolFilter<"Farmer"> | boolean
    phone_verified?: BoolFilter<"Farmer"> | boolean
    nin_verified?: BoolFilter<"Farmer"> | boolean
    has_paid?: BoolFilter<"Farmer"> | boolean
    status?: EnumStatusFilter<"Farmer"> | $Enums.Status
    account_created_by?: IntFilter<"Farmer"> | number
    createdAt?: DateTimeFilter<"Farmer"> | Date | string
    updatedAt?: DateTimeFilter<"Farmer"> | Date | string
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    lga?: XOR<LgaScalarRelationFilter, LgaWhereInput>
    inovices?: InvoiceListRelationFilter
    farms?: FarmListRelationFilter
  }

  export type FarmerOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    nin?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    proof_of_address?: SortOrderInput | SortOrder
    bankId?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    email_verified?: SortOrder
    phone_verified?: SortOrder
    nin_verified?: SortOrder
    has_paid?: SortOrder
    status?: SortOrder
    account_created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bank?: BankOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    lga?: LgaOrderByWithRelationInput
    inovices?: InvoiceOrderByRelationAggregateInput
    farms?: FarmOrderByRelationAggregateInput
    _relevance?: FarmerOrderByRelevanceInput
  }

  export type FarmerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    nin?: string
    account_number?: string
    AND?: FarmerWhereInput | FarmerWhereInput[]
    OR?: FarmerWhereInput[]
    NOT?: FarmerWhereInput | FarmerWhereInput[]
    fullname?: StringFilter<"Farmer"> | string
    address?: StringFilter<"Farmer"> | string
    profile_image?: StringNullableFilter<"Farmer"> | string | null
    proof_of_address?: StringNullableFilter<"Farmer"> | string | null
    bankId?: IntFilter<"Farmer"> | number
    account_name?: StringFilter<"Farmer"> | string
    countryId?: IntFilter<"Farmer"> | number
    stateId?: IntFilter<"Farmer"> | number
    lgaId?: IntFilter<"Farmer"> | number
    email_verified?: BoolFilter<"Farmer"> | boolean
    phone_verified?: BoolFilter<"Farmer"> | boolean
    nin_verified?: BoolFilter<"Farmer"> | boolean
    has_paid?: BoolFilter<"Farmer"> | boolean
    status?: EnumStatusFilter<"Farmer"> | $Enums.Status
    account_created_by?: IntFilter<"Farmer"> | number
    createdAt?: DateTimeFilter<"Farmer"> | Date | string
    updatedAt?: DateTimeFilter<"Farmer"> | Date | string
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    lga?: XOR<LgaScalarRelationFilter, LgaWhereInput>
    inovices?: InvoiceListRelationFilter
    farms?: FarmListRelationFilter
  }, "id" | "email" | "phone_number" | "nin" | "account_number">

  export type FarmerOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    nin?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    proof_of_address?: SortOrderInput | SortOrder
    bankId?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    email_verified?: SortOrder
    phone_verified?: SortOrder
    nin_verified?: SortOrder
    has_paid?: SortOrder
    status?: SortOrder
    account_created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmerCountOrderByAggregateInput
    _avg?: FarmerAvgOrderByAggregateInput
    _max?: FarmerMaxOrderByAggregateInput
    _min?: FarmerMinOrderByAggregateInput
    _sum?: FarmerSumOrderByAggregateInput
  }

  export type FarmerScalarWhereWithAggregatesInput = {
    AND?: FarmerScalarWhereWithAggregatesInput | FarmerScalarWhereWithAggregatesInput[]
    OR?: FarmerScalarWhereWithAggregatesInput[]
    NOT?: FarmerScalarWhereWithAggregatesInput | FarmerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Farmer"> | number
    fullname?: StringWithAggregatesFilter<"Farmer"> | string
    email?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    phone_number?: StringWithAggregatesFilter<"Farmer"> | string
    address?: StringWithAggregatesFilter<"Farmer"> | string
    nin?: StringWithAggregatesFilter<"Farmer"> | string
    profile_image?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    proof_of_address?: StringNullableWithAggregatesFilter<"Farmer"> | string | null
    bankId?: IntWithAggregatesFilter<"Farmer"> | number
    account_number?: StringWithAggregatesFilter<"Farmer"> | string
    account_name?: StringWithAggregatesFilter<"Farmer"> | string
    countryId?: IntWithAggregatesFilter<"Farmer"> | number
    stateId?: IntWithAggregatesFilter<"Farmer"> | number
    lgaId?: IntWithAggregatesFilter<"Farmer"> | number
    email_verified?: BoolWithAggregatesFilter<"Farmer"> | boolean
    phone_verified?: BoolWithAggregatesFilter<"Farmer"> | boolean
    nin_verified?: BoolWithAggregatesFilter<"Farmer"> | boolean
    has_paid?: BoolWithAggregatesFilter<"Farmer"> | boolean
    status?: EnumStatusWithAggregatesFilter<"Farmer"> | $Enums.Status
    account_created_by?: IntWithAggregatesFilter<"Farmer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Farmer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farmer"> | Date | string
  }

  export type BankWhereInput = {
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    id?: IntFilter<"Bank"> | number
    name?: StringFilter<"Bank"> | string
    code?: StringFilter<"Bank"> | string
    createdAt?: DateTimeFilter<"Bank"> | Date | string
    updatedAt?: DateTimeFilter<"Bank"> | Date | string
    farmers?: FarmerListRelationFilter
  }

  export type BankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmers?: FarmerOrderByRelationAggregateInput
    _relevance?: BankOrderByRelevanceInput
  }

  export type BankWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    name?: StringFilter<"Bank"> | string
    createdAt?: DateTimeFilter<"Bank"> | Date | string
    updatedAt?: DateTimeFilter<"Bank"> | Date | string
    farmers?: FarmerListRelationFilter
  }, "id" | "code">

  export type BankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankCountOrderByAggregateInput
    _avg?: BankAvgOrderByAggregateInput
    _max?: BankMaxOrderByAggregateInput
    _min?: BankMinOrderByAggregateInput
    _sum?: BankSumOrderByAggregateInput
  }

  export type BankScalarWhereWithAggregatesInput = {
    AND?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    OR?: BankScalarWhereWithAggregatesInput[]
    NOT?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank"> | number
    name?: StringWithAggregatesFilter<"Bank"> | string
    code?: StringWithAggregatesFilter<"Bank"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bank"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bank"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    farmerId?: IntFilter<"Invoice"> | number
    amount?: FloatFilter<"Invoice"> | number
    phone_number?: StringFilter<"Invoice"> | string
    has_paid?: BoolFilter<"Invoice"> | boolean
    payment_reference?: StringNullableFilter<"Invoice"> | string | null
    status?: EnumStatusFilter<"Invoice"> | $Enums.Status
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    farmer?: XOR<FarmerScalarRelationFilter, FarmerWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
    phone_number?: SortOrder
    has_paid?: SortOrder
    payment_reference?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    farmer?: FarmerOrderByWithRelationInput
    _relevance?: InvoiceOrderByRelevanceInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    payment_reference?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    farmerId?: IntFilter<"Invoice"> | number
    amount?: FloatFilter<"Invoice"> | number
    phone_number?: StringFilter<"Invoice"> | string
    has_paid?: BoolFilter<"Invoice"> | boolean
    status?: EnumStatusFilter<"Invoice"> | $Enums.Status
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    farmer?: XOR<FarmerScalarRelationFilter, FarmerWhereInput>
  }, "id" | "payment_reference">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
    phone_number?: SortOrder
    has_paid?: SortOrder
    payment_reference?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    farmerId?: IntWithAggregatesFilter<"Invoice"> | number
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    phone_number?: StringWithAggregatesFilter<"Invoice"> | string
    has_paid?: BoolWithAggregatesFilter<"Invoice"> | boolean
    payment_reference?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Invoice"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type FarmWhereInput = {
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    id?: IntFilter<"Farm"> | number
    farmerId?: IntFilter<"Farm"> | number
    name?: StringFilter<"Farm"> | string
    location?: StringFilter<"Farm"> | string
    latitude?: DecimalNullableFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFilter<"Farm"> | $Enums.ProductionType
    production_type?: StringNullableFilter<"Farm"> | string | null
    size?: FloatNullableFilter<"Farm"> | number | null
    sizeUnit?: EnumSizeUnitNullableFilter<"Farm"> | $Enums.SizeUnit | null
    stage?: EnumFarmStageFilter<"Farm"> | $Enums.FarmStage
    ownershipDocument?: StringNullableFilter<"Farm"> | string | null
    number_of_workers?: IntNullableFilter<"Farm"> | number | null
    verified?: BoolFilter<"Farm"> | boolean
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    farmer?: XOR<FarmerScalarRelationFilter, FarmerWhereInput>
    media?: FarmMediaListRelationFilter
  }

  export type FarmOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    type?: SortOrder
    production_type?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    sizeUnit?: SortOrderInput | SortOrder
    stage?: SortOrder
    ownershipDocument?: SortOrderInput | SortOrder
    number_of_workers?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmer?: FarmerOrderByWithRelationInput
    media?: FarmMediaOrderByRelationAggregateInput
    _relevance?: FarmOrderByRelevanceInput
  }

  export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    farmerId?: IntFilter<"Farm"> | number
    name?: StringFilter<"Farm"> | string
    location?: StringFilter<"Farm"> | string
    latitude?: DecimalNullableFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFilter<"Farm"> | $Enums.ProductionType
    production_type?: StringNullableFilter<"Farm"> | string | null
    size?: FloatNullableFilter<"Farm"> | number | null
    sizeUnit?: EnumSizeUnitNullableFilter<"Farm"> | $Enums.SizeUnit | null
    stage?: EnumFarmStageFilter<"Farm"> | $Enums.FarmStage
    ownershipDocument?: StringNullableFilter<"Farm"> | string | null
    number_of_workers?: IntNullableFilter<"Farm"> | number | null
    verified?: BoolFilter<"Farm"> | boolean
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    farmer?: XOR<FarmerScalarRelationFilter, FarmerWhereInput>
    media?: FarmMediaListRelationFilter
  }, "id">

  export type FarmOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    type?: SortOrder
    production_type?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    sizeUnit?: SortOrderInput | SortOrder
    stage?: SortOrder
    ownershipDocument?: SortOrderInput | SortOrder
    number_of_workers?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmCountOrderByAggregateInput
    _avg?: FarmAvgOrderByAggregateInput
    _max?: FarmMaxOrderByAggregateInput
    _min?: FarmMinOrderByAggregateInput
    _sum?: FarmSumOrderByAggregateInput
  }

  export type FarmScalarWhereWithAggregatesInput = {
    AND?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    OR?: FarmScalarWhereWithAggregatesInput[]
    NOT?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Farm"> | number
    farmerId?: IntWithAggregatesFilter<"Farm"> | number
    name?: StringWithAggregatesFilter<"Farm"> | string
    location?: StringWithAggregatesFilter<"Farm"> | string
    latitude?: DecimalNullableWithAggregatesFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeWithAggregatesFilter<"Farm"> | $Enums.ProductionType
    production_type?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    size?: FloatNullableWithAggregatesFilter<"Farm"> | number | null
    sizeUnit?: EnumSizeUnitNullableWithAggregatesFilter<"Farm"> | $Enums.SizeUnit | null
    stage?: EnumFarmStageWithAggregatesFilter<"Farm"> | $Enums.FarmStage
    ownershipDocument?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    number_of_workers?: IntNullableWithAggregatesFilter<"Farm"> | number | null
    verified?: BoolWithAggregatesFilter<"Farm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
  }

  export type FarmMediaWhereInput = {
    AND?: FarmMediaWhereInput | FarmMediaWhereInput[]
    OR?: FarmMediaWhereInput[]
    NOT?: FarmMediaWhereInput | FarmMediaWhereInput[]
    id?: IntFilter<"FarmMedia"> | number
    farmId?: IntFilter<"FarmMedia"> | number
    url?: StringFilter<"FarmMedia"> | string
    mediaType?: EnumMediaTypeFilter<"FarmMedia"> | $Enums.MediaType
    latitude?: DecimalFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    caption?: StringNullableFilter<"FarmMedia"> | string | null
    createdAt?: DateTimeFilter<"FarmMedia"> | Date | string
    updatedAt?: DateTimeFilter<"FarmMedia"> | Date | string
    farm?: XOR<FarmScalarRelationFilter, FarmWhereInput>
  }

  export type FarmMediaOrderByWithRelationInput = {
    id?: SortOrder
    farmId?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farm?: FarmOrderByWithRelationInput
    _relevance?: FarmMediaOrderByRelevanceInput
  }

  export type FarmMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FarmMediaWhereInput | FarmMediaWhereInput[]
    OR?: FarmMediaWhereInput[]
    NOT?: FarmMediaWhereInput | FarmMediaWhereInput[]
    farmId?: IntFilter<"FarmMedia"> | number
    url?: StringFilter<"FarmMedia"> | string
    mediaType?: EnumMediaTypeFilter<"FarmMedia"> | $Enums.MediaType
    latitude?: DecimalFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    caption?: StringNullableFilter<"FarmMedia"> | string | null
    createdAt?: DateTimeFilter<"FarmMedia"> | Date | string
    updatedAt?: DateTimeFilter<"FarmMedia"> | Date | string
    farm?: XOR<FarmScalarRelationFilter, FarmWhereInput>
  }, "id">

  export type FarmMediaOrderByWithAggregationInput = {
    id?: SortOrder
    farmId?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmMediaCountOrderByAggregateInput
    _avg?: FarmMediaAvgOrderByAggregateInput
    _max?: FarmMediaMaxOrderByAggregateInput
    _min?: FarmMediaMinOrderByAggregateInput
    _sum?: FarmMediaSumOrderByAggregateInput
  }

  export type FarmMediaScalarWhereWithAggregatesInput = {
    AND?: FarmMediaScalarWhereWithAggregatesInput | FarmMediaScalarWhereWithAggregatesInput[]
    OR?: FarmMediaScalarWhereWithAggregatesInput[]
    NOT?: FarmMediaScalarWhereWithAggregatesInput | FarmMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FarmMedia"> | number
    farmId?: IntWithAggregatesFilter<"FarmMedia"> | number
    url?: StringWithAggregatesFilter<"FarmMedia"> | string
    mediaType?: EnumMediaTypeWithAggregatesFilter<"FarmMedia"> | $Enums.MediaType
    latitude?: DecimalWithAggregatesFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    caption?: StringNullableWithAggregatesFilter<"FarmMedia"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FarmMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FarmMedia"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    identifier?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }

  export type VerificationCodeOrderByWithRelationInput = {
    identifier?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: VerificationCodeOrderByRelevanceInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    identifier?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }, "code">

  export type VerificationCodeOrderByWithAggregationInput = {
    identifier?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
  }

  export type AdminCreateInput = {
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutUsersInput
    state?: StateCreateNestedOneWithoutUsersInput
    lga?: LgaCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId?: number | null
    stateId?: number | null
    lgaId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUsersNestedInput
    state?: StateUpdateOneWithoutUsersNestedInput
    lga?: LgaUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: NullableIntFieldUpdateOperationsInput | number | null
    lgaId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId?: number | null
    stateId?: number | null
    lgaId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: NullableIntFieldUpdateOperationsInput | number | null
    lgaId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: StateCreateNestedManyWithoutCountryInput
    users?: UsersCreateNestedManyWithoutCountryInput
    farmers?: FarmerCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: StateUncheckedCreateNestedManyWithoutCountryInput
    users?: UsersUncheckedCreateNestedManyWithoutCountryInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUpdateManyWithoutCountryNestedInput
    users?: UsersUpdateManyWithoutCountryNestedInput
    farmers?: FarmerUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUncheckedUpdateManyWithoutCountryNestedInput
    users?: UsersUncheckedUpdateManyWithoutCountryNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateCreateInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    lgas?: LgaCreateNestedManyWithoutStateInput
    users?: UsersCreateNestedManyWithoutStateInput
    farmers?: FarmerCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: number
    name: string
    code?: string | null
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lgas?: LgaUncheckedCreateNestedManyWithoutStateInput
    users?: UsersUncheckedCreateNestedManyWithoutStateInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    lgas?: LgaUpdateManyWithoutStateNestedInput
    users?: UsersUpdateManyWithoutStateNestedInput
    farmers?: FarmerUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lgas?: LgaUncheckedUpdateManyWithoutStateNestedInput
    users?: UsersUncheckedUpdateManyWithoutStateNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: number
    name: string
    code?: string | null
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LgaCreateInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    state: StateCreateNestedOneWithoutLgasInput
    users?: UsersCreateNestedManyWithoutLgaInput
    farmers?: FarmerCreateNestedManyWithoutLgaInput
  }

  export type LgaUncheckedCreateInput = {
    id?: number
    name: string
    code?: string | null
    stateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutLgaInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutLgaInput
  }

  export type LgaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutLgasNestedInput
    users?: UsersUpdateManyWithoutLgaNestedInput
    farmers?: FarmerUpdateManyWithoutLgaNestedInput
  }

  export type LgaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutLgaNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutLgaNestedInput
  }

  export type LgaCreateManyInput = {
    id?: number
    name: string
    code?: string | null
    stateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LgaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LgaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerCreateInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutFarmersInput
    country: CountryCreateNestedOneWithoutFarmersInput
    state: StateCreateNestedOneWithoutFarmersInput
    lga: LgaCreateNestedOneWithoutFarmersInput
    inovices?: InvoiceCreateNestedManyWithoutFarmerInput
    farms?: FarmCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inovices?: InvoiceUncheckedCreateNestedManyWithoutFarmerInput
    farms?: FarmUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutFarmersNestedInput
    country?: CountryUpdateOneRequiredWithoutFarmersNestedInput
    state?: StateUpdateOneRequiredWithoutFarmersNestedInput
    lga?: LgaUpdateOneRequiredWithoutFarmersNestedInput
    inovices?: InvoiceUpdateManyWithoutFarmerNestedInput
    farms?: FarmUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inovices?: InvoiceUncheckedUpdateManyWithoutFarmerNestedInput
    farms?: FarmUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerCreateManyInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmerUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankCreateInput = {
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: FarmerCreateNestedManyWithoutBankInput
  }

  export type BankUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: FarmerUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: FarmerUpdateManyWithoutBankNestedInput
  }

  export type BankUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: FarmerUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankCreateManyInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    amount: number
    phone_number: string
    has_paid?: boolean
    payment_reference?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    farmer: FarmerCreateNestedOneWithoutInovicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    farmerId: number
    amount: number
    phone_number: string
    has_paid?: boolean
    payment_reference?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: FarmerUpdateOneRequiredWithoutInovicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: number
    farmerId: number
    amount: number
    phone_number: string
    has_paid?: boolean
    payment_reference?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateInput = {
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: FarmerCreateNestedOneWithoutFarmsInput
    media?: FarmMediaCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateInput = {
    id?: number
    farmerId: number
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: FarmMediaUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: FarmerUpdateOneRequiredWithoutFarmsNestedInput
    media?: FarmMediaUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: FarmMediaUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateManyInput = {
    id?: number
    farmerId: number
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmMediaCreateInput = {
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farm: FarmCreateNestedOneWithoutMediaInput
  }

  export type FarmMediaUncheckedCreateInput = {
    id?: number
    farmId: number
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmMediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneRequiredWithoutMediaNestedInput
  }

  export type FarmMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmMediaCreateManyInput = {
    id?: number
    farmId: number
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmMediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    identifier: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateInput = {
    identifier: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyInput = {
    identifier: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type CountryNullableScalarRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type StateNullableScalarRelationFilter = {
    is?: StateWhereInput | null
    isNot?: StateWhereInput | null
  }

  export type LgaNullableScalarRelationFilter = {
    is?: LgaWhereInput | null
    isNot?: LgaWhereInput | null
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StateListRelationFilter = {
    every?: StateWhereInput
    some?: StateWhereInput
    none?: StateWhereInput
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type FarmerListRelationFilter = {
    every?: FarmerWhereInput
    some?: FarmerWhereInput
    none?: FarmerWhereInput
  }

  export type StateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryOrderByRelevanceInput = {
    fields: CountryOrderByRelevanceFieldEnum | CountryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrder
    iso3?: SortOrder
    numericCode?: SortOrder
    phoneCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrder
    iso3?: SortOrder
    numericCode?: SortOrder
    phoneCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrder
    iso3?: SortOrder
    numericCode?: SortOrder
    phoneCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type LgaListRelationFilter = {
    every?: LgaWhereInput
    some?: LgaWhereInput
    none?: LgaWhereInput
  }

  export type LgaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateOrderByRelevanceInput = {
    fields: StateOrderByRelevanceFieldEnum | StateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StateNameCountryIdCompoundUniqueInput = {
    name: string
    countryId: number
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type LgaOrderByRelevanceInput = {
    fields: LgaOrderByRelevanceFieldEnum | LgaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LgaNameStateIdCompoundUniqueInput = {
    name: string
    stateId: number
  }

  export type LgaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    stateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LgaAvgOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
  }

  export type LgaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    stateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LgaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    stateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LgaSumOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
  }

  export type BankScalarRelationFilter = {
    is?: BankWhereInput
    isNot?: BankWhereInput
  }

  export type LgaScalarRelationFilter = {
    is?: LgaWhereInput
    isNot?: LgaWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type FarmListRelationFilter = {
    every?: FarmWhereInput
    some?: FarmWhereInput
    none?: FarmWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmerOrderByRelevanceInput = {
    fields: FarmerOrderByRelevanceFieldEnum | FarmerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FarmerCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    nin?: SortOrder
    profile_image?: SortOrder
    proof_of_address?: SortOrder
    bankId?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    email_verified?: SortOrder
    phone_verified?: SortOrder
    nin_verified?: SortOrder
    has_paid?: SortOrder
    status?: SortOrder
    account_created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmerAvgOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    account_created_by?: SortOrder
  }

  export type FarmerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    nin?: SortOrder
    profile_image?: SortOrder
    proof_of_address?: SortOrder
    bankId?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    email_verified?: SortOrder
    phone_verified?: SortOrder
    nin_verified?: SortOrder
    has_paid?: SortOrder
    status?: SortOrder
    account_created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmerMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    nin?: SortOrder
    profile_image?: SortOrder
    proof_of_address?: SortOrder
    bankId?: SortOrder
    account_number?: SortOrder
    account_name?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    email_verified?: SortOrder
    phone_verified?: SortOrder
    nin_verified?: SortOrder
    has_paid?: SortOrder
    status?: SortOrder
    account_created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmerSumOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
    countryId?: SortOrder
    stateId?: SortOrder
    lgaId?: SortOrder
    account_created_by?: SortOrder
  }

  export type BankOrderByRelevanceInput = {
    fields: BankOrderByRelevanceFieldEnum | BankOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FarmerScalarRelationFilter = {
    is?: FarmerWhereInput
    isNot?: FarmerWhereInput
  }

  export type InvoiceOrderByRelevanceInput = {
    fields: InvoiceOrderByRelevanceFieldEnum | InvoiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
    phone_number?: SortOrder
    has_paid?: SortOrder
    payment_reference?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
    phone_number?: SortOrder
    has_paid?: SortOrder
    payment_reference?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
    phone_number?: SortOrder
    has_paid?: SortOrder
    payment_reference?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    amount?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumProductionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionType | EnumProductionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionType[]
    notIn?: $Enums.ProductionType[]
    not?: NestedEnumProductionTypeFilter<$PrismaModel> | $Enums.ProductionType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSizeUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SizeUnit | EnumSizeUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.SizeUnit[] | null
    notIn?: $Enums.SizeUnit[] | null
    not?: NestedEnumSizeUnitNullableFilter<$PrismaModel> | $Enums.SizeUnit | null
  }

  export type EnumFarmStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStage | EnumFarmStageFieldRefInput<$PrismaModel>
    in?: $Enums.FarmStage[]
    notIn?: $Enums.FarmStage[]
    not?: NestedEnumFarmStageFilter<$PrismaModel> | $Enums.FarmStage
  }

  export type FarmMediaListRelationFilter = {
    every?: FarmMediaWhereInput
    some?: FarmMediaWhereInput
    none?: FarmMediaWhereInput
  }

  export type FarmMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmOrderByRelevanceInput = {
    fields: FarmOrderByRelevanceFieldEnum | FarmOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FarmCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    production_type?: SortOrder
    size?: SortOrder
    sizeUnit?: SortOrder
    stage?: SortOrder
    ownershipDocument?: SortOrder
    number_of_workers?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmAvgOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    number_of_workers?: SortOrder
  }

  export type FarmMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    production_type?: SortOrder
    size?: SortOrder
    sizeUnit?: SortOrder
    stage?: SortOrder
    ownershipDocument?: SortOrder
    number_of_workers?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    production_type?: SortOrder
    size?: SortOrder
    sizeUnit?: SortOrder
    stage?: SortOrder
    ownershipDocument?: SortOrder
    number_of_workers?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmSumOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    size?: SortOrder
    number_of_workers?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumProductionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionType | EnumProductionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionType[]
    notIn?: $Enums.ProductionType[]
    not?: NestedEnumProductionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductionTypeFilter<$PrismaModel>
    _max?: NestedEnumProductionTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSizeUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SizeUnit | EnumSizeUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.SizeUnit[] | null
    notIn?: $Enums.SizeUnit[] | null
    not?: NestedEnumSizeUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.SizeUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSizeUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumSizeUnitNullableFilter<$PrismaModel>
  }

  export type EnumFarmStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStage | EnumFarmStageFieldRefInput<$PrismaModel>
    in?: $Enums.FarmStage[]
    notIn?: $Enums.FarmStage[]
    not?: NestedEnumFarmStageWithAggregatesFilter<$PrismaModel> | $Enums.FarmStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFarmStageFilter<$PrismaModel>
    _max?: NestedEnumFarmStageFilter<$PrismaModel>
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FarmScalarRelationFilter = {
    is?: FarmWhereInput
    isNot?: FarmWhereInput
  }

  export type FarmMediaOrderByRelevanceInput = {
    fields: FarmMediaOrderByRelevanceFieldEnum | FarmMediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FarmMediaCountOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMediaAvgOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FarmMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMediaMinOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    url?: SortOrder
    mediaType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMediaSumOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VerificationCodeOrderByRelevanceInput = {
    fields: VerificationCodeOrderByRelevanceFieldEnum | VerificationCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    identifier?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    identifier?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    identifier?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryCreateNestedOneWithoutUsersInput = {
    create?: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput
    connect?: CountryWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutUsersInput = {
    create?: XOR<StateCreateWithoutUsersInput, StateUncheckedCreateWithoutUsersInput>
    connectOrCreate?: StateCreateOrConnectWithoutUsersInput
    connect?: StateWhereUniqueInput
  }

  export type LgaCreateNestedOneWithoutUsersInput = {
    create?: XOR<LgaCreateWithoutUsersInput, LgaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LgaCreateOrConnectWithoutUsersInput
    connect?: LgaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type CountryUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput
    upsert?: CountryUpsertWithoutUsersInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutUsersInput, CountryUpdateWithoutUsersInput>, CountryUncheckedUpdateWithoutUsersInput>
  }

  export type StateUpdateOneWithoutUsersNestedInput = {
    create?: XOR<StateCreateWithoutUsersInput, StateUncheckedCreateWithoutUsersInput>
    connectOrCreate?: StateCreateOrConnectWithoutUsersInput
    upsert?: StateUpsertWithoutUsersInput
    disconnect?: StateWhereInput | boolean
    delete?: StateWhereInput | boolean
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutUsersInput, StateUpdateWithoutUsersInput>, StateUncheckedUpdateWithoutUsersInput>
  }

  export type LgaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<LgaCreateWithoutUsersInput, LgaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LgaCreateOrConnectWithoutUsersInput
    upsert?: LgaUpsertWithoutUsersInput
    disconnect?: LgaWhereInput | boolean
    delete?: LgaWhereInput | boolean
    connect?: LgaWhereUniqueInput
    update?: XOR<XOR<LgaUpdateToOneWithWhereWithoutUsersInput, LgaUpdateWithoutUsersInput>, LgaUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StateCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutCountryInput = {
    create?: XOR<UsersCreateWithoutCountryInput, UsersUncheckedCreateWithoutCountryInput> | UsersCreateWithoutCountryInput[] | UsersUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountryInput | UsersCreateOrConnectWithoutCountryInput[]
    createMany?: UsersCreateManyCountryInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FarmerCreateNestedManyWithoutCountryInput = {
    create?: XOR<FarmerCreateWithoutCountryInput, FarmerUncheckedCreateWithoutCountryInput> | FarmerCreateWithoutCountryInput[] | FarmerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCountryInput | FarmerCreateOrConnectWithoutCountryInput[]
    createMany?: FarmerCreateManyCountryInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type StateUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<UsersCreateWithoutCountryInput, UsersUncheckedCreateWithoutCountryInput> | UsersCreateWithoutCountryInput[] | UsersUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountryInput | UsersCreateOrConnectWithoutCountryInput[]
    createMany?: UsersCreateManyCountryInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<FarmerCreateWithoutCountryInput, FarmerUncheckedCreateWithoutCountryInput> | FarmerCreateWithoutCountryInput[] | FarmerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCountryInput | FarmerCreateOrConnectWithoutCountryInput[]
    createMany?: FarmerCreateManyCountryInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type StateUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutCountryInput | StateUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutCountryInput | StateUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateUpdateManyWithWhereWithoutCountryInput | StateUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UsersCreateWithoutCountryInput, UsersUncheckedCreateWithoutCountryInput> | UsersCreateWithoutCountryInput[] | UsersUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountryInput | UsersCreateOrConnectWithoutCountryInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCountryInput | UsersUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UsersCreateManyCountryInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCountryInput | UsersUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCountryInput | UsersUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FarmerUpdateManyWithoutCountryNestedInput = {
    create?: XOR<FarmerCreateWithoutCountryInput, FarmerUncheckedCreateWithoutCountryInput> | FarmerCreateWithoutCountryInput[] | FarmerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCountryInput | FarmerCreateOrConnectWithoutCountryInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutCountryInput | FarmerUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: FarmerCreateManyCountryInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutCountryInput | FarmerUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutCountryInput | FarmerUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type StateUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutCountryInput | StateUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutCountryInput | StateUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateUpdateManyWithWhereWithoutCountryInput | StateUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UsersCreateWithoutCountryInput, UsersUncheckedCreateWithoutCountryInput> | UsersCreateWithoutCountryInput[] | UsersUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCountryInput | UsersCreateOrConnectWithoutCountryInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCountryInput | UsersUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UsersCreateManyCountryInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCountryInput | UsersUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCountryInput | UsersUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<FarmerCreateWithoutCountryInput, FarmerUncheckedCreateWithoutCountryInput> | FarmerCreateWithoutCountryInput[] | FarmerUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutCountryInput | FarmerCreateOrConnectWithoutCountryInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutCountryInput | FarmerUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: FarmerCreateManyCountryInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutCountryInput | FarmerUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutCountryInput | FarmerUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutStatesInput = {
    create?: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStatesInput
    connect?: CountryWhereUniqueInput
  }

  export type LgaCreateNestedManyWithoutStateInput = {
    create?: XOR<LgaCreateWithoutStateInput, LgaUncheckedCreateWithoutStateInput> | LgaCreateWithoutStateInput[] | LgaUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LgaCreateOrConnectWithoutStateInput | LgaCreateOrConnectWithoutStateInput[]
    createMany?: LgaCreateManyStateInputEnvelope
    connect?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
  }

  export type UsersCreateNestedManyWithoutStateInput = {
    create?: XOR<UsersCreateWithoutStateInput, UsersUncheckedCreateWithoutStateInput> | UsersCreateWithoutStateInput[] | UsersUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStateInput | UsersCreateOrConnectWithoutStateInput[]
    createMany?: UsersCreateManyStateInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FarmerCreateNestedManyWithoutStateInput = {
    create?: XOR<FarmerCreateWithoutStateInput, FarmerUncheckedCreateWithoutStateInput> | FarmerCreateWithoutStateInput[] | FarmerUncheckedCreateWithoutStateInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutStateInput | FarmerCreateOrConnectWithoutStateInput[]
    createMany?: FarmerCreateManyStateInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type LgaUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<LgaCreateWithoutStateInput, LgaUncheckedCreateWithoutStateInput> | LgaCreateWithoutStateInput[] | LgaUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LgaCreateOrConnectWithoutStateInput | LgaCreateOrConnectWithoutStateInput[]
    createMany?: LgaCreateManyStateInputEnvelope
    connect?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<UsersCreateWithoutStateInput, UsersUncheckedCreateWithoutStateInput> | UsersCreateWithoutStateInput[] | UsersUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStateInput | UsersCreateOrConnectWithoutStateInput[]
    createMany?: UsersCreateManyStateInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<FarmerCreateWithoutStateInput, FarmerUncheckedCreateWithoutStateInput> | FarmerCreateWithoutStateInput[] | FarmerUncheckedCreateWithoutStateInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutStateInput | FarmerCreateOrConnectWithoutStateInput[]
    createMany?: FarmerCreateManyStateInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutStatesNestedInput = {
    create?: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStatesInput
    upsert?: CountryUpsertWithoutStatesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutStatesInput, CountryUpdateWithoutStatesInput>, CountryUncheckedUpdateWithoutStatesInput>
  }

  export type LgaUpdateManyWithoutStateNestedInput = {
    create?: XOR<LgaCreateWithoutStateInput, LgaUncheckedCreateWithoutStateInput> | LgaCreateWithoutStateInput[] | LgaUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LgaCreateOrConnectWithoutStateInput | LgaCreateOrConnectWithoutStateInput[]
    upsert?: LgaUpsertWithWhereUniqueWithoutStateInput | LgaUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: LgaCreateManyStateInputEnvelope
    set?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    disconnect?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    delete?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    connect?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    update?: LgaUpdateWithWhereUniqueWithoutStateInput | LgaUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: LgaUpdateManyWithWhereWithoutStateInput | LgaUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: LgaScalarWhereInput | LgaScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutStateNestedInput = {
    create?: XOR<UsersCreateWithoutStateInput, UsersUncheckedCreateWithoutStateInput> | UsersCreateWithoutStateInput[] | UsersUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStateInput | UsersCreateOrConnectWithoutStateInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutStateInput | UsersUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: UsersCreateManyStateInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutStateInput | UsersUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutStateInput | UsersUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FarmerUpdateManyWithoutStateNestedInput = {
    create?: XOR<FarmerCreateWithoutStateInput, FarmerUncheckedCreateWithoutStateInput> | FarmerCreateWithoutStateInput[] | FarmerUncheckedCreateWithoutStateInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutStateInput | FarmerCreateOrConnectWithoutStateInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutStateInput | FarmerUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: FarmerCreateManyStateInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutStateInput | FarmerUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutStateInput | FarmerUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type LgaUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<LgaCreateWithoutStateInput, LgaUncheckedCreateWithoutStateInput> | LgaCreateWithoutStateInput[] | LgaUncheckedCreateWithoutStateInput[]
    connectOrCreate?: LgaCreateOrConnectWithoutStateInput | LgaCreateOrConnectWithoutStateInput[]
    upsert?: LgaUpsertWithWhereUniqueWithoutStateInput | LgaUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: LgaCreateManyStateInputEnvelope
    set?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    disconnect?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    delete?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    connect?: LgaWhereUniqueInput | LgaWhereUniqueInput[]
    update?: LgaUpdateWithWhereUniqueWithoutStateInput | LgaUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: LgaUpdateManyWithWhereWithoutStateInput | LgaUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: LgaScalarWhereInput | LgaScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<UsersCreateWithoutStateInput, UsersUncheckedCreateWithoutStateInput> | UsersCreateWithoutStateInput[] | UsersUncheckedCreateWithoutStateInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutStateInput | UsersCreateOrConnectWithoutStateInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutStateInput | UsersUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: UsersCreateManyStateInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutStateInput | UsersUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutStateInput | UsersUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<FarmerCreateWithoutStateInput, FarmerUncheckedCreateWithoutStateInput> | FarmerCreateWithoutStateInput[] | FarmerUncheckedCreateWithoutStateInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutStateInput | FarmerCreateOrConnectWithoutStateInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutStateInput | FarmerUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: FarmerCreateManyStateInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutStateInput | FarmerUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutStateInput | FarmerUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type StateCreateNestedOneWithoutLgasInput = {
    create?: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
    connectOrCreate?: StateCreateOrConnectWithoutLgasInput
    connect?: StateWhereUniqueInput
  }

  export type UsersCreateNestedManyWithoutLgaInput = {
    create?: XOR<UsersCreateWithoutLgaInput, UsersUncheckedCreateWithoutLgaInput> | UsersCreateWithoutLgaInput[] | UsersUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLgaInput | UsersCreateOrConnectWithoutLgaInput[]
    createMany?: UsersCreateManyLgaInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FarmerCreateNestedManyWithoutLgaInput = {
    create?: XOR<FarmerCreateWithoutLgaInput, FarmerUncheckedCreateWithoutLgaInput> | FarmerCreateWithoutLgaInput[] | FarmerUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutLgaInput | FarmerCreateOrConnectWithoutLgaInput[]
    createMany?: FarmerCreateManyLgaInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutLgaInput = {
    create?: XOR<UsersCreateWithoutLgaInput, UsersUncheckedCreateWithoutLgaInput> | UsersCreateWithoutLgaInput[] | UsersUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLgaInput | UsersCreateOrConnectWithoutLgaInput[]
    createMany?: UsersCreateManyLgaInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutLgaInput = {
    create?: XOR<FarmerCreateWithoutLgaInput, FarmerUncheckedCreateWithoutLgaInput> | FarmerCreateWithoutLgaInput[] | FarmerUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutLgaInput | FarmerCreateOrConnectWithoutLgaInput[]
    createMany?: FarmerCreateManyLgaInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type StateUpdateOneRequiredWithoutLgasNestedInput = {
    create?: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
    connectOrCreate?: StateCreateOrConnectWithoutLgasInput
    upsert?: StateUpsertWithoutLgasInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutLgasInput, StateUpdateWithoutLgasInput>, StateUncheckedUpdateWithoutLgasInput>
  }

  export type UsersUpdateManyWithoutLgaNestedInput = {
    create?: XOR<UsersCreateWithoutLgaInput, UsersUncheckedCreateWithoutLgaInput> | UsersCreateWithoutLgaInput[] | UsersUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLgaInput | UsersCreateOrConnectWithoutLgaInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutLgaInput | UsersUpsertWithWhereUniqueWithoutLgaInput[]
    createMany?: UsersCreateManyLgaInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutLgaInput | UsersUpdateWithWhereUniqueWithoutLgaInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutLgaInput | UsersUpdateManyWithWhereWithoutLgaInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FarmerUpdateManyWithoutLgaNestedInput = {
    create?: XOR<FarmerCreateWithoutLgaInput, FarmerUncheckedCreateWithoutLgaInput> | FarmerCreateWithoutLgaInput[] | FarmerUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutLgaInput | FarmerCreateOrConnectWithoutLgaInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutLgaInput | FarmerUpsertWithWhereUniqueWithoutLgaInput[]
    createMany?: FarmerCreateManyLgaInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutLgaInput | FarmerUpdateWithWhereUniqueWithoutLgaInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutLgaInput | FarmerUpdateManyWithWhereWithoutLgaInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutLgaNestedInput = {
    create?: XOR<UsersCreateWithoutLgaInput, UsersUncheckedCreateWithoutLgaInput> | UsersCreateWithoutLgaInput[] | UsersUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLgaInput | UsersCreateOrConnectWithoutLgaInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutLgaInput | UsersUpsertWithWhereUniqueWithoutLgaInput[]
    createMany?: UsersCreateManyLgaInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutLgaInput | UsersUpdateWithWhereUniqueWithoutLgaInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutLgaInput | UsersUpdateManyWithWhereWithoutLgaInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutLgaNestedInput = {
    create?: XOR<FarmerCreateWithoutLgaInput, FarmerUncheckedCreateWithoutLgaInput> | FarmerCreateWithoutLgaInput[] | FarmerUncheckedCreateWithoutLgaInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutLgaInput | FarmerCreateOrConnectWithoutLgaInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutLgaInput | FarmerUpsertWithWhereUniqueWithoutLgaInput[]
    createMany?: FarmerCreateManyLgaInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutLgaInput | FarmerUpdateWithWhereUniqueWithoutLgaInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutLgaInput | FarmerUpdateManyWithWhereWithoutLgaInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type BankCreateNestedOneWithoutFarmersInput = {
    create?: XOR<BankCreateWithoutFarmersInput, BankUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: BankCreateOrConnectWithoutFarmersInput
    connect?: BankWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutFarmersInput = {
    create?: XOR<CountryCreateWithoutFarmersInput, CountryUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutFarmersInput
    connect?: CountryWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutFarmersInput = {
    create?: XOR<StateCreateWithoutFarmersInput, StateUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: StateCreateOrConnectWithoutFarmersInput
    connect?: StateWhereUniqueInput
  }

  export type LgaCreateNestedOneWithoutFarmersInput = {
    create?: XOR<LgaCreateWithoutFarmersInput, LgaUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: LgaCreateOrConnectWithoutFarmersInput
    connect?: LgaWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutFarmerInput = {
    create?: XOR<InvoiceCreateWithoutFarmerInput, InvoiceUncheckedCreateWithoutFarmerInput> | InvoiceCreateWithoutFarmerInput[] | InvoiceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFarmerInput | InvoiceCreateOrConnectWithoutFarmerInput[]
    createMany?: InvoiceCreateManyFarmerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type FarmCreateNestedManyWithoutFarmerInput = {
    create?: XOR<FarmCreateWithoutFarmerInput, FarmUncheckedCreateWithoutFarmerInput> | FarmCreateWithoutFarmerInput[] | FarmUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutFarmerInput | FarmCreateOrConnectWithoutFarmerInput[]
    createMany?: FarmCreateManyFarmerInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<InvoiceCreateWithoutFarmerInput, InvoiceUncheckedCreateWithoutFarmerInput> | InvoiceCreateWithoutFarmerInput[] | InvoiceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFarmerInput | InvoiceCreateOrConnectWithoutFarmerInput[]
    createMany?: InvoiceCreateManyFarmerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type FarmUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<FarmCreateWithoutFarmerInput, FarmUncheckedCreateWithoutFarmerInput> | FarmCreateWithoutFarmerInput[] | FarmUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutFarmerInput | FarmCreateOrConnectWithoutFarmerInput[]
    createMany?: FarmCreateManyFarmerInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type BankUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<BankCreateWithoutFarmersInput, BankUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: BankCreateOrConnectWithoutFarmersInput
    upsert?: BankUpsertWithoutFarmersInput
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutFarmersInput, BankUpdateWithoutFarmersInput>, BankUncheckedUpdateWithoutFarmersInput>
  }

  export type CountryUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<CountryCreateWithoutFarmersInput, CountryUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutFarmersInput
    upsert?: CountryUpsertWithoutFarmersInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutFarmersInput, CountryUpdateWithoutFarmersInput>, CountryUncheckedUpdateWithoutFarmersInput>
  }

  export type StateUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<StateCreateWithoutFarmersInput, StateUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: StateCreateOrConnectWithoutFarmersInput
    upsert?: StateUpsertWithoutFarmersInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutFarmersInput, StateUpdateWithoutFarmersInput>, StateUncheckedUpdateWithoutFarmersInput>
  }

  export type LgaUpdateOneRequiredWithoutFarmersNestedInput = {
    create?: XOR<LgaCreateWithoutFarmersInput, LgaUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: LgaCreateOrConnectWithoutFarmersInput
    upsert?: LgaUpsertWithoutFarmersInput
    connect?: LgaWhereUniqueInput
    update?: XOR<XOR<LgaUpdateToOneWithWhereWithoutFarmersInput, LgaUpdateWithoutFarmersInput>, LgaUncheckedUpdateWithoutFarmersInput>
  }

  export type InvoiceUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<InvoiceCreateWithoutFarmerInput, InvoiceUncheckedCreateWithoutFarmerInput> | InvoiceCreateWithoutFarmerInput[] | InvoiceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFarmerInput | InvoiceCreateOrConnectWithoutFarmerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutFarmerInput | InvoiceUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: InvoiceCreateManyFarmerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutFarmerInput | InvoiceUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutFarmerInput | InvoiceUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type FarmUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<FarmCreateWithoutFarmerInput, FarmUncheckedCreateWithoutFarmerInput> | FarmCreateWithoutFarmerInput[] | FarmUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutFarmerInput | FarmCreateOrConnectWithoutFarmerInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutFarmerInput | FarmUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: FarmCreateManyFarmerInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutFarmerInput | FarmUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutFarmerInput | FarmUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<InvoiceCreateWithoutFarmerInput, InvoiceUncheckedCreateWithoutFarmerInput> | InvoiceCreateWithoutFarmerInput[] | InvoiceUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutFarmerInput | InvoiceCreateOrConnectWithoutFarmerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutFarmerInput | InvoiceUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: InvoiceCreateManyFarmerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutFarmerInput | InvoiceUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutFarmerInput | InvoiceUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type FarmUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<FarmCreateWithoutFarmerInput, FarmUncheckedCreateWithoutFarmerInput> | FarmCreateWithoutFarmerInput[] | FarmUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutFarmerInput | FarmCreateOrConnectWithoutFarmerInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutFarmerInput | FarmUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: FarmCreateManyFarmerInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutFarmerInput | FarmUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutFarmerInput | FarmUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type FarmerCreateNestedManyWithoutBankInput = {
    create?: XOR<FarmerCreateWithoutBankInput, FarmerUncheckedCreateWithoutBankInput> | FarmerCreateWithoutBankInput[] | FarmerUncheckedCreateWithoutBankInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutBankInput | FarmerCreateOrConnectWithoutBankInput[]
    createMany?: FarmerCreateManyBankInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type FarmerUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<FarmerCreateWithoutBankInput, FarmerUncheckedCreateWithoutBankInput> | FarmerCreateWithoutBankInput[] | FarmerUncheckedCreateWithoutBankInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutBankInput | FarmerCreateOrConnectWithoutBankInput[]
    createMany?: FarmerCreateManyBankInputEnvelope
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
  }

  export type FarmerUpdateManyWithoutBankNestedInput = {
    create?: XOR<FarmerCreateWithoutBankInput, FarmerUncheckedCreateWithoutBankInput> | FarmerCreateWithoutBankInput[] | FarmerUncheckedCreateWithoutBankInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutBankInput | FarmerCreateOrConnectWithoutBankInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutBankInput | FarmerUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: FarmerCreateManyBankInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutBankInput | FarmerUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutBankInput | FarmerUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type FarmerUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<FarmerCreateWithoutBankInput, FarmerUncheckedCreateWithoutBankInput> | FarmerCreateWithoutBankInput[] | FarmerUncheckedCreateWithoutBankInput[]
    connectOrCreate?: FarmerCreateOrConnectWithoutBankInput | FarmerCreateOrConnectWithoutBankInput[]
    upsert?: FarmerUpsertWithWhereUniqueWithoutBankInput | FarmerUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: FarmerCreateManyBankInputEnvelope
    set?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    disconnect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    delete?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    connect?: FarmerWhereUniqueInput | FarmerWhereUniqueInput[]
    update?: FarmerUpdateWithWhereUniqueWithoutBankInput | FarmerUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: FarmerUpdateManyWithWhereWithoutBankInput | FarmerUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
  }

  export type FarmerCreateNestedOneWithoutInovicesInput = {
    create?: XOR<FarmerCreateWithoutInovicesInput, FarmerUncheckedCreateWithoutInovicesInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutInovicesInput
    connect?: FarmerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmerUpdateOneRequiredWithoutInovicesNestedInput = {
    create?: XOR<FarmerCreateWithoutInovicesInput, FarmerUncheckedCreateWithoutInovicesInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutInovicesInput
    upsert?: FarmerUpsertWithoutInovicesInput
    connect?: FarmerWhereUniqueInput
    update?: XOR<XOR<FarmerUpdateToOneWithWhereWithoutInovicesInput, FarmerUpdateWithoutInovicesInput>, FarmerUncheckedUpdateWithoutInovicesInput>
  }

  export type FarmerCreateNestedOneWithoutFarmsInput = {
    create?: XOR<FarmerCreateWithoutFarmsInput, FarmerUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutFarmsInput
    connect?: FarmerWhereUniqueInput
  }

  export type FarmMediaCreateNestedManyWithoutFarmInput = {
    create?: XOR<FarmMediaCreateWithoutFarmInput, FarmMediaUncheckedCreateWithoutFarmInput> | FarmMediaCreateWithoutFarmInput[] | FarmMediaUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmMediaCreateOrConnectWithoutFarmInput | FarmMediaCreateOrConnectWithoutFarmInput[]
    createMany?: FarmMediaCreateManyFarmInputEnvelope
    connect?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
  }

  export type FarmMediaUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<FarmMediaCreateWithoutFarmInput, FarmMediaUncheckedCreateWithoutFarmInput> | FarmMediaCreateWithoutFarmInput[] | FarmMediaUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmMediaCreateOrConnectWithoutFarmInput | FarmMediaCreateOrConnectWithoutFarmInput[]
    createMany?: FarmMediaCreateManyFarmInputEnvelope
    connect?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumProductionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductionType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumSizeUnitFieldUpdateOperationsInput = {
    set?: $Enums.SizeUnit | null
  }

  export type EnumFarmStageFieldUpdateOperationsInput = {
    set?: $Enums.FarmStage
  }

  export type FarmerUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<FarmerCreateWithoutFarmsInput, FarmerUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: FarmerCreateOrConnectWithoutFarmsInput
    upsert?: FarmerUpsertWithoutFarmsInput
    connect?: FarmerWhereUniqueInput
    update?: XOR<XOR<FarmerUpdateToOneWithWhereWithoutFarmsInput, FarmerUpdateWithoutFarmsInput>, FarmerUncheckedUpdateWithoutFarmsInput>
  }

  export type FarmMediaUpdateManyWithoutFarmNestedInput = {
    create?: XOR<FarmMediaCreateWithoutFarmInput, FarmMediaUncheckedCreateWithoutFarmInput> | FarmMediaCreateWithoutFarmInput[] | FarmMediaUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmMediaCreateOrConnectWithoutFarmInput | FarmMediaCreateOrConnectWithoutFarmInput[]
    upsert?: FarmMediaUpsertWithWhereUniqueWithoutFarmInput | FarmMediaUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: FarmMediaCreateManyFarmInputEnvelope
    set?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    disconnect?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    delete?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    connect?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    update?: FarmMediaUpdateWithWhereUniqueWithoutFarmInput | FarmMediaUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: FarmMediaUpdateManyWithWhereWithoutFarmInput | FarmMediaUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: FarmMediaScalarWhereInput | FarmMediaScalarWhereInput[]
  }

  export type FarmMediaUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<FarmMediaCreateWithoutFarmInput, FarmMediaUncheckedCreateWithoutFarmInput> | FarmMediaCreateWithoutFarmInput[] | FarmMediaUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmMediaCreateOrConnectWithoutFarmInput | FarmMediaCreateOrConnectWithoutFarmInput[]
    upsert?: FarmMediaUpsertWithWhereUniqueWithoutFarmInput | FarmMediaUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: FarmMediaCreateManyFarmInputEnvelope
    set?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    disconnect?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    delete?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    connect?: FarmMediaWhereUniqueInput | FarmMediaWhereUniqueInput[]
    update?: FarmMediaUpdateWithWhereUniqueWithoutFarmInput | FarmMediaUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: FarmMediaUpdateManyWithWhereWithoutFarmInput | FarmMediaUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: FarmMediaScalarWhereInput | FarmMediaScalarWhereInput[]
  }

  export type FarmCreateNestedOneWithoutMediaInput = {
    create?: XOR<FarmCreateWithoutMediaInput, FarmUncheckedCreateWithoutMediaInput>
    connectOrCreate?: FarmCreateOrConnectWithoutMediaInput
    connect?: FarmWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FarmUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<FarmCreateWithoutMediaInput, FarmUncheckedCreateWithoutMediaInput>
    connectOrCreate?: FarmCreateOrConnectWithoutMediaInput
    upsert?: FarmUpsertWithoutMediaInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutMediaInput, FarmUpdateWithoutMediaInput>, FarmUncheckedUpdateWithoutMediaInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumProductionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionType | EnumProductionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionType[]
    notIn?: $Enums.ProductionType[]
    not?: NestedEnumProductionTypeFilter<$PrismaModel> | $Enums.ProductionType
  }

  export type NestedEnumSizeUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SizeUnit | EnumSizeUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.SizeUnit[] | null
    notIn?: $Enums.SizeUnit[] | null
    not?: NestedEnumSizeUnitNullableFilter<$PrismaModel> | $Enums.SizeUnit | null
  }

  export type NestedEnumFarmStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStage | EnumFarmStageFieldRefInput<$PrismaModel>
    in?: $Enums.FarmStage[]
    notIn?: $Enums.FarmStage[]
    not?: NestedEnumFarmStageFilter<$PrismaModel> | $Enums.FarmStage
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductionType | EnumProductionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductionType[]
    notIn?: $Enums.ProductionType[]
    not?: NestedEnumProductionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductionTypeFilter<$PrismaModel>
    _max?: NestedEnumProductionTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSizeUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SizeUnit | EnumSizeUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.SizeUnit[] | null
    notIn?: $Enums.SizeUnit[] | null
    not?: NestedEnumSizeUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.SizeUnit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSizeUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumSizeUnitNullableFilter<$PrismaModel>
  }

  export type NestedEnumFarmStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmStage | EnumFarmStageFieldRefInput<$PrismaModel>
    in?: $Enums.FarmStage[]
    notIn?: $Enums.FarmStage[]
    not?: NestedEnumFarmStageWithAggregatesFilter<$PrismaModel> | $Enums.FarmStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFarmStageFilter<$PrismaModel>
    _max?: NestedEnumFarmStageFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CountryCreateWithoutUsersInput = {
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: StateCreateNestedManyWithoutCountryInput
    farmers?: FarmerCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: StateUncheckedCreateNestedManyWithoutCountryInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutUsersInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
  }

  export type StateCreateWithoutUsersInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    lgas?: LgaCreateNestedManyWithoutStateInput
    farmers?: FarmerCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    code?: string | null
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lgas?: LgaUncheckedCreateNestedManyWithoutStateInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutUsersInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutUsersInput, StateUncheckedCreateWithoutUsersInput>
  }

  export type LgaCreateWithoutUsersInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    state: StateCreateNestedOneWithoutLgasInput
    farmers?: FarmerCreateNestedManyWithoutLgaInput
  }

  export type LgaUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    code?: string | null
    stateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: FarmerUncheckedCreateNestedManyWithoutLgaInput
  }

  export type LgaCreateOrConnectWithoutUsersInput = {
    where: LgaWhereUniqueInput
    create: XOR<LgaCreateWithoutUsersInput, LgaUncheckedCreateWithoutUsersInput>
  }

  export type CountryUpsertWithoutUsersInput = {
    update: XOR<CountryUpdateWithoutUsersInput, CountryUncheckedUpdateWithoutUsersInput>
    create: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutUsersInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutUsersInput, CountryUncheckedUpdateWithoutUsersInput>
  }

  export type CountryUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUpdateManyWithoutCountryNestedInput
    farmers?: FarmerUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUncheckedUpdateManyWithoutCountryNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type StateUpsertWithoutUsersInput = {
    update: XOR<StateUpdateWithoutUsersInput, StateUncheckedUpdateWithoutUsersInput>
    create: XOR<StateCreateWithoutUsersInput, StateUncheckedCreateWithoutUsersInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutUsersInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutUsersInput, StateUncheckedUpdateWithoutUsersInput>
  }

  export type StateUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    lgas?: LgaUpdateManyWithoutStateNestedInput
    farmers?: FarmerUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lgas?: LgaUncheckedUpdateManyWithoutStateNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutStateNestedInput
  }

  export type LgaUpsertWithoutUsersInput = {
    update: XOR<LgaUpdateWithoutUsersInput, LgaUncheckedUpdateWithoutUsersInput>
    create: XOR<LgaCreateWithoutUsersInput, LgaUncheckedCreateWithoutUsersInput>
    where?: LgaWhereInput
  }

  export type LgaUpdateToOneWithWhereWithoutUsersInput = {
    where?: LgaWhereInput
    data: XOR<LgaUpdateWithoutUsersInput, LgaUncheckedUpdateWithoutUsersInput>
  }

  export type LgaUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutLgasNestedInput
    farmers?: FarmerUpdateManyWithoutLgaNestedInput
  }

  export type LgaUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: FarmerUncheckedUpdateManyWithoutLgaNestedInput
  }

  export type StateCreateWithoutCountryInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lgas?: LgaCreateNestedManyWithoutStateInput
    users?: UsersCreateNestedManyWithoutStateInput
    farmers?: FarmerCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lgas?: LgaUncheckedCreateNestedManyWithoutStateInput
    users?: UsersUncheckedCreateNestedManyWithoutStateInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutCountryInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput>
  }

  export type StateCreateManyCountryInputEnvelope = {
    data: StateCreateManyCountryInput | StateCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutCountryInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    state?: StateCreateNestedOneWithoutUsersInput
    lga?: LgaCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCountryInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    stateId?: number | null
    lgaId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutCountryInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCountryInput, UsersUncheckedCreateWithoutCountryInput>
  }

  export type UsersCreateManyCountryInputEnvelope = {
    data: UsersCreateManyCountryInput | UsersCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type FarmerCreateWithoutCountryInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutFarmersInput
    state: StateCreateNestedOneWithoutFarmersInput
    lga: LgaCreateNestedOneWithoutFarmersInput
    inovices?: InvoiceCreateNestedManyWithoutFarmerInput
    farms?: FarmCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutCountryInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inovices?: InvoiceUncheckedCreateNestedManyWithoutFarmerInput
    farms?: FarmUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutCountryInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutCountryInput, FarmerUncheckedCreateWithoutCountryInput>
  }

  export type FarmerCreateManyCountryInputEnvelope = {
    data: FarmerCreateManyCountryInput | FarmerCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithWhereUniqueWithoutCountryInput = {
    where: StateWhereUniqueInput
    update: XOR<StateUpdateWithoutCountryInput, StateUncheckedUpdateWithoutCountryInput>
    create: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput>
  }

  export type StateUpdateWithWhereUniqueWithoutCountryInput = {
    where: StateWhereUniqueInput
    data: XOR<StateUpdateWithoutCountryInput, StateUncheckedUpdateWithoutCountryInput>
  }

  export type StateUpdateManyWithWhereWithoutCountryInput = {
    where: StateScalarWhereInput
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyWithoutCountryInput>
  }

  export type StateScalarWhereInput = {
    AND?: StateScalarWhereInput | StateScalarWhereInput[]
    OR?: StateScalarWhereInput[]
    NOT?: StateScalarWhereInput | StateScalarWhereInput[]
    id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    code?: StringNullableFilter<"State"> | string | null
    countryId?: IntFilter<"State"> | number
    createdAt?: DateTimeFilter<"State"> | Date | string
    updatedAt?: DateTimeFilter<"State"> | Date | string
  }

  export type UsersUpsertWithWhereUniqueWithoutCountryInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutCountryInput, UsersUncheckedUpdateWithoutCountryInput>
    create: XOR<UsersCreateWithoutCountryInput, UsersUncheckedCreateWithoutCountryInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutCountryInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutCountryInput, UsersUncheckedUpdateWithoutCountryInput>
  }

  export type UsersUpdateManyWithWhereWithoutCountryInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutCountryInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    fullname?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone_number?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    countryId?: IntNullableFilter<"Users"> | number | null
    stateId?: IntNullableFilter<"Users"> | number | null
    lgaId?: IntNullableFilter<"Users"> | number | null
    profile_image?: StringNullableFilter<"Users"> | string | null
    verification_code?: StringNullableFilter<"Users"> | string | null
    email_verified?: BoolFilter<"Users"> | boolean
    status?: EnumStatusFilter<"Users"> | $Enums.Status
    password?: StringFilter<"Users"> | string
    temporal_password?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type FarmerUpsertWithWhereUniqueWithoutCountryInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutCountryInput, FarmerUncheckedUpdateWithoutCountryInput>
    create: XOR<FarmerCreateWithoutCountryInput, FarmerUncheckedCreateWithoutCountryInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutCountryInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutCountryInput, FarmerUncheckedUpdateWithoutCountryInput>
  }

  export type FarmerUpdateManyWithWhereWithoutCountryInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutCountryInput>
  }

  export type FarmerScalarWhereInput = {
    AND?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
    OR?: FarmerScalarWhereInput[]
    NOT?: FarmerScalarWhereInput | FarmerScalarWhereInput[]
    id?: IntFilter<"Farmer"> | number
    fullname?: StringFilter<"Farmer"> | string
    email?: StringNullableFilter<"Farmer"> | string | null
    phone_number?: StringFilter<"Farmer"> | string
    address?: StringFilter<"Farmer"> | string
    nin?: StringFilter<"Farmer"> | string
    profile_image?: StringNullableFilter<"Farmer"> | string | null
    proof_of_address?: StringNullableFilter<"Farmer"> | string | null
    bankId?: IntFilter<"Farmer"> | number
    account_number?: StringFilter<"Farmer"> | string
    account_name?: StringFilter<"Farmer"> | string
    countryId?: IntFilter<"Farmer"> | number
    stateId?: IntFilter<"Farmer"> | number
    lgaId?: IntFilter<"Farmer"> | number
    email_verified?: BoolFilter<"Farmer"> | boolean
    phone_verified?: BoolFilter<"Farmer"> | boolean
    nin_verified?: BoolFilter<"Farmer"> | boolean
    has_paid?: BoolFilter<"Farmer"> | boolean
    status?: EnumStatusFilter<"Farmer"> | $Enums.Status
    account_created_by?: IntFilter<"Farmer"> | number
    createdAt?: DateTimeFilter<"Farmer"> | Date | string
    updatedAt?: DateTimeFilter<"Farmer"> | Date | string
  }

  export type CountryCreateWithoutStatesInput = {
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersCreateNestedManyWithoutCountryInput
    farmers?: FarmerCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutStatesInput = {
    id?: number
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutCountryInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutStatesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
  }

  export type LgaCreateWithoutStateInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersCreateNestedManyWithoutLgaInput
    farmers?: FarmerCreateNestedManyWithoutLgaInput
  }

  export type LgaUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutLgaInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutLgaInput
  }

  export type LgaCreateOrConnectWithoutStateInput = {
    where: LgaWhereUniqueInput
    create: XOR<LgaCreateWithoutStateInput, LgaUncheckedCreateWithoutStateInput>
  }

  export type LgaCreateManyStateInputEnvelope = {
    data: LgaCreateManyStateInput | LgaCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutStateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutUsersInput
    lga?: LgaCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutStateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId?: number | null
    lgaId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutStateInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutStateInput, UsersUncheckedCreateWithoutStateInput>
  }

  export type UsersCreateManyStateInputEnvelope = {
    data: UsersCreateManyStateInput | UsersCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type FarmerCreateWithoutStateInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutFarmersInput
    country: CountryCreateNestedOneWithoutFarmersInput
    lga: LgaCreateNestedOneWithoutFarmersInput
    inovices?: InvoiceCreateNestedManyWithoutFarmerInput
    farms?: FarmCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutStateInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inovices?: InvoiceUncheckedCreateNestedManyWithoutFarmerInput
    farms?: FarmUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutStateInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutStateInput, FarmerUncheckedCreateWithoutStateInput>
  }

  export type FarmerCreateManyStateInputEnvelope = {
    data: FarmerCreateManyStateInput | FarmerCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutStatesInput = {
    update: XOR<CountryUpdateWithoutStatesInput, CountryUncheckedUpdateWithoutStatesInput>
    create: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutStatesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutStatesInput, CountryUncheckedUpdateWithoutStatesInput>
  }

  export type CountryUpdateWithoutStatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutCountryNestedInput
    farmers?: FarmerUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutCountryNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type LgaUpsertWithWhereUniqueWithoutStateInput = {
    where: LgaWhereUniqueInput
    update: XOR<LgaUpdateWithoutStateInput, LgaUncheckedUpdateWithoutStateInput>
    create: XOR<LgaCreateWithoutStateInput, LgaUncheckedCreateWithoutStateInput>
  }

  export type LgaUpdateWithWhereUniqueWithoutStateInput = {
    where: LgaWhereUniqueInput
    data: XOR<LgaUpdateWithoutStateInput, LgaUncheckedUpdateWithoutStateInput>
  }

  export type LgaUpdateManyWithWhereWithoutStateInput = {
    where: LgaScalarWhereInput
    data: XOR<LgaUpdateManyMutationInput, LgaUncheckedUpdateManyWithoutStateInput>
  }

  export type LgaScalarWhereInput = {
    AND?: LgaScalarWhereInput | LgaScalarWhereInput[]
    OR?: LgaScalarWhereInput[]
    NOT?: LgaScalarWhereInput | LgaScalarWhereInput[]
    id?: IntFilter<"Lga"> | number
    name?: StringFilter<"Lga"> | string
    code?: StringNullableFilter<"Lga"> | string | null
    stateId?: IntFilter<"Lga"> | number
    createdAt?: DateTimeFilter<"Lga"> | Date | string
    updatedAt?: DateTimeFilter<"Lga"> | Date | string
  }

  export type UsersUpsertWithWhereUniqueWithoutStateInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutStateInput, UsersUncheckedUpdateWithoutStateInput>
    create: XOR<UsersCreateWithoutStateInput, UsersUncheckedCreateWithoutStateInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutStateInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutStateInput, UsersUncheckedUpdateWithoutStateInput>
  }

  export type UsersUpdateManyWithWhereWithoutStateInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutStateInput>
  }

  export type FarmerUpsertWithWhereUniqueWithoutStateInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutStateInput, FarmerUncheckedUpdateWithoutStateInput>
    create: XOR<FarmerCreateWithoutStateInput, FarmerUncheckedCreateWithoutStateInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutStateInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutStateInput, FarmerUncheckedUpdateWithoutStateInput>
  }

  export type FarmerUpdateManyWithWhereWithoutStateInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutStateInput>
  }

  export type StateCreateWithoutLgasInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    users?: UsersCreateNestedManyWithoutStateInput
    farmers?: FarmerCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutLgasInput = {
    id?: number
    name: string
    code?: string | null
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutStateInput
    farmers?: FarmerUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutLgasInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
  }

  export type UsersCreateWithoutLgaInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutUsersInput
    state?: StateCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutLgaInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId?: number | null
    stateId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutLgaInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLgaInput, UsersUncheckedCreateWithoutLgaInput>
  }

  export type UsersCreateManyLgaInputEnvelope = {
    data: UsersCreateManyLgaInput | UsersCreateManyLgaInput[]
    skipDuplicates?: boolean
  }

  export type FarmerCreateWithoutLgaInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutFarmersInput
    country: CountryCreateNestedOneWithoutFarmersInput
    state: StateCreateNestedOneWithoutFarmersInput
    inovices?: InvoiceCreateNestedManyWithoutFarmerInput
    farms?: FarmCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutLgaInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inovices?: InvoiceUncheckedCreateNestedManyWithoutFarmerInput
    farms?: FarmUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutLgaInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutLgaInput, FarmerUncheckedCreateWithoutLgaInput>
  }

  export type FarmerCreateManyLgaInputEnvelope = {
    data: FarmerCreateManyLgaInput | FarmerCreateManyLgaInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutLgasInput = {
    update: XOR<StateUpdateWithoutLgasInput, StateUncheckedUpdateWithoutLgasInput>
    create: XOR<StateCreateWithoutLgasInput, StateUncheckedCreateWithoutLgasInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutLgasInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutLgasInput, StateUncheckedUpdateWithoutLgasInput>
  }

  export type StateUpdateWithoutLgasInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    users?: UsersUpdateManyWithoutStateNestedInput
    farmers?: FarmerUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutLgasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutStateNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutStateNestedInput
  }

  export type UsersUpsertWithWhereUniqueWithoutLgaInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutLgaInput, UsersUncheckedUpdateWithoutLgaInput>
    create: XOR<UsersCreateWithoutLgaInput, UsersUncheckedCreateWithoutLgaInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutLgaInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutLgaInput, UsersUncheckedUpdateWithoutLgaInput>
  }

  export type UsersUpdateManyWithWhereWithoutLgaInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutLgaInput>
  }

  export type FarmerUpsertWithWhereUniqueWithoutLgaInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutLgaInput, FarmerUncheckedUpdateWithoutLgaInput>
    create: XOR<FarmerCreateWithoutLgaInput, FarmerUncheckedCreateWithoutLgaInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutLgaInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutLgaInput, FarmerUncheckedUpdateWithoutLgaInput>
  }

  export type FarmerUpdateManyWithWhereWithoutLgaInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutLgaInput>
  }

  export type BankCreateWithoutFarmersInput = {
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankUncheckedCreateWithoutFarmersInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankCreateOrConnectWithoutFarmersInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutFarmersInput, BankUncheckedCreateWithoutFarmersInput>
  }

  export type CountryCreateWithoutFarmersInput = {
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: StateCreateNestedManyWithoutCountryInput
    users?: UsersCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutFarmersInput = {
    id?: number
    name: string
    iso2?: string | null
    iso3?: string | null
    numericCode?: string | null
    phoneCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: StateUncheckedCreateNestedManyWithoutCountryInput
    users?: UsersUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutFarmersInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutFarmersInput, CountryUncheckedCreateWithoutFarmersInput>
  }

  export type StateCreateWithoutFarmersInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    lgas?: LgaCreateNestedManyWithoutStateInput
    users?: UsersCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutFarmersInput = {
    id?: number
    name: string
    code?: string | null
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lgas?: LgaUncheckedCreateNestedManyWithoutStateInput
    users?: UsersUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutFarmersInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutFarmersInput, StateUncheckedCreateWithoutFarmersInput>
  }

  export type LgaCreateWithoutFarmersInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    state: StateCreateNestedOneWithoutLgasInput
    users?: UsersCreateNestedManyWithoutLgaInput
  }

  export type LgaUncheckedCreateWithoutFarmersInput = {
    id?: number
    name: string
    code?: string | null
    stateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UsersUncheckedCreateNestedManyWithoutLgaInput
  }

  export type LgaCreateOrConnectWithoutFarmersInput = {
    where: LgaWhereUniqueInput
    create: XOR<LgaCreateWithoutFarmersInput, LgaUncheckedCreateWithoutFarmersInput>
  }

  export type InvoiceCreateWithoutFarmerInput = {
    amount: number
    phone_number: string
    has_paid?: boolean
    payment_reference?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutFarmerInput = {
    id?: number
    amount: number
    phone_number: string
    has_paid?: boolean
    payment_reference?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutFarmerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutFarmerInput, InvoiceUncheckedCreateWithoutFarmerInput>
  }

  export type InvoiceCreateManyFarmerInputEnvelope = {
    data: InvoiceCreateManyFarmerInput | InvoiceCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type FarmCreateWithoutFarmerInput = {
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: FarmMediaCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutFarmerInput = {
    id?: number
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: FarmMediaUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutFarmerInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutFarmerInput, FarmUncheckedCreateWithoutFarmerInput>
  }

  export type FarmCreateManyFarmerInputEnvelope = {
    data: FarmCreateManyFarmerInput | FarmCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type BankUpsertWithoutFarmersInput = {
    update: XOR<BankUpdateWithoutFarmersInput, BankUncheckedUpdateWithoutFarmersInput>
    create: XOR<BankCreateWithoutFarmersInput, BankUncheckedCreateWithoutFarmersInput>
    where?: BankWhereInput
  }

  export type BankUpdateToOneWithWhereWithoutFarmersInput = {
    where?: BankWhereInput
    data: XOR<BankUpdateWithoutFarmersInput, BankUncheckedUpdateWithoutFarmersInput>
  }

  export type BankUpdateWithoutFarmersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUpsertWithoutFarmersInput = {
    update: XOR<CountryUpdateWithoutFarmersInput, CountryUncheckedUpdateWithoutFarmersInput>
    create: XOR<CountryCreateWithoutFarmersInput, CountryUncheckedCreateWithoutFarmersInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutFarmersInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutFarmersInput, CountryUncheckedUpdateWithoutFarmersInput>
  }

  export type CountryUpdateWithoutFarmersInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUpdateManyWithoutCountryNestedInput
    users?: UsersUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    numericCode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUncheckedUpdateManyWithoutCountryNestedInput
    users?: UsersUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type StateUpsertWithoutFarmersInput = {
    update: XOR<StateUpdateWithoutFarmersInput, StateUncheckedUpdateWithoutFarmersInput>
    create: XOR<StateCreateWithoutFarmersInput, StateUncheckedCreateWithoutFarmersInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutFarmersInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutFarmersInput, StateUncheckedUpdateWithoutFarmersInput>
  }

  export type StateUpdateWithoutFarmersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    lgas?: LgaUpdateManyWithoutStateNestedInput
    users?: UsersUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lgas?: LgaUncheckedUpdateManyWithoutStateNestedInput
    users?: UsersUncheckedUpdateManyWithoutStateNestedInput
  }

  export type LgaUpsertWithoutFarmersInput = {
    update: XOR<LgaUpdateWithoutFarmersInput, LgaUncheckedUpdateWithoutFarmersInput>
    create: XOR<LgaCreateWithoutFarmersInput, LgaUncheckedCreateWithoutFarmersInput>
    where?: LgaWhereInput
  }

  export type LgaUpdateToOneWithWhereWithoutFarmersInput = {
    where?: LgaWhereInput
    data: XOR<LgaUpdateWithoutFarmersInput, LgaUncheckedUpdateWithoutFarmersInput>
  }

  export type LgaUpdateWithoutFarmersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutLgasNestedInput
    users?: UsersUpdateManyWithoutLgaNestedInput
  }

  export type LgaUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    stateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutLgaNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutFarmerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutFarmerInput, InvoiceUncheckedUpdateWithoutFarmerInput>
    create: XOR<InvoiceCreateWithoutFarmerInput, InvoiceUncheckedCreateWithoutFarmerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutFarmerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutFarmerInput, InvoiceUncheckedUpdateWithoutFarmerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutFarmerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutFarmerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    farmerId?: IntFilter<"Invoice"> | number
    amount?: FloatFilter<"Invoice"> | number
    phone_number?: StringFilter<"Invoice"> | string
    has_paid?: BoolFilter<"Invoice"> | boolean
    payment_reference?: StringNullableFilter<"Invoice"> | string | null
    status?: EnumStatusFilter<"Invoice"> | $Enums.Status
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type FarmUpsertWithWhereUniqueWithoutFarmerInput = {
    where: FarmWhereUniqueInput
    update: XOR<FarmUpdateWithoutFarmerInput, FarmUncheckedUpdateWithoutFarmerInput>
    create: XOR<FarmCreateWithoutFarmerInput, FarmUncheckedCreateWithoutFarmerInput>
  }

  export type FarmUpdateWithWhereUniqueWithoutFarmerInput = {
    where: FarmWhereUniqueInput
    data: XOR<FarmUpdateWithoutFarmerInput, FarmUncheckedUpdateWithoutFarmerInput>
  }

  export type FarmUpdateManyWithWhereWithoutFarmerInput = {
    where: FarmScalarWhereInput
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyWithoutFarmerInput>
  }

  export type FarmScalarWhereInput = {
    AND?: FarmScalarWhereInput | FarmScalarWhereInput[]
    OR?: FarmScalarWhereInput[]
    NOT?: FarmScalarWhereInput | FarmScalarWhereInput[]
    id?: IntFilter<"Farm"> | number
    farmerId?: IntFilter<"Farm"> | number
    name?: StringFilter<"Farm"> | string
    location?: StringFilter<"Farm"> | string
    latitude?: DecimalNullableFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Farm"> | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFilter<"Farm"> | $Enums.ProductionType
    production_type?: StringNullableFilter<"Farm"> | string | null
    size?: FloatNullableFilter<"Farm"> | number | null
    sizeUnit?: EnumSizeUnitNullableFilter<"Farm"> | $Enums.SizeUnit | null
    stage?: EnumFarmStageFilter<"Farm"> | $Enums.FarmStage
    ownershipDocument?: StringNullableFilter<"Farm"> | string | null
    number_of_workers?: IntNullableFilter<"Farm"> | number | null
    verified?: BoolFilter<"Farm"> | boolean
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
  }

  export type FarmerCreateWithoutBankInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutFarmersInput
    state: StateCreateNestedOneWithoutFarmersInput
    lga: LgaCreateNestedOneWithoutFarmersInput
    inovices?: InvoiceCreateNestedManyWithoutFarmerInput
    farms?: FarmCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutBankInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inovices?: InvoiceUncheckedCreateNestedManyWithoutFarmerInput
    farms?: FarmUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutBankInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutBankInput, FarmerUncheckedCreateWithoutBankInput>
  }

  export type FarmerCreateManyBankInputEnvelope = {
    data: FarmerCreateManyBankInput | FarmerCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type FarmerUpsertWithWhereUniqueWithoutBankInput = {
    where: FarmerWhereUniqueInput
    update: XOR<FarmerUpdateWithoutBankInput, FarmerUncheckedUpdateWithoutBankInput>
    create: XOR<FarmerCreateWithoutBankInput, FarmerUncheckedCreateWithoutBankInput>
  }

  export type FarmerUpdateWithWhereUniqueWithoutBankInput = {
    where: FarmerWhereUniqueInput
    data: XOR<FarmerUpdateWithoutBankInput, FarmerUncheckedUpdateWithoutBankInput>
  }

  export type FarmerUpdateManyWithWhereWithoutBankInput = {
    where: FarmerScalarWhereInput
    data: XOR<FarmerUpdateManyMutationInput, FarmerUncheckedUpdateManyWithoutBankInput>
  }

  export type FarmerCreateWithoutInovicesInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutFarmersInput
    country: CountryCreateNestedOneWithoutFarmersInput
    state: StateCreateNestedOneWithoutFarmersInput
    lga: LgaCreateNestedOneWithoutFarmersInput
    farms?: FarmCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutInovicesInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutInovicesInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutInovicesInput, FarmerUncheckedCreateWithoutInovicesInput>
  }

  export type FarmerUpsertWithoutInovicesInput = {
    update: XOR<FarmerUpdateWithoutInovicesInput, FarmerUncheckedUpdateWithoutInovicesInput>
    create: XOR<FarmerCreateWithoutInovicesInput, FarmerUncheckedCreateWithoutInovicesInput>
    where?: FarmerWhereInput
  }

  export type FarmerUpdateToOneWithWhereWithoutInovicesInput = {
    where?: FarmerWhereInput
    data: XOR<FarmerUpdateWithoutInovicesInput, FarmerUncheckedUpdateWithoutInovicesInput>
  }

  export type FarmerUpdateWithoutInovicesInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutFarmersNestedInput
    country?: CountryUpdateOneRequiredWithoutFarmersNestedInput
    state?: StateUpdateOneRequiredWithoutFarmersNestedInput
    lga?: LgaUpdateOneRequiredWithoutFarmersNestedInput
    farms?: FarmUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutInovicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerCreateWithoutFarmsInput = {
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutFarmersInput
    country: CountryCreateNestedOneWithoutFarmersInput
    state: StateCreateNestedOneWithoutFarmersInput
    lga: LgaCreateNestedOneWithoutFarmersInput
    inovices?: InvoiceCreateNestedManyWithoutFarmerInput
  }

  export type FarmerUncheckedCreateWithoutFarmsInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inovices?: InvoiceUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type FarmerCreateOrConnectWithoutFarmsInput = {
    where: FarmerWhereUniqueInput
    create: XOR<FarmerCreateWithoutFarmsInput, FarmerUncheckedCreateWithoutFarmsInput>
  }

  export type FarmMediaCreateWithoutFarmInput = {
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmMediaUncheckedCreateWithoutFarmInput = {
    id?: number
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmMediaCreateOrConnectWithoutFarmInput = {
    where: FarmMediaWhereUniqueInput
    create: XOR<FarmMediaCreateWithoutFarmInput, FarmMediaUncheckedCreateWithoutFarmInput>
  }

  export type FarmMediaCreateManyFarmInputEnvelope = {
    data: FarmMediaCreateManyFarmInput | FarmMediaCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type FarmerUpsertWithoutFarmsInput = {
    update: XOR<FarmerUpdateWithoutFarmsInput, FarmerUncheckedUpdateWithoutFarmsInput>
    create: XOR<FarmerCreateWithoutFarmsInput, FarmerUncheckedCreateWithoutFarmsInput>
    where?: FarmerWhereInput
  }

  export type FarmerUpdateToOneWithWhereWithoutFarmsInput = {
    where?: FarmerWhereInput
    data: XOR<FarmerUpdateWithoutFarmsInput, FarmerUncheckedUpdateWithoutFarmsInput>
  }

  export type FarmerUpdateWithoutFarmsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutFarmersNestedInput
    country?: CountryUpdateOneRequiredWithoutFarmersNestedInput
    state?: StateUpdateOneRequiredWithoutFarmersNestedInput
    lga?: LgaUpdateOneRequiredWithoutFarmersNestedInput
    inovices?: InvoiceUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutFarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inovices?: InvoiceUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmMediaUpsertWithWhereUniqueWithoutFarmInput = {
    where: FarmMediaWhereUniqueInput
    update: XOR<FarmMediaUpdateWithoutFarmInput, FarmMediaUncheckedUpdateWithoutFarmInput>
    create: XOR<FarmMediaCreateWithoutFarmInput, FarmMediaUncheckedCreateWithoutFarmInput>
  }

  export type FarmMediaUpdateWithWhereUniqueWithoutFarmInput = {
    where: FarmMediaWhereUniqueInput
    data: XOR<FarmMediaUpdateWithoutFarmInput, FarmMediaUncheckedUpdateWithoutFarmInput>
  }

  export type FarmMediaUpdateManyWithWhereWithoutFarmInput = {
    where: FarmMediaScalarWhereInput
    data: XOR<FarmMediaUpdateManyMutationInput, FarmMediaUncheckedUpdateManyWithoutFarmInput>
  }

  export type FarmMediaScalarWhereInput = {
    AND?: FarmMediaScalarWhereInput | FarmMediaScalarWhereInput[]
    OR?: FarmMediaScalarWhereInput[]
    NOT?: FarmMediaScalarWhereInput | FarmMediaScalarWhereInput[]
    id?: IntFilter<"FarmMedia"> | number
    farmId?: IntFilter<"FarmMedia"> | number
    url?: StringFilter<"FarmMedia"> | string
    mediaType?: EnumMediaTypeFilter<"FarmMedia"> | $Enums.MediaType
    latitude?: DecimalFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"FarmMedia"> | Decimal | DecimalJsLike | number | string
    caption?: StringNullableFilter<"FarmMedia"> | string | null
    createdAt?: DateTimeFilter<"FarmMedia"> | Date | string
    updatedAt?: DateTimeFilter<"FarmMedia"> | Date | string
  }

  export type FarmCreateWithoutMediaInput = {
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: FarmerCreateNestedOneWithoutFarmsInput
  }

  export type FarmUncheckedCreateWithoutMediaInput = {
    id?: number
    farmerId: number
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmCreateOrConnectWithoutMediaInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutMediaInput, FarmUncheckedCreateWithoutMediaInput>
  }

  export type FarmUpsertWithoutMediaInput = {
    update: XOR<FarmUpdateWithoutMediaInput, FarmUncheckedUpdateWithoutMediaInput>
    create: XOR<FarmCreateWithoutMediaInput, FarmUncheckedCreateWithoutMediaInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutMediaInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutMediaInput, FarmUncheckedUpdateWithoutMediaInput>
  }

  export type FarmUpdateWithoutMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: FarmerUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type FarmUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateCreateManyCountryInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateManyCountryInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    stateId?: number | null
    lgaId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmerCreateManyCountryInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StateUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lgas?: LgaUpdateManyWithoutStateNestedInput
    users?: UsersUpdateManyWithoutStateNestedInput
    farmers?: FarmerUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lgas?: LgaUncheckedUpdateManyWithoutStateNestedInput
    users?: UsersUncheckedUpdateManyWithoutStateNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutCountryInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneWithoutUsersNestedInput
    lga?: LgaUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stateId?: NullableIntFieldUpdateOperationsInput | number | null
    lgaId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    stateId?: NullableIntFieldUpdateOperationsInput | number | null
    lgaId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerUpdateWithoutCountryInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutFarmersNestedInput
    state?: StateUpdateOneRequiredWithoutFarmersNestedInput
    lga?: LgaUpdateOneRequiredWithoutFarmersNestedInput
    inovices?: InvoiceUpdateManyWithoutFarmerNestedInput
    farms?: FarmUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inovices?: InvoiceUncheckedUpdateManyWithoutFarmerNestedInput
    farms?: FarmUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LgaCreateManyStateInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateManyStateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId?: number | null
    lgaId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmerCreateManyStateInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LgaUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateManyWithoutLgaNestedInput
    farmers?: FarmerUpdateManyWithoutLgaNestedInput
  }

  export type LgaUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUncheckedUpdateManyWithoutLgaNestedInput
    farmers?: FarmerUncheckedUpdateManyWithoutLgaNestedInput
  }

  export type LgaUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutStateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUsersNestedInput
    lga?: LgaUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    lgaId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    lgaId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerUpdateWithoutStateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutFarmersNestedInput
    country?: CountryUpdateOneRequiredWithoutFarmersNestedInput
    lga?: LgaUpdateOneRequiredWithoutFarmersNestedInput
    inovices?: InvoiceUpdateManyWithoutFarmerNestedInput
    farms?: FarmUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inovices?: InvoiceUncheckedUpdateManyWithoutFarmerNestedInput
    farms?: FarmUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyLgaInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    countryId?: number | null
    stateId?: number | null
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmerCreateManyLgaInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    bankId: number
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateWithoutLgaInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUsersNestedInput
    state?: StateUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutLgaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutLgaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    stateId?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerUpdateWithoutLgaInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutFarmersNestedInput
    country?: CountryUpdateOneRequiredWithoutFarmersNestedInput
    state?: StateUpdateOneRequiredWithoutFarmersNestedInput
    inovices?: InvoiceUpdateManyWithoutFarmerNestedInput
    farms?: FarmUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutLgaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inovices?: InvoiceUncheckedUpdateManyWithoutFarmerNestedInput
    farms?: FarmUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutLgaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    bankId?: IntFieldUpdateOperationsInput | number
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyFarmerInput = {
    id?: number
    amount: number
    phone_number: string
    has_paid?: boolean
    payment_reference?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
  }

  export type FarmCreateManyFarmerInput = {
    id?: number
    name: string
    location: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    type: $Enums.ProductionType
    production_type?: string | null
    size?: number | null
    sizeUnit?: $Enums.SizeUnit | null
    stage?: $Enums.FarmStage
    ownershipDocument?: string | null
    number_of_workers?: number | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutFarmerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    payment_reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUpdateWithoutFarmerInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: FarmMediaUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: FarmMediaUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateManyWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: EnumProductionTypeFieldUpdateOperationsInput | $Enums.ProductionType
    production_type?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableEnumSizeUnitFieldUpdateOperationsInput | $Enums.SizeUnit | null
    stage?: EnumFarmStageFieldUpdateOperationsInput | $Enums.FarmStage
    ownershipDocument?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_workers?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmerCreateManyBankInput = {
    id?: number
    fullname: string
    email?: string | null
    phone_number: string
    address: string
    nin: string
    profile_image?: string | null
    proof_of_address?: string | null
    account_number: string
    account_name: string
    countryId: number
    stateId: number
    lgaId: number
    email_verified?: boolean
    phone_verified?: boolean
    nin_verified?: boolean
    has_paid?: boolean
    status?: $Enums.Status
    account_created_by: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmerUpdateWithoutBankInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutFarmersNestedInput
    state?: StateUpdateOneRequiredWithoutFarmersNestedInput
    lga?: LgaUpdateOneRequiredWithoutFarmersNestedInput
    inovices?: InvoiceUpdateManyWithoutFarmerNestedInput
    farms?: FarmUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inovices?: InvoiceUncheckedUpdateManyWithoutFarmerNestedInput
    farms?: FarmUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type FarmerUncheckedUpdateManyWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nin?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    account_number?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    stateId?: IntFieldUpdateOperationsInput | number
    lgaId?: IntFieldUpdateOperationsInput | number
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    nin_verified?: BoolFieldUpdateOperationsInput | boolean
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    account_created_by?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmMediaCreateManyFarmInput = {
    id?: number
    url: string
    mediaType: $Enums.MediaType
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    caption?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmMediaUpdateWithoutFarmInput = {
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmMediaUncheckedUpdateWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmMediaUncheckedUpdateManyWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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