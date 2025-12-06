
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
 * Model estado
 * 
 */
export type estado = $Result.DefaultSelection<Prisma.$estadoPayload>
/**
 * Model mensajeria
 * 
 */
export type mensajeria = $Result.DefaultSelection<Prisma.$mensajeriaPayload>
/**
 * Model dato
 * 
 */
export type dato = $Result.DefaultSelection<Prisma.$datoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estados
 * const estados = await prisma.estado.findMany()
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
   * // Fetch zero or more Estados
   * const estados = await prisma.estado.findMany()
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
   * `prisma.estado`: Exposes CRUD operations for the **estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.estadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensajeria`: Exposes CRUD operations for the **mensajeria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajerias
    * const mensajerias = await prisma.mensajeria.findMany()
    * ```
    */
  get mensajeria(): Prisma.mensajeriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dato`: Exposes CRUD operations for the **dato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datoes
    * const datoes = await prisma.dato.findMany()
    * ```
    */
  get dato(): Prisma.datoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    estado: 'estado',
    mensajeria: 'mensajeria',
    dato: 'dato'
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
      modelProps: "estado" | "mensajeria" | "dato"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      estado: {
        payload: Prisma.$estadoPayload<ExtArgs>
        fields: Prisma.estadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findFirst: {
            args: Prisma.estadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findMany: {
            args: Prisma.estadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          create: {
            args: Prisma.estadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          createMany: {
            args: Prisma.estadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          delete: {
            args: Prisma.estadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          update: {
            args: Prisma.estadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          deleteMany: {
            args: Prisma.estadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          upsert: {
            args: Prisma.estadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.estadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.estadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      mensajeria: {
        payload: Prisma.$mensajeriaPayload<ExtArgs>
        fields: Prisma.mensajeriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mensajeriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mensajeriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>
          }
          findFirst: {
            args: Prisma.mensajeriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mensajeriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>
          }
          findMany: {
            args: Prisma.mensajeriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>[]
          }
          create: {
            args: Prisma.mensajeriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>
          }
          createMany: {
            args: Prisma.mensajeriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mensajeriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>[]
          }
          delete: {
            args: Prisma.mensajeriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>
          }
          update: {
            args: Prisma.mensajeriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>
          }
          deleteMany: {
            args: Prisma.mensajeriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mensajeriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mensajeriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>[]
          }
          upsert: {
            args: Prisma.mensajeriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajeriaPayload>
          }
          aggregate: {
            args: Prisma.MensajeriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensajeria>
          }
          groupBy: {
            args: Prisma.mensajeriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mensajeriaCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeriaCountAggregateOutputType> | number
          }
        }
      }
      dato: {
        payload: Prisma.$datoPayload<ExtArgs>
        fields: Prisma.datoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.datoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.datoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>
          }
          findFirst: {
            args: Prisma.datoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.datoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>
          }
          findMany: {
            args: Prisma.datoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>[]
          }
          create: {
            args: Prisma.datoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>
          }
          createMany: {
            args: Prisma.datoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.datoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>[]
          }
          delete: {
            args: Prisma.datoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>
          }
          update: {
            args: Prisma.datoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>
          }
          deleteMany: {
            args: Prisma.datoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.datoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.datoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>[]
          }
          upsert: {
            args: Prisma.datoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datoPayload>
          }
          aggregate: {
            args: Prisma.DatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDato>
          }
          groupBy: {
            args: Prisma.datoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.datoCountArgs<ExtArgs>
            result: $Utils.Optional<DatoCountAggregateOutputType> | number
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
    estado?: estadoOmit
    mensajeria?: mensajeriaOmit
    dato?: datoOmit
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
   * Count Type DatoCountOutputType
   */

  export type DatoCountOutputType = {
    mensajerias: number
  }

  export type DatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajerias?: boolean | DatoCountOutputTypeCountMensajeriasArgs
  }

  // Custom InputTypes
  /**
   * DatoCountOutputType without action
   */
  export type DatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatoCountOutputType
     */
    select?: DatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatoCountOutputType without action
   */
  export type DatoCountOutputTypeCountMensajeriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajeriaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    id: number | null
    hora: number | null
  }

  export type EstadoSumAggregateOutputType = {
    id: number | null
    hora: number | null
  }

  export type EstadoMinAggregateOutputType = {
    id: number | null
    servicio: string | null
    version: string | null
    entorno: string | null
    estado: string | null
    fecha: Date | null
    hora: number | null
  }

  export type EstadoMaxAggregateOutputType = {
    id: number | null
    servicio: string | null
    version: string | null
    entorno: string | null
    estado: string | null
    fecha: Date | null
    hora: number | null
  }

  export type EstadoCountAggregateOutputType = {
    id: number
    servicio: number
    version: number
    entorno: number
    estado: number
    fecha: number
    hora: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    id?: true
    hora?: true
  }

  export type EstadoSumAggregateInputType = {
    id?: true
    hora?: true
  }

  export type EstadoMinAggregateInputType = {
    id?: true
    servicio?: true
    version?: true
    entorno?: true
    estado?: true
    fecha?: true
    hora?: true
  }

  export type EstadoMaxAggregateInputType = {
    id?: true
    servicio?: true
    version?: true
    entorno?: true
    estado?: true
    fecha?: true
    hora?: true
  }

  export type EstadoCountAggregateInputType = {
    id?: true
    servicio?: true
    version?: true
    entorno?: true
    estado?: true
    fecha?: true
    hora?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado to aggregate.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type estadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estadoWhereInput
    orderBy?: estadoOrderByWithAggregationInput | estadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: estadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id: number
    servicio: string | null
    version: string | null
    entorno: string | null
    estado: string | null
    fecha: Date
    hora: number
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends estadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type estadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicio?: boolean
    version?: boolean
    entorno?: boolean
    estado?: boolean
    fecha?: boolean
    hora?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicio?: boolean
    version?: boolean
    entorno?: boolean
    estado?: boolean
    fecha?: boolean
    hora?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    servicio?: boolean
    version?: boolean
    entorno?: boolean
    estado?: boolean
    fecha?: boolean
    hora?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectScalar = {
    id?: boolean
    servicio?: boolean
    version?: boolean
    entorno?: boolean
    estado?: boolean
    fecha?: boolean
    hora?: boolean
  }

  export type estadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "servicio" | "version" | "entorno" | "estado" | "fecha" | "hora", ExtArgs["result"]["estado"]>

  export type $estadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      servicio: string | null
      version: string | null
      entorno: string | null
      estado: string | null
      fecha: Date
      hora: number
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type estadoGetPayload<S extends boolean | null | undefined | estadoDefaultArgs> = $Result.GetResult<Prisma.$estadoPayload, S>

  type estadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface estadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado'], meta: { name: 'estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {estadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estadoFindUniqueArgs>(args: SelectSubset<T, estadoFindUniqueArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estadoFindUniqueOrThrowArgs>(args: SelectSubset<T, estadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estadoFindFirstArgs>(args?: SelectSubset<T, estadoFindFirstArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estadoFindFirstOrThrowArgs>(args?: SelectSubset<T, estadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoWithIdOnly = await prisma.estado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estadoFindManyArgs>(args?: SelectSubset<T, estadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {estadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends estadoCreateArgs>(args: SelectSubset<T, estadoCreateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {estadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estadoCreateManyArgs>(args?: SelectSubset<T, estadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {estadoCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estadoCreateManyAndReturnArgs>(args?: SelectSubset<T, estadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado.
     * @param {estadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends estadoDeleteArgs>(args: SelectSubset<T, estadoDeleteArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {estadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estadoUpdateArgs>(args: SelectSubset<T, estadoUpdateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {estadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estadoDeleteManyArgs>(args?: SelectSubset<T, estadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estadoUpdateManyArgs>(args: SelectSubset<T, estadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {estadoUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends estadoUpdateManyAndReturnArgs>(args: SelectSubset<T, estadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado.
     * @param {estadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends estadoUpsertArgs>(args: SelectSubset<T, estadoUpsertArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends estadoCountArgs>(
      args?: Subset<T, estadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoGroupByArgs} args - Group by arguments.
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
      T extends estadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estadoGroupByArgs['orderBy'] }
        : { orderBy?: estadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado model
   */
  readonly fields: estadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the estado model
   */
  interface estadoFieldRefs {
    readonly id: FieldRef<"estado", 'Int'>
    readonly servicio: FieldRef<"estado", 'String'>
    readonly version: FieldRef<"estado", 'String'>
    readonly entorno: FieldRef<"estado", 'String'>
    readonly estado: FieldRef<"estado", 'String'>
    readonly fecha: FieldRef<"estado", 'DateTime'>
    readonly hora: FieldRef<"estado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * estado findUnique
   */
  export type estadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findUniqueOrThrow
   */
  export type estadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findFirst
   */
  export type estadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findFirstOrThrow
   */
  export type estadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findMany
   */
  export type estadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado create
   */
  export type estadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data needed to create a estado.
     */
    data: XOR<estadoCreateInput, estadoUncheckedCreateInput>
  }

  /**
   * estado createMany
   */
  export type estadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado createManyAndReturn
   */
  export type estadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado update
   */
  export type estadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data needed to update a estado.
     */
    data: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
    /**
     * Choose, which estado to update.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado updateMany
   */
  export type estadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado updateManyAndReturn
   */
  export type estadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado upsert
   */
  export type estadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The filter to search for the estado to update in case it exists.
     */
    where: estadoWhereUniqueInput
    /**
     * In case the estado found by the `where` argument doesn't exist, create a new estado with this data.
     */
    create: XOR<estadoCreateInput, estadoUncheckedCreateInput>
    /**
     * In case the estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
  }

  /**
   * estado delete
   */
  export type estadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Filter which estado to delete.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado deleteMany
   */
  export type estadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados to delete
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to delete.
     */
    limit?: number
  }

  /**
   * estado without action
   */
  export type estadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
  }


  /**
   * Model mensajeria
   */

  export type AggregateMensajeria = {
    _count: MensajeriaCountAggregateOutputType | null
    _avg: MensajeriaAvgAggregateOutputType | null
    _sum: MensajeriaSumAggregateOutputType | null
    _min: MensajeriaMinAggregateOutputType | null
    _max: MensajeriaMaxAggregateOutputType | null
  }

  export type MensajeriaAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type MensajeriaSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type MensajeriaMinAggregateOutputType = {
    id: number | null
    mensaje: string | null
    fechaRegistro: Date | null
    horaRegistro: Date | null
    id_usuario: number | null
  }

  export type MensajeriaMaxAggregateOutputType = {
    id: number | null
    mensaje: string | null
    fechaRegistro: Date | null
    horaRegistro: Date | null
    id_usuario: number | null
  }

  export type MensajeriaCountAggregateOutputType = {
    id: number
    mensaje: number
    fechaRegistro: number
    horaRegistro: number
    id_usuario: number
    _all: number
  }


  export type MensajeriaAvgAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type MensajeriaSumAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type MensajeriaMinAggregateInputType = {
    id?: true
    mensaje?: true
    fechaRegistro?: true
    horaRegistro?: true
    id_usuario?: true
  }

  export type MensajeriaMaxAggregateInputType = {
    id?: true
    mensaje?: true
    fechaRegistro?: true
    horaRegistro?: true
    id_usuario?: true
  }

  export type MensajeriaCountAggregateInputType = {
    id?: true
    mensaje?: true
    fechaRegistro?: true
    horaRegistro?: true
    id_usuario?: true
    _all?: true
  }

  export type MensajeriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajeria to aggregate.
     */
    where?: mensajeriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajerias to fetch.
     */
    orderBy?: mensajeriaOrderByWithRelationInput | mensajeriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mensajeriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mensajerias
    **/
    _count?: true | MensajeriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeriaMaxAggregateInputType
  }

  export type GetMensajeriaAggregateType<T extends MensajeriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMensajeria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensajeria[P]>
      : GetScalarType<T[P], AggregateMensajeria[P]>
  }




  export type mensajeriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajeriaWhereInput
    orderBy?: mensajeriaOrderByWithAggregationInput | mensajeriaOrderByWithAggregationInput[]
    by: MensajeriaScalarFieldEnum[] | MensajeriaScalarFieldEnum
    having?: mensajeriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeriaCountAggregateInputType | true
    _avg?: MensajeriaAvgAggregateInputType
    _sum?: MensajeriaSumAggregateInputType
    _min?: MensajeriaMinAggregateInputType
    _max?: MensajeriaMaxAggregateInputType
  }

  export type MensajeriaGroupByOutputType = {
    id: number
    mensaje: string | null
    fechaRegistro: Date
    horaRegistro: Date
    id_usuario: number
    _count: MensajeriaCountAggregateOutputType | null
    _avg: MensajeriaAvgAggregateOutputType | null
    _sum: MensajeriaSumAggregateOutputType | null
    _min: MensajeriaMinAggregateOutputType | null
    _max: MensajeriaMaxAggregateOutputType | null
  }

  type GetMensajeriaGroupByPayload<T extends mensajeriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeriaGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeriaGroupByOutputType[P]>
        }
      >
    >


  export type mensajeriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    fechaRegistro?: boolean
    horaRegistro?: boolean
    id_usuario?: boolean
    usuario?: boolean | datoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajeria"]>

  export type mensajeriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    fechaRegistro?: boolean
    horaRegistro?: boolean
    id_usuario?: boolean
    usuario?: boolean | datoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajeria"]>

  export type mensajeriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensaje?: boolean
    fechaRegistro?: boolean
    horaRegistro?: boolean
    id_usuario?: boolean
    usuario?: boolean | datoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajeria"]>

  export type mensajeriaSelectScalar = {
    id?: boolean
    mensaje?: boolean
    fechaRegistro?: boolean
    horaRegistro?: boolean
    id_usuario?: boolean
  }

  export type mensajeriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensaje" | "fechaRegistro" | "horaRegistro" | "id_usuario", ExtArgs["result"]["mensajeria"]>
  export type mensajeriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | datoDefaultArgs<ExtArgs>
  }
  export type mensajeriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | datoDefaultArgs<ExtArgs>
  }
  export type mensajeriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | datoDefaultArgs<ExtArgs>
  }

  export type $mensajeriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mensajeria"
    objects: {
      usuario: Prisma.$datoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mensaje: string | null
      fechaRegistro: Date
      horaRegistro: Date
      id_usuario: number
    }, ExtArgs["result"]["mensajeria"]>
    composites: {}
  }

  type mensajeriaGetPayload<S extends boolean | null | undefined | mensajeriaDefaultArgs> = $Result.GetResult<Prisma.$mensajeriaPayload, S>

  type mensajeriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mensajeriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeriaCountAggregateInputType | true
    }

  export interface mensajeriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mensajeria'], meta: { name: 'mensajeria' } }
    /**
     * Find zero or one Mensajeria that matches the filter.
     * @param {mensajeriaFindUniqueArgs} args - Arguments to find a Mensajeria
     * @example
     * // Get one Mensajeria
     * const mensajeria = await prisma.mensajeria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mensajeriaFindUniqueArgs>(args: SelectSubset<T, mensajeriaFindUniqueArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensajeria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mensajeriaFindUniqueOrThrowArgs} args - Arguments to find a Mensajeria
     * @example
     * // Get one Mensajeria
     * const mensajeria = await prisma.mensajeria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mensajeriaFindUniqueOrThrowArgs>(args: SelectSubset<T, mensajeriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajeria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajeriaFindFirstArgs} args - Arguments to find a Mensajeria
     * @example
     * // Get one Mensajeria
     * const mensajeria = await prisma.mensajeria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mensajeriaFindFirstArgs>(args?: SelectSubset<T, mensajeriaFindFirstArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajeria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajeriaFindFirstOrThrowArgs} args - Arguments to find a Mensajeria
     * @example
     * // Get one Mensajeria
     * const mensajeria = await prisma.mensajeria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mensajeriaFindFirstOrThrowArgs>(args?: SelectSubset<T, mensajeriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajeriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajerias
     * const mensajerias = await prisma.mensajeria.findMany()
     * 
     * // Get first 10 Mensajerias
     * const mensajerias = await prisma.mensajeria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeriaWithIdOnly = await prisma.mensajeria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mensajeriaFindManyArgs>(args?: SelectSubset<T, mensajeriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensajeria.
     * @param {mensajeriaCreateArgs} args - Arguments to create a Mensajeria.
     * @example
     * // Create one Mensajeria
     * const Mensajeria = await prisma.mensajeria.create({
     *   data: {
     *     // ... data to create a Mensajeria
     *   }
     * })
     * 
     */
    create<T extends mensajeriaCreateArgs>(args: SelectSubset<T, mensajeriaCreateArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajerias.
     * @param {mensajeriaCreateManyArgs} args - Arguments to create many Mensajerias.
     * @example
     * // Create many Mensajerias
     * const mensajeria = await prisma.mensajeria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mensajeriaCreateManyArgs>(args?: SelectSubset<T, mensajeriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajerias and returns the data saved in the database.
     * @param {mensajeriaCreateManyAndReturnArgs} args - Arguments to create many Mensajerias.
     * @example
     * // Create many Mensajerias
     * const mensajeria = await prisma.mensajeria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajerias and only return the `id`
     * const mensajeriaWithIdOnly = await prisma.mensajeria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mensajeriaCreateManyAndReturnArgs>(args?: SelectSubset<T, mensajeriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensajeria.
     * @param {mensajeriaDeleteArgs} args - Arguments to delete one Mensajeria.
     * @example
     * // Delete one Mensajeria
     * const Mensajeria = await prisma.mensajeria.delete({
     *   where: {
     *     // ... filter to delete one Mensajeria
     *   }
     * })
     * 
     */
    delete<T extends mensajeriaDeleteArgs>(args: SelectSubset<T, mensajeriaDeleteArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensajeria.
     * @param {mensajeriaUpdateArgs} args - Arguments to update one Mensajeria.
     * @example
     * // Update one Mensajeria
     * const mensajeria = await prisma.mensajeria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mensajeriaUpdateArgs>(args: SelectSubset<T, mensajeriaUpdateArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajerias.
     * @param {mensajeriaDeleteManyArgs} args - Arguments to filter Mensajerias to delete.
     * @example
     * // Delete a few Mensajerias
     * const { count } = await prisma.mensajeria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mensajeriaDeleteManyArgs>(args?: SelectSubset<T, mensajeriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajeriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajerias
     * const mensajeria = await prisma.mensajeria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mensajeriaUpdateManyArgs>(args: SelectSubset<T, mensajeriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajerias and returns the data updated in the database.
     * @param {mensajeriaUpdateManyAndReturnArgs} args - Arguments to update many Mensajerias.
     * @example
     * // Update many Mensajerias
     * const mensajeria = await prisma.mensajeria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajerias and only return the `id`
     * const mensajeriaWithIdOnly = await prisma.mensajeria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mensajeriaUpdateManyAndReturnArgs>(args: SelectSubset<T, mensajeriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensajeria.
     * @param {mensajeriaUpsertArgs} args - Arguments to update or create a Mensajeria.
     * @example
     * // Update or create a Mensajeria
     * const mensajeria = await prisma.mensajeria.upsert({
     *   create: {
     *     // ... data to create a Mensajeria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensajeria we want to update
     *   }
     * })
     */
    upsert<T extends mensajeriaUpsertArgs>(args: SelectSubset<T, mensajeriaUpsertArgs<ExtArgs>>): Prisma__mensajeriaClient<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajeriaCountArgs} args - Arguments to filter Mensajerias to count.
     * @example
     * // Count the number of Mensajerias
     * const count = await prisma.mensajeria.count({
     *   where: {
     *     // ... the filter for the Mensajerias we want to count
     *   }
     * })
    **/
    count<T extends mensajeriaCountArgs>(
      args?: Subset<T, mensajeriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensajeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensajeriaAggregateArgs>(args: Subset<T, MensajeriaAggregateArgs>): Prisma.PrismaPromise<GetMensajeriaAggregateType<T>>

    /**
     * Group by Mensajeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajeriaGroupByArgs} args - Group by arguments.
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
      T extends mensajeriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mensajeriaGroupByArgs['orderBy'] }
        : { orderBy?: mensajeriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mensajeriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mensajeria model
   */
  readonly fields: mensajeriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mensajeria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mensajeriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends datoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, datoDefaultArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mensajeria model
   */
  interface mensajeriaFieldRefs {
    readonly id: FieldRef<"mensajeria", 'Int'>
    readonly mensaje: FieldRef<"mensajeria", 'String'>
    readonly fechaRegistro: FieldRef<"mensajeria", 'DateTime'>
    readonly horaRegistro: FieldRef<"mensajeria", 'DateTime'>
    readonly id_usuario: FieldRef<"mensajeria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mensajeria findUnique
   */
  export type mensajeriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * Filter, which mensajeria to fetch.
     */
    where: mensajeriaWhereUniqueInput
  }

  /**
   * mensajeria findUniqueOrThrow
   */
  export type mensajeriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * Filter, which mensajeria to fetch.
     */
    where: mensajeriaWhereUniqueInput
  }

  /**
   * mensajeria findFirst
   */
  export type mensajeriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * Filter, which mensajeria to fetch.
     */
    where?: mensajeriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajerias to fetch.
     */
    orderBy?: mensajeriaOrderByWithRelationInput | mensajeriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajerias.
     */
    cursor?: mensajeriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajerias.
     */
    distinct?: MensajeriaScalarFieldEnum | MensajeriaScalarFieldEnum[]
  }

  /**
   * mensajeria findFirstOrThrow
   */
  export type mensajeriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * Filter, which mensajeria to fetch.
     */
    where?: mensajeriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajerias to fetch.
     */
    orderBy?: mensajeriaOrderByWithRelationInput | mensajeriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajerias.
     */
    cursor?: mensajeriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajerias.
     */
    distinct?: MensajeriaScalarFieldEnum | MensajeriaScalarFieldEnum[]
  }

  /**
   * mensajeria findMany
   */
  export type mensajeriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * Filter, which mensajerias to fetch.
     */
    where?: mensajeriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajerias to fetch.
     */
    orderBy?: mensajeriaOrderByWithRelationInput | mensajeriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mensajerias.
     */
    cursor?: mensajeriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajerias.
     */
    skip?: number
    distinct?: MensajeriaScalarFieldEnum | MensajeriaScalarFieldEnum[]
  }

  /**
   * mensajeria create
   */
  export type mensajeriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * The data needed to create a mensajeria.
     */
    data: XOR<mensajeriaCreateInput, mensajeriaUncheckedCreateInput>
  }

  /**
   * mensajeria createMany
   */
  export type mensajeriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mensajerias.
     */
    data: mensajeriaCreateManyInput | mensajeriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensajeria createManyAndReturn
   */
  export type mensajeriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * The data used to create many mensajerias.
     */
    data: mensajeriaCreateManyInput | mensajeriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mensajeria update
   */
  export type mensajeriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * The data needed to update a mensajeria.
     */
    data: XOR<mensajeriaUpdateInput, mensajeriaUncheckedUpdateInput>
    /**
     * Choose, which mensajeria to update.
     */
    where: mensajeriaWhereUniqueInput
  }

  /**
   * mensajeria updateMany
   */
  export type mensajeriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mensajerias.
     */
    data: XOR<mensajeriaUpdateManyMutationInput, mensajeriaUncheckedUpdateManyInput>
    /**
     * Filter which mensajerias to update
     */
    where?: mensajeriaWhereInput
    /**
     * Limit how many mensajerias to update.
     */
    limit?: number
  }

  /**
   * mensajeria updateManyAndReturn
   */
  export type mensajeriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * The data used to update mensajerias.
     */
    data: XOR<mensajeriaUpdateManyMutationInput, mensajeriaUncheckedUpdateManyInput>
    /**
     * Filter which mensajerias to update
     */
    where?: mensajeriaWhereInput
    /**
     * Limit how many mensajerias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mensajeria upsert
   */
  export type mensajeriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * The filter to search for the mensajeria to update in case it exists.
     */
    where: mensajeriaWhereUniqueInput
    /**
     * In case the mensajeria found by the `where` argument doesn't exist, create a new mensajeria with this data.
     */
    create: XOR<mensajeriaCreateInput, mensajeriaUncheckedCreateInput>
    /**
     * In case the mensajeria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mensajeriaUpdateInput, mensajeriaUncheckedUpdateInput>
  }

  /**
   * mensajeria delete
   */
  export type mensajeriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    /**
     * Filter which mensajeria to delete.
     */
    where: mensajeriaWhereUniqueInput
  }

  /**
   * mensajeria deleteMany
   */
  export type mensajeriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajerias to delete
     */
    where?: mensajeriaWhereInput
    /**
     * Limit how many mensajerias to delete.
     */
    limit?: number
  }

  /**
   * mensajeria without action
   */
  export type mensajeriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
  }


  /**
   * Model dato
   */

  export type AggregateDato = {
    _count: DatoCountAggregateOutputType | null
    _avg: DatoAvgAggregateOutputType | null
    _sum: DatoSumAggregateOutputType | null
    _min: DatoMinAggregateOutputType | null
    _max: DatoMaxAggregateOutputType | null
  }

  export type DatoAvgAggregateOutputType = {
    id: number | null
    edad: number | null
  }

  export type DatoSumAggregateOutputType = {
    id: number | null
    edad: number | null
  }

  export type DatoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    edad: number | null
  }

  export type DatoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    edad: number | null
  }

  export type DatoCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    edad: number
    _all: number
  }


  export type DatoAvgAggregateInputType = {
    id?: true
    edad?: true
  }

  export type DatoSumAggregateInputType = {
    id?: true
    edad?: true
  }

  export type DatoMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    edad?: true
  }

  export type DatoMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    edad?: true
  }

  export type DatoCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    edad?: true
    _all?: true
  }

  export type DatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dato to aggregate.
     */
    where?: datoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datoes to fetch.
     */
    orderBy?: datoOrderByWithRelationInput | datoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datoes
    **/
    _count?: true | DatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatoMaxAggregateInputType
  }

  export type GetDatoAggregateType<T extends DatoAggregateArgs> = {
        [P in keyof T & keyof AggregateDato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDato[P]>
      : GetScalarType<T[P], AggregateDato[P]>
  }




  export type datoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datoWhereInput
    orderBy?: datoOrderByWithAggregationInput | datoOrderByWithAggregationInput[]
    by: DatoScalarFieldEnum[] | DatoScalarFieldEnum
    having?: datoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatoCountAggregateInputType | true
    _avg?: DatoAvgAggregateInputType
    _sum?: DatoSumAggregateInputType
    _min?: DatoMinAggregateInputType
    _max?: DatoMaxAggregateInputType
  }

  export type DatoGroupByOutputType = {
    id: number
    nombre: string | null
    correo: string | null
    edad: number
    _count: DatoCountAggregateOutputType | null
    _avg: DatoAvgAggregateOutputType | null
    _sum: DatoSumAggregateOutputType | null
    _min: DatoMinAggregateOutputType | null
    _max: DatoMaxAggregateOutputType | null
  }

  type GetDatoGroupByPayload<T extends datoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatoGroupByOutputType[P]>
            : GetScalarType<T[P], DatoGroupByOutputType[P]>
        }
      >
    >


  export type datoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    edad?: boolean
    mensajerias?: boolean | dato$mensajeriasArgs<ExtArgs>
    _count?: boolean | DatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dato"]>

  export type datoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    edad?: boolean
  }, ExtArgs["result"]["dato"]>

  export type datoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    edad?: boolean
  }, ExtArgs["result"]["dato"]>

  export type datoSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    edad?: boolean
  }

  export type datoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "edad", ExtArgs["result"]["dato"]>
  export type datoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajerias?: boolean | dato$mensajeriasArgs<ExtArgs>
    _count?: boolean | DatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type datoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type datoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $datoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dato"
    objects: {
      mensajerias: Prisma.$mensajeriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      correo: string | null
      edad: number
    }, ExtArgs["result"]["dato"]>
    composites: {}
  }

  type datoGetPayload<S extends boolean | null | undefined | datoDefaultArgs> = $Result.GetResult<Prisma.$datoPayload, S>

  type datoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<datoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatoCountAggregateInputType | true
    }

  export interface datoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dato'], meta: { name: 'dato' } }
    /**
     * Find zero or one Dato that matches the filter.
     * @param {datoFindUniqueArgs} args - Arguments to find a Dato
     * @example
     * // Get one Dato
     * const dato = await prisma.dato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends datoFindUniqueArgs>(args: SelectSubset<T, datoFindUniqueArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {datoFindUniqueOrThrowArgs} args - Arguments to find a Dato
     * @example
     * // Get one Dato
     * const dato = await prisma.dato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends datoFindUniqueOrThrowArgs>(args: SelectSubset<T, datoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datoFindFirstArgs} args - Arguments to find a Dato
     * @example
     * // Get one Dato
     * const dato = await prisma.dato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends datoFindFirstArgs>(args?: SelectSubset<T, datoFindFirstArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datoFindFirstOrThrowArgs} args - Arguments to find a Dato
     * @example
     * // Get one Dato
     * const dato = await prisma.dato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends datoFindFirstOrThrowArgs>(args?: SelectSubset<T, datoFindFirstOrThrowArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datoes
     * const datoes = await prisma.dato.findMany()
     * 
     * // Get first 10 Datoes
     * const datoes = await prisma.dato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datoWithIdOnly = await prisma.dato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends datoFindManyArgs>(args?: SelectSubset<T, datoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dato.
     * @param {datoCreateArgs} args - Arguments to create a Dato.
     * @example
     * // Create one Dato
     * const Dato = await prisma.dato.create({
     *   data: {
     *     // ... data to create a Dato
     *   }
     * })
     * 
     */
    create<T extends datoCreateArgs>(args: SelectSubset<T, datoCreateArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datoes.
     * @param {datoCreateManyArgs} args - Arguments to create many Datoes.
     * @example
     * // Create many Datoes
     * const dato = await prisma.dato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends datoCreateManyArgs>(args?: SelectSubset<T, datoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datoes and returns the data saved in the database.
     * @param {datoCreateManyAndReturnArgs} args - Arguments to create many Datoes.
     * @example
     * // Create many Datoes
     * const dato = await prisma.dato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datoes and only return the `id`
     * const datoWithIdOnly = await prisma.dato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends datoCreateManyAndReturnArgs>(args?: SelectSubset<T, datoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dato.
     * @param {datoDeleteArgs} args - Arguments to delete one Dato.
     * @example
     * // Delete one Dato
     * const Dato = await prisma.dato.delete({
     *   where: {
     *     // ... filter to delete one Dato
     *   }
     * })
     * 
     */
    delete<T extends datoDeleteArgs>(args: SelectSubset<T, datoDeleteArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dato.
     * @param {datoUpdateArgs} args - Arguments to update one Dato.
     * @example
     * // Update one Dato
     * const dato = await prisma.dato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends datoUpdateArgs>(args: SelectSubset<T, datoUpdateArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datoes.
     * @param {datoDeleteManyArgs} args - Arguments to filter Datoes to delete.
     * @example
     * // Delete a few Datoes
     * const { count } = await prisma.dato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends datoDeleteManyArgs>(args?: SelectSubset<T, datoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datoes
     * const dato = await prisma.dato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends datoUpdateManyArgs>(args: SelectSubset<T, datoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datoes and returns the data updated in the database.
     * @param {datoUpdateManyAndReturnArgs} args - Arguments to update many Datoes.
     * @example
     * // Update many Datoes
     * const dato = await prisma.dato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datoes and only return the `id`
     * const datoWithIdOnly = await prisma.dato.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends datoUpdateManyAndReturnArgs>(args: SelectSubset<T, datoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dato.
     * @param {datoUpsertArgs} args - Arguments to update or create a Dato.
     * @example
     * // Update or create a Dato
     * const dato = await prisma.dato.upsert({
     *   create: {
     *     // ... data to create a Dato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dato we want to update
     *   }
     * })
     */
    upsert<T extends datoUpsertArgs>(args: SelectSubset<T, datoUpsertArgs<ExtArgs>>): Prisma__datoClient<$Result.GetResult<Prisma.$datoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datoCountArgs} args - Arguments to filter Datoes to count.
     * @example
     * // Count the number of Datoes
     * const count = await prisma.dato.count({
     *   where: {
     *     // ... the filter for the Datoes we want to count
     *   }
     * })
    **/
    count<T extends datoCountArgs>(
      args?: Subset<T, datoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatoAggregateArgs>(args: Subset<T, DatoAggregateArgs>): Prisma.PrismaPromise<GetDatoAggregateType<T>>

    /**
     * Group by Dato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datoGroupByArgs} args - Group by arguments.
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
      T extends datoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: datoGroupByArgs['orderBy'] }
        : { orderBy?: datoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, datoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dato model
   */
  readonly fields: datoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__datoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mensajerias<T extends dato$mensajeriasArgs<ExtArgs> = {}>(args?: Subset<T, dato$mensajeriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajeriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the dato model
   */
  interface datoFieldRefs {
    readonly id: FieldRef<"dato", 'Int'>
    readonly nombre: FieldRef<"dato", 'String'>
    readonly correo: FieldRef<"dato", 'String'>
    readonly edad: FieldRef<"dato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * dato findUnique
   */
  export type datoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * Filter, which dato to fetch.
     */
    where: datoWhereUniqueInput
  }

  /**
   * dato findUniqueOrThrow
   */
  export type datoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * Filter, which dato to fetch.
     */
    where: datoWhereUniqueInput
  }

  /**
   * dato findFirst
   */
  export type datoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * Filter, which dato to fetch.
     */
    where?: datoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datoes to fetch.
     */
    orderBy?: datoOrderByWithRelationInput | datoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datoes.
     */
    cursor?: datoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datoes.
     */
    distinct?: DatoScalarFieldEnum | DatoScalarFieldEnum[]
  }

  /**
   * dato findFirstOrThrow
   */
  export type datoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * Filter, which dato to fetch.
     */
    where?: datoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datoes to fetch.
     */
    orderBy?: datoOrderByWithRelationInput | datoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datoes.
     */
    cursor?: datoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datoes.
     */
    distinct?: DatoScalarFieldEnum | DatoScalarFieldEnum[]
  }

  /**
   * dato findMany
   */
  export type datoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * Filter, which datoes to fetch.
     */
    where?: datoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datoes to fetch.
     */
    orderBy?: datoOrderByWithRelationInput | datoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datoes.
     */
    cursor?: datoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datoes.
     */
    skip?: number
    distinct?: DatoScalarFieldEnum | DatoScalarFieldEnum[]
  }

  /**
   * dato create
   */
  export type datoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * The data needed to create a dato.
     */
    data: XOR<datoCreateInput, datoUncheckedCreateInput>
  }

  /**
   * dato createMany
   */
  export type datoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many datoes.
     */
    data: datoCreateManyInput | datoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dato createManyAndReturn
   */
  export type datoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * The data used to create many datoes.
     */
    data: datoCreateManyInput | datoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dato update
   */
  export type datoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * The data needed to update a dato.
     */
    data: XOR<datoUpdateInput, datoUncheckedUpdateInput>
    /**
     * Choose, which dato to update.
     */
    where: datoWhereUniqueInput
  }

  /**
   * dato updateMany
   */
  export type datoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update datoes.
     */
    data: XOR<datoUpdateManyMutationInput, datoUncheckedUpdateManyInput>
    /**
     * Filter which datoes to update
     */
    where?: datoWhereInput
    /**
     * Limit how many datoes to update.
     */
    limit?: number
  }

  /**
   * dato updateManyAndReturn
   */
  export type datoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * The data used to update datoes.
     */
    data: XOR<datoUpdateManyMutationInput, datoUncheckedUpdateManyInput>
    /**
     * Filter which datoes to update
     */
    where?: datoWhereInput
    /**
     * Limit how many datoes to update.
     */
    limit?: number
  }

  /**
   * dato upsert
   */
  export type datoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * The filter to search for the dato to update in case it exists.
     */
    where: datoWhereUniqueInput
    /**
     * In case the dato found by the `where` argument doesn't exist, create a new dato with this data.
     */
    create: XOR<datoCreateInput, datoUncheckedCreateInput>
    /**
     * In case the dato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datoUpdateInput, datoUncheckedUpdateInput>
  }

  /**
   * dato delete
   */
  export type datoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
    /**
     * Filter which dato to delete.
     */
    where: datoWhereUniqueInput
  }

  /**
   * dato deleteMany
   */
  export type datoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datoes to delete
     */
    where?: datoWhereInput
    /**
     * Limit how many datoes to delete.
     */
    limit?: number
  }

  /**
   * dato.mensajerias
   */
  export type dato$mensajeriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajeria
     */
    select?: mensajeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajeria
     */
    omit?: mensajeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajeriaInclude<ExtArgs> | null
    where?: mensajeriaWhereInput
    orderBy?: mensajeriaOrderByWithRelationInput | mensajeriaOrderByWithRelationInput[]
    cursor?: mensajeriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeriaScalarFieldEnum | MensajeriaScalarFieldEnum[]
  }

  /**
   * dato without action
   */
  export type datoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dato
     */
    select?: datoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dato
     */
    omit?: datoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: datoInclude<ExtArgs> | null
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


  export const EstadoScalarFieldEnum: {
    id: 'id',
    servicio: 'servicio',
    version: 'version',
    entorno: 'entorno',
    estado: 'estado',
    fecha: 'fecha',
    hora: 'hora'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const MensajeriaScalarFieldEnum: {
    id: 'id',
    mensaje: 'mensaje',
    fechaRegistro: 'fechaRegistro',
    horaRegistro: 'horaRegistro',
    id_usuario: 'id_usuario'
  };

  export type MensajeriaScalarFieldEnum = (typeof MensajeriaScalarFieldEnum)[keyof typeof MensajeriaScalarFieldEnum]


  export const DatoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    edad: 'edad'
  };

  export type DatoScalarFieldEnum = (typeof DatoScalarFieldEnum)[keyof typeof DatoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type estadoWhereInput = {
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    id?: IntFilter<"estado"> | number
    servicio?: StringNullableFilter<"estado"> | string | null
    version?: StringNullableFilter<"estado"> | string | null
    entorno?: StringNullableFilter<"estado"> | string | null
    estado?: StringNullableFilter<"estado"> | string | null
    fecha?: DateTimeFilter<"estado"> | Date | string
    hora?: IntFilter<"estado"> | number
  }

  export type estadoOrderByWithRelationInput = {
    id?: SortOrder
    servicio?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    entorno?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrder
  }

  export type estadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    servicio?: StringNullableFilter<"estado"> | string | null
    version?: StringNullableFilter<"estado"> | string | null
    entorno?: StringNullableFilter<"estado"> | string | null
    estado?: StringNullableFilter<"estado"> | string | null
    fecha?: DateTimeFilter<"estado"> | Date | string
    hora?: IntFilter<"estado"> | number
  }, "id">

  export type estadoOrderByWithAggregationInput = {
    id?: SortOrder
    servicio?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    entorno?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    _count?: estadoCountOrderByAggregateInput
    _avg?: estadoAvgOrderByAggregateInput
    _max?: estadoMaxOrderByAggregateInput
    _min?: estadoMinOrderByAggregateInput
    _sum?: estadoSumOrderByAggregateInput
  }

  export type estadoScalarWhereWithAggregatesInput = {
    AND?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    OR?: estadoScalarWhereWithAggregatesInput[]
    NOT?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estado"> | number
    servicio?: StringNullableWithAggregatesFilter<"estado"> | string | null
    version?: StringNullableWithAggregatesFilter<"estado"> | string | null
    entorno?: StringNullableWithAggregatesFilter<"estado"> | string | null
    estado?: StringNullableWithAggregatesFilter<"estado"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"estado"> | Date | string
    hora?: IntWithAggregatesFilter<"estado"> | number
  }

  export type mensajeriaWhereInput = {
    AND?: mensajeriaWhereInput | mensajeriaWhereInput[]
    OR?: mensajeriaWhereInput[]
    NOT?: mensajeriaWhereInput | mensajeriaWhereInput[]
    id?: IntFilter<"mensajeria"> | number
    mensaje?: StringNullableFilter<"mensajeria"> | string | null
    fechaRegistro?: DateTimeFilter<"mensajeria"> | Date | string
    horaRegistro?: DateTimeFilter<"mensajeria"> | Date | string
    id_usuario?: IntFilter<"mensajeria"> | number
    usuario?: XOR<DatoScalarRelationFilter, datoWhereInput>
  }

  export type mensajeriaOrderByWithRelationInput = {
    id?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    fechaRegistro?: SortOrder
    horaRegistro?: SortOrder
    id_usuario?: SortOrder
    usuario?: datoOrderByWithRelationInput
  }

  export type mensajeriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mensajeriaWhereInput | mensajeriaWhereInput[]
    OR?: mensajeriaWhereInput[]
    NOT?: mensajeriaWhereInput | mensajeriaWhereInput[]
    mensaje?: StringNullableFilter<"mensajeria"> | string | null
    fechaRegistro?: DateTimeFilter<"mensajeria"> | Date | string
    horaRegistro?: DateTimeFilter<"mensajeria"> | Date | string
    id_usuario?: IntFilter<"mensajeria"> | number
    usuario?: XOR<DatoScalarRelationFilter, datoWhereInput>
  }, "id">

  export type mensajeriaOrderByWithAggregationInput = {
    id?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    fechaRegistro?: SortOrder
    horaRegistro?: SortOrder
    id_usuario?: SortOrder
    _count?: mensajeriaCountOrderByAggregateInput
    _avg?: mensajeriaAvgOrderByAggregateInput
    _max?: mensajeriaMaxOrderByAggregateInput
    _min?: mensajeriaMinOrderByAggregateInput
    _sum?: mensajeriaSumOrderByAggregateInput
  }

  export type mensajeriaScalarWhereWithAggregatesInput = {
    AND?: mensajeriaScalarWhereWithAggregatesInput | mensajeriaScalarWhereWithAggregatesInput[]
    OR?: mensajeriaScalarWhereWithAggregatesInput[]
    NOT?: mensajeriaScalarWhereWithAggregatesInput | mensajeriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mensajeria"> | number
    mensaje?: StringNullableWithAggregatesFilter<"mensajeria"> | string | null
    fechaRegistro?: DateTimeWithAggregatesFilter<"mensajeria"> | Date | string
    horaRegistro?: DateTimeWithAggregatesFilter<"mensajeria"> | Date | string
    id_usuario?: IntWithAggregatesFilter<"mensajeria"> | number
  }

  export type datoWhereInput = {
    AND?: datoWhereInput | datoWhereInput[]
    OR?: datoWhereInput[]
    NOT?: datoWhereInput | datoWhereInput[]
    id?: IntFilter<"dato"> | number
    nombre?: StringNullableFilter<"dato"> | string | null
    correo?: StringNullableFilter<"dato"> | string | null
    edad?: IntFilter<"dato"> | number
    mensajerias?: MensajeriaListRelationFilter
  }

  export type datoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    edad?: SortOrder
    mensajerias?: mensajeriaOrderByRelationAggregateInput
  }

  export type datoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: datoWhereInput | datoWhereInput[]
    OR?: datoWhereInput[]
    NOT?: datoWhereInput | datoWhereInput[]
    nombre?: StringNullableFilter<"dato"> | string | null
    correo?: StringNullableFilter<"dato"> | string | null
    edad?: IntFilter<"dato"> | number
    mensajerias?: MensajeriaListRelationFilter
  }, "id">

  export type datoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    edad?: SortOrder
    _count?: datoCountOrderByAggregateInput
    _avg?: datoAvgOrderByAggregateInput
    _max?: datoMaxOrderByAggregateInput
    _min?: datoMinOrderByAggregateInput
    _sum?: datoSumOrderByAggregateInput
  }

  export type datoScalarWhereWithAggregatesInput = {
    AND?: datoScalarWhereWithAggregatesInput | datoScalarWhereWithAggregatesInput[]
    OR?: datoScalarWhereWithAggregatesInput[]
    NOT?: datoScalarWhereWithAggregatesInput | datoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dato"> | number
    nombre?: StringNullableWithAggregatesFilter<"dato"> | string | null
    correo?: StringNullableWithAggregatesFilter<"dato"> | string | null
    edad?: IntWithAggregatesFilter<"dato"> | number
  }

  export type estadoCreateInput = {
    servicio?: string | null
    version?: string | null
    entorno?: string | null
    estado?: string | null
    fecha: Date | string
    hora: number
  }

  export type estadoUncheckedCreateInput = {
    id?: number
    servicio?: string | null
    version?: string | null
    entorno?: string | null
    estado?: string | null
    fecha: Date | string
    hora: number
  }

  export type estadoUpdateInput = {
    servicio?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    entorno?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type estadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicio?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    entorno?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type estadoCreateManyInput = {
    id?: number
    servicio?: string | null
    version?: string | null
    entorno?: string | null
    estado?: string | null
    fecha: Date | string
    hora: number
  }

  export type estadoUpdateManyMutationInput = {
    servicio?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    entorno?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type estadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicio?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    entorno?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type mensajeriaCreateInput = {
    mensaje?: string | null
    fechaRegistro: Date | string
    horaRegistro: Date | string
    usuario: datoCreateNestedOneWithoutMensajeriasInput
  }

  export type mensajeriaUncheckedCreateInput = {
    id?: number
    mensaje?: string | null
    fechaRegistro: Date | string
    horaRegistro: Date | string
    id_usuario: number
  }

  export type mensajeriaUpdateInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: datoUpdateOneRequiredWithoutMensajeriasNestedInput
  }

  export type mensajeriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type mensajeriaCreateManyInput = {
    id?: number
    mensaje?: string | null
    fechaRegistro: Date | string
    horaRegistro: Date | string
    id_usuario: number
  }

  export type mensajeriaUpdateManyMutationInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mensajeriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type datoCreateInput = {
    nombre?: string | null
    correo?: string | null
    edad: number
    mensajerias?: mensajeriaCreateNestedManyWithoutUsuarioInput
  }

  export type datoUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    correo?: string | null
    edad: number
    mensajerias?: mensajeriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type datoUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: IntFieldUpdateOperationsInput | number
    mensajerias?: mensajeriaUpdateManyWithoutUsuarioNestedInput
  }

  export type datoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: IntFieldUpdateOperationsInput | number
    mensajerias?: mensajeriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type datoCreateManyInput = {
    id?: number
    nombre?: string | null
    correo?: string | null
    edad: number
  }

  export type datoUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: IntFieldUpdateOperationsInput | number
  }

  export type datoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type estadoCountOrderByAggregateInput = {
    id?: SortOrder
    servicio?: SortOrder
    version?: SortOrder
    entorno?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
  }

  export type estadoAvgOrderByAggregateInput = {
    id?: SortOrder
    hora?: SortOrder
  }

  export type estadoMaxOrderByAggregateInput = {
    id?: SortOrder
    servicio?: SortOrder
    version?: SortOrder
    entorno?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
  }

  export type estadoMinOrderByAggregateInput = {
    id?: SortOrder
    servicio?: SortOrder
    version?: SortOrder
    entorno?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
  }

  export type estadoSumOrderByAggregateInput = {
    id?: SortOrder
    hora?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DatoScalarRelationFilter = {
    is?: datoWhereInput
    isNot?: datoWhereInput
  }

  export type mensajeriaCountOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    fechaRegistro?: SortOrder
    horaRegistro?: SortOrder
    id_usuario?: SortOrder
  }

  export type mensajeriaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type mensajeriaMaxOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    fechaRegistro?: SortOrder
    horaRegistro?: SortOrder
    id_usuario?: SortOrder
  }

  export type mensajeriaMinOrderByAggregateInput = {
    id?: SortOrder
    mensaje?: SortOrder
    fechaRegistro?: SortOrder
    horaRegistro?: SortOrder
    id_usuario?: SortOrder
  }

  export type mensajeriaSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type MensajeriaListRelationFilter = {
    every?: mensajeriaWhereInput
    some?: mensajeriaWhereInput
    none?: mensajeriaWhereInput
  }

  export type mensajeriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type datoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    edad?: SortOrder
  }

  export type datoAvgOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
  }

  export type datoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    edad?: SortOrder
  }

  export type datoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    edad?: SortOrder
  }

  export type datoSumOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
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

  export type datoCreateNestedOneWithoutMensajeriasInput = {
    create?: XOR<datoCreateWithoutMensajeriasInput, datoUncheckedCreateWithoutMensajeriasInput>
    connectOrCreate?: datoCreateOrConnectWithoutMensajeriasInput
    connect?: datoWhereUniqueInput
  }

  export type datoUpdateOneRequiredWithoutMensajeriasNestedInput = {
    create?: XOR<datoCreateWithoutMensajeriasInput, datoUncheckedCreateWithoutMensajeriasInput>
    connectOrCreate?: datoCreateOrConnectWithoutMensajeriasInput
    upsert?: datoUpsertWithoutMensajeriasInput
    connect?: datoWhereUniqueInput
    update?: XOR<XOR<datoUpdateToOneWithWhereWithoutMensajeriasInput, datoUpdateWithoutMensajeriasInput>, datoUncheckedUpdateWithoutMensajeriasInput>
  }

  export type mensajeriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<mensajeriaCreateWithoutUsuarioInput, mensajeriaUncheckedCreateWithoutUsuarioInput> | mensajeriaCreateWithoutUsuarioInput[] | mensajeriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mensajeriaCreateOrConnectWithoutUsuarioInput | mensajeriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: mensajeriaCreateManyUsuarioInputEnvelope
    connect?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
  }

  export type mensajeriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<mensajeriaCreateWithoutUsuarioInput, mensajeriaUncheckedCreateWithoutUsuarioInput> | mensajeriaCreateWithoutUsuarioInput[] | mensajeriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mensajeriaCreateOrConnectWithoutUsuarioInput | mensajeriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: mensajeriaCreateManyUsuarioInputEnvelope
    connect?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
  }

  export type mensajeriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<mensajeriaCreateWithoutUsuarioInput, mensajeriaUncheckedCreateWithoutUsuarioInput> | mensajeriaCreateWithoutUsuarioInput[] | mensajeriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mensajeriaCreateOrConnectWithoutUsuarioInput | mensajeriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: mensajeriaUpsertWithWhereUniqueWithoutUsuarioInput | mensajeriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: mensajeriaCreateManyUsuarioInputEnvelope
    set?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    disconnect?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    delete?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    connect?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    update?: mensajeriaUpdateWithWhereUniqueWithoutUsuarioInput | mensajeriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: mensajeriaUpdateManyWithWhereWithoutUsuarioInput | mensajeriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: mensajeriaScalarWhereInput | mensajeriaScalarWhereInput[]
  }

  export type mensajeriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<mensajeriaCreateWithoutUsuarioInput, mensajeriaUncheckedCreateWithoutUsuarioInput> | mensajeriaCreateWithoutUsuarioInput[] | mensajeriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: mensajeriaCreateOrConnectWithoutUsuarioInput | mensajeriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: mensajeriaUpsertWithWhereUniqueWithoutUsuarioInput | mensajeriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: mensajeriaCreateManyUsuarioInputEnvelope
    set?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    disconnect?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    delete?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    connect?: mensajeriaWhereUniqueInput | mensajeriaWhereUniqueInput[]
    update?: mensajeriaUpdateWithWhereUniqueWithoutUsuarioInput | mensajeriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: mensajeriaUpdateManyWithWhereWithoutUsuarioInput | mensajeriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: mensajeriaScalarWhereInput | mensajeriaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type datoCreateWithoutMensajeriasInput = {
    nombre?: string | null
    correo?: string | null
    edad: number
  }

  export type datoUncheckedCreateWithoutMensajeriasInput = {
    id?: number
    nombre?: string | null
    correo?: string | null
    edad: number
  }

  export type datoCreateOrConnectWithoutMensajeriasInput = {
    where: datoWhereUniqueInput
    create: XOR<datoCreateWithoutMensajeriasInput, datoUncheckedCreateWithoutMensajeriasInput>
  }

  export type datoUpsertWithoutMensajeriasInput = {
    update: XOR<datoUpdateWithoutMensajeriasInput, datoUncheckedUpdateWithoutMensajeriasInput>
    create: XOR<datoCreateWithoutMensajeriasInput, datoUncheckedCreateWithoutMensajeriasInput>
    where?: datoWhereInput
  }

  export type datoUpdateToOneWithWhereWithoutMensajeriasInput = {
    where?: datoWhereInput
    data: XOR<datoUpdateWithoutMensajeriasInput, datoUncheckedUpdateWithoutMensajeriasInput>
  }

  export type datoUpdateWithoutMensajeriasInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: IntFieldUpdateOperationsInput | number
  }

  export type datoUncheckedUpdateWithoutMensajeriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: IntFieldUpdateOperationsInput | number
  }

  export type mensajeriaCreateWithoutUsuarioInput = {
    mensaje?: string | null
    fechaRegistro: Date | string
    horaRegistro: Date | string
  }

  export type mensajeriaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    mensaje?: string | null
    fechaRegistro: Date | string
    horaRegistro: Date | string
  }

  export type mensajeriaCreateOrConnectWithoutUsuarioInput = {
    where: mensajeriaWhereUniqueInput
    create: XOR<mensajeriaCreateWithoutUsuarioInput, mensajeriaUncheckedCreateWithoutUsuarioInput>
  }

  export type mensajeriaCreateManyUsuarioInputEnvelope = {
    data: mensajeriaCreateManyUsuarioInput | mensajeriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type mensajeriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: mensajeriaWhereUniqueInput
    update: XOR<mensajeriaUpdateWithoutUsuarioInput, mensajeriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<mensajeriaCreateWithoutUsuarioInput, mensajeriaUncheckedCreateWithoutUsuarioInput>
  }

  export type mensajeriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: mensajeriaWhereUniqueInput
    data: XOR<mensajeriaUpdateWithoutUsuarioInput, mensajeriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type mensajeriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: mensajeriaScalarWhereInput
    data: XOR<mensajeriaUpdateManyMutationInput, mensajeriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type mensajeriaScalarWhereInput = {
    AND?: mensajeriaScalarWhereInput | mensajeriaScalarWhereInput[]
    OR?: mensajeriaScalarWhereInput[]
    NOT?: mensajeriaScalarWhereInput | mensajeriaScalarWhereInput[]
    id?: IntFilter<"mensajeria"> | number
    mensaje?: StringNullableFilter<"mensajeria"> | string | null
    fechaRegistro?: DateTimeFilter<"mensajeria"> | Date | string
    horaRegistro?: DateTimeFilter<"mensajeria"> | Date | string
    id_usuario?: IntFilter<"mensajeria"> | number
  }

  export type mensajeriaCreateManyUsuarioInput = {
    id?: number
    mensaje?: string | null
    fechaRegistro: Date | string
    horaRegistro: Date | string
  }

  export type mensajeriaUpdateWithoutUsuarioInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mensajeriaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mensajeriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    horaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
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