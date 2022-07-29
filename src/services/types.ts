import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "album" */
export type Album = {
  artist: Scalars['Int'];
  /** An object relationship */
  artistByArtist: Artist;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  profile: Scalars['Int'];
  /** An array relationship */
  reviews: Array<Review>;
  /** An aggregate relationship */
  reviews_aggregate: ReviewAggregate;
  sid: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  visits: Array<Visit>;
  /** An aggregate relationship */
  visits_aggregate: VisitAggregate;
  year: Scalars['Int'];
};


/** columns and relationships of "album" */
export type AlbumReviewsArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


/** columns and relationships of "album" */
export type AlbumReviewsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


/** columns and relationships of "album" */
export type AlbumVisitsArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};


/** columns and relationships of "album" */
export type AlbumVisitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};

/** aggregated selection of "album" */
export type AlbumAggregate = {
  aggregate?: Maybe<AlbumAggregateFields>;
  nodes: Array<Album>;
};

/** aggregate fields of "album" */
export type AlbumAggregateFields = {
  avg?: Maybe<AlbumAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AlbumMaxFields>;
  min?: Maybe<AlbumMinFields>;
  stddev?: Maybe<AlbumStddevFields>;
  stddev_pop?: Maybe<AlbumStddevPopFields>;
  stddev_samp?: Maybe<AlbumStddevSampFields>;
  sum?: Maybe<AlbumSumFields>;
  var_pop?: Maybe<AlbumVarPopFields>;
  var_samp?: Maybe<AlbumVarSampFields>;
  variance?: Maybe<AlbumVarianceFields>;
};


/** aggregate fields of "album" */
export type AlbumAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AlbumSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "album" */
export type AlbumAggregateOrderBy = {
  avg?: InputMaybe<AlbumAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AlbumMaxOrderBy>;
  min?: InputMaybe<AlbumMinOrderBy>;
  stddev?: InputMaybe<AlbumStddevOrderBy>;
  stddev_pop?: InputMaybe<AlbumStddevPopOrderBy>;
  stddev_samp?: InputMaybe<AlbumStddevSampOrderBy>;
  sum?: InputMaybe<AlbumSumOrderBy>;
  var_pop?: InputMaybe<AlbumVarPopOrderBy>;
  var_samp?: InputMaybe<AlbumVarSampOrderBy>;
  variance?: InputMaybe<AlbumVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "album" */
export type AlbumArrRelInsertInput = {
  data: Array<AlbumInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AlbumOnConflict>;
};

/** aggregate avg on columns */
export type AlbumAvgFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "album" */
export type AlbumAvgOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "album". All fields are combined with a logical 'AND'. */
export type AlbumBoolExp = {
  _and?: InputMaybe<Array<AlbumBoolExp>>;
  _not?: InputMaybe<AlbumBoolExp>;
  _or?: InputMaybe<Array<AlbumBoolExp>>;
  artist?: InputMaybe<IntComparisonExp>;
  artistByArtist?: InputMaybe<ArtistBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  profile?: InputMaybe<IntComparisonExp>;
  reviews?: InputMaybe<ReviewBoolExp>;
  sid?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
  visits?: InputMaybe<VisitBoolExp>;
  year?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "album" */
export enum AlbumConstraint {
  /** unique or primary key constraint on columns "id" */
  AlbumPkey = 'album_pkey'
}

/** input type for incrementing numeric columns in table "album" */
export type AlbumIncInput = {
  artist?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "album" */
export type AlbumInsertInput = {
  artist?: InputMaybe<Scalars['Int']>;
  artistByArtist?: InputMaybe<ArtistObjRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewArrRelInsertInput>;
  sid?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  visits?: InputMaybe<VisitArrRelInsertInput>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type AlbumMaxFields = {
  artist?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "album" */
export type AlbumMaxOrderBy = {
  artist?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  sid?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AlbumMinFields = {
  artist?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "album" */
export type AlbumMinOrderBy = {
  artist?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  sid?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "album" */
export type AlbumMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Album>;
};

/** input type for inserting object relation for remote table "album" */
export type AlbumObjRelInsertInput = {
  data: AlbumInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AlbumOnConflict>;
};

/** on_conflict condition type for table "album" */
export type AlbumOnConflict = {
  constraint: AlbumConstraint;
  update_columns?: Array<AlbumUpdateColumn>;
  where?: InputMaybe<AlbumBoolExp>;
};

/** Ordering options when selecting data from "album". */
export type AlbumOrderBy = {
  artist?: InputMaybe<OrderBy>;
  artistByArtist?: InputMaybe<ArtistOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  reviews_aggregate?: InputMaybe<ReviewAggregateOrderBy>;
  sid?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  visits_aggregate?: InputMaybe<VisitAggregateOrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: album */
export type AlbumPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "album" */
export enum AlbumSelectColumn {
  /** column name */
  Artist = 'artist',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile = 'profile',
  /** column name */
  Sid = 'sid',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "album" */
export type AlbumSetInput = {
  artist?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  sid?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type AlbumStddevFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "album" */
export type AlbumStddevOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type AlbumStddevPopFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "album" */
export type AlbumStddevPopOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type AlbumStddevSampFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "album" */
export type AlbumStddevSampOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type AlbumSumFields = {
  artist?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "album" */
export type AlbumSumOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** update columns of table "album" */
export enum AlbumUpdateColumn {
  /** column name */
  Artist = 'artist',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile = 'profile',
  /** column name */
  Sid = 'sid',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type AlbumVarPopFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "album" */
export type AlbumVarPopOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type AlbumVarSampFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "album" */
export type AlbumVarSampOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AlbumVarianceFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "album" */
export type AlbumVarianceOrderBy = {
  artist?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** columns and relationships of "artist" */
export type Artist = {
  /** An array relationship */
  albums: Array<Album>;
  /** An aggregate relationship */
  albums_aggregate: AlbumAggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  profile: Scalars['Int'];
  sid?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "artist" */
export type ArtistAlbumsArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


/** columns and relationships of "artist" */
export type ArtistAlbumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};

/** aggregated selection of "artist" */
export type ArtistAggregate = {
  aggregate?: Maybe<ArtistAggregateFields>;
  nodes: Array<Artist>;
};

/** aggregate fields of "artist" */
export type ArtistAggregateFields = {
  avg?: Maybe<ArtistAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ArtistMaxFields>;
  min?: Maybe<ArtistMinFields>;
  stddev?: Maybe<ArtistStddevFields>;
  stddev_pop?: Maybe<ArtistStddevPopFields>;
  stddev_samp?: Maybe<ArtistStddevSampFields>;
  sum?: Maybe<ArtistSumFields>;
  var_pop?: Maybe<ArtistVarPopFields>;
  var_samp?: Maybe<ArtistVarSampFields>;
  variance?: Maybe<ArtistVarianceFields>;
};


/** aggregate fields of "artist" */
export type ArtistAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ArtistSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ArtistAvgFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "artist". All fields are combined with a logical 'AND'. */
export type ArtistBoolExp = {
  _and?: InputMaybe<Array<ArtistBoolExp>>;
  _not?: InputMaybe<ArtistBoolExp>;
  _or?: InputMaybe<Array<ArtistBoolExp>>;
  albums?: InputMaybe<AlbumBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  profile?: InputMaybe<IntComparisonExp>;
  sid?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "artist" */
export enum ArtistConstraint {
  /** unique or primary key constraint on columns "id" */
  ArtistPkey = 'artist_pkey'
}

/** input type for incrementing numeric columns in table "artist" */
export type ArtistIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "artist" */
export type ArtistInsertInput = {
  albums?: InputMaybe<AlbumArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['Int']>;
  sid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ArtistMaxFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type ArtistMinFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "artist" */
export type ArtistMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Artist>;
};

/** input type for inserting object relation for remote table "artist" */
export type ArtistObjRelInsertInput = {
  data: ArtistInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ArtistOnConflict>;
};

/** on_conflict condition type for table "artist" */
export type ArtistOnConflict = {
  constraint: ArtistConstraint;
  update_columns?: Array<ArtistUpdateColumn>;
  where?: InputMaybe<ArtistBoolExp>;
};

/** Ordering options when selecting data from "artist". */
export type ArtistOrderBy = {
  albums_aggregate?: InputMaybe<AlbumAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  sid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: artist */
export type ArtistPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "artist" */
export enum ArtistSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Profile = 'profile',
  /** column name */
  Sid = 'sid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "artist" */
export type ArtistSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['Int']>;
  sid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type ArtistStddevFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ArtistStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ArtistStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type ArtistSumFields = {
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
};

/** update columns of table "artist" */
export enum ArtistUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Profile = 'profile',
  /** column name */
  Sid = 'sid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type ArtistVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ArtistVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ArtistVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequestsAggregate = {
  aggregate?: Maybe<AuthProviderRequestsAggregateFields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequestsMaxFields>;
  min?: Maybe<AuthProviderRequestsMinFields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsAppendInput = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequestsBoolExp = {
  _and?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  _not?: InputMaybe<AuthProviderRequestsBoolExp>;
  _or?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  options?: InputMaybe<JsonbComparisonExp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequestsDeleteAtPathInput = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequestsDeleteElemInput = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequestsDeleteKeyInput = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequestsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequestsMaxFields = {
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequestsMinFields = {
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequestsMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequestsOnConflict = {
  constraint: AuthProviderRequestsConstraint;
  update_columns?: Array<AuthProviderRequestsUpdateColumn>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequestsOrderBy = {
  id?: InputMaybe<OrderBy>;
  options?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsPrependInput = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequestsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequestsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequestsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<AuthProvidersMaxFields>;
  min?: Maybe<AuthProvidersMinFields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthProvidersBoolExp>>;
  _not?: InputMaybe<AuthProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthProvidersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  id?: InputMaybe<OrderBy>;
  userProviders_aggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: authProviders */
export type AuthProvidersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
  /** column name */
  Id = 'id'
}

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregate = {
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokensMaxFields>;
  min?: Maybe<AuthRefreshTokensMinFields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthRefreshTokensMaxOrderBy>;
  min?: InputMaybe<AuthRefreshTokensMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokensArrRelInsertInput = {
  data: Array<AuthRefreshTokensInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: InputMaybe<AuthRefreshTokensBoolExp>;
  _or?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  refreshToken?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokensPkColumnsInput = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokensSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRolesAggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: UsersAggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<AuthRolesMaxFields>;
  min?: Maybe<AuthRolesMinFields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRolesBoolExp = {
  _and?: InputMaybe<Array<AuthRolesBoolExp>>;
  _not?: InputMaybe<AuthRolesBoolExp>;
  _or?: InputMaybe<Array<AuthRolesBoolExp>>;
  role?: InputMaybe<StringComparisonExp>;
  userRoles?: InputMaybe<AuthUserRolesBoolExp>;
  usersByDefaultRole?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  usersByDefaultRole?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  role?: InputMaybe<OrderBy>;
  userRoles_aggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  usersByDefaultRole_aggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: authRoles */
export type AuthRolesPkColumnsInput = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRolesSelectColumn {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRolesSetInput = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRolesUpdateColumn {
  /** column name */
  Role = 'role'
}

/** User webauthn authenticators. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserAuthenticators = {
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregate = {
  aggregate?: Maybe<AuthUserAuthenticatorsAggregateFields>;
  nodes: Array<AuthUserAuthenticators>;
};

/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateFields = {
  avg?: Maybe<AuthUserAuthenticatorsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserAuthenticatorsMaxFields>;
  min?: Maybe<AuthUserAuthenticatorsMinFields>;
  stddev?: Maybe<AuthUserAuthenticatorsStddevFields>;
  stddev_pop?: Maybe<AuthUserAuthenticatorsStddevPopFields>;
  stddev_samp?: Maybe<AuthUserAuthenticatorsStddevSampFields>;
  sum?: Maybe<AuthUserAuthenticatorsSumFields>;
  var_pop?: Maybe<AuthUserAuthenticatorsVarPopFields>;
  var_samp?: Maybe<AuthUserAuthenticatorsVarSampFields>;
  variance?: Maybe<AuthUserAuthenticatorsVarianceFields>;
};


/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateOrderBy = {
  avg?: InputMaybe<AuthUserAuthenticatorsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserAuthenticatorsMaxOrderBy>;
  min?: InputMaybe<AuthUserAuthenticatorsMinOrderBy>;
  stddev?: InputMaybe<AuthUserAuthenticatorsStddevOrderBy>;
  stddev_pop?: InputMaybe<AuthUserAuthenticatorsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<AuthUserAuthenticatorsStddevSampOrderBy>;
  sum?: InputMaybe<AuthUserAuthenticatorsSumOrderBy>;
  var_pop?: InputMaybe<AuthUserAuthenticatorsVarPopOrderBy>;
  var_samp?: InputMaybe<AuthUserAuthenticatorsVarSampOrderBy>;
  variance?: InputMaybe<AuthUserAuthenticatorsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_authenticators" */
export type AuthUserAuthenticatorsArrRelInsertInput = {
  data: Array<AuthUserAuthenticatorsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};

/** aggregate avg on columns */
export type AuthUserAuthenticatorsAvgFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsAvgOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "auth.user_authenticators". All fields are combined with a logical 'AND'. */
export type AuthUserAuthenticatorsBoolExp = {
  _and?: InputMaybe<Array<AuthUserAuthenticatorsBoolExp>>;
  _not?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
  _or?: InputMaybe<Array<AuthUserAuthenticatorsBoolExp>>;
  counter?: InputMaybe<BigintComparisonExp>;
  credentialId?: InputMaybe<StringComparisonExp>;
  credentialPublicKey?: InputMaybe<ByteaComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  transports?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsConstraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserAuthenticatorsCredentialIdKey = 'user_authenticators_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserAuthenticatorsPkey = 'user_authenticators_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_authenticators" */
export type AuthUserAuthenticatorsIncInput = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_authenticators" */
export type AuthUserAuthenticatorsInsertInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserAuthenticatorsMaxFields = {
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMaxOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserAuthenticatorsMinFields = {
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMinOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserAuthenticators>;
};

/** on_conflict condition type for table "auth.user_authenticators" */
export type AuthUserAuthenticatorsOnConflict = {
  constraint: AuthUserAuthenticatorsConstraint;
  update_columns?: Array<AuthUserAuthenticatorsUpdateColumn>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};

/** Ordering options when selecting data from "auth.user_authenticators". */
export type AuthUserAuthenticatorsOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  credentialPublicKey?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserAuthenticators */
export type AuthUserAuthenticatorsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsSelectColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_authenticators" */
export type AuthUserAuthenticatorsSetInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserAuthenticatorsStddevFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsStddevOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type AuthUserAuthenticatorsStddevPopFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsStddevPopOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type AuthUserAuthenticatorsStddevSampFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsStddevSampOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type AuthUserAuthenticatorsSumFields = {
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsSumOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** update columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsUpdateColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type AuthUserAuthenticatorsVarPopFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsVarPopOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type AuthUserAuthenticatorsVarSampFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsVarSampOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AuthUserAuthenticatorsVarianceFields = {
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsVarianceOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProvidersAggregate = {
  aggregate?: Maybe<AuthUserProvidersAggregateFields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<AuthUserProvidersMaxFields>;
  min?: Maybe<AuthUserProvidersMinFields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProvidersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserProvidersMaxOrderBy>;
  min?: InputMaybe<AuthUserProvidersMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProvidersArrRelInsertInput = {
  data: Array<AuthUserProvidersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  _not?: InputMaybe<AuthUserProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  provider?: InputMaybe<AuthProvidersBoolExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerUserId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProvidersInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProvidersObjRelInsertInput>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProvidersMaxFields = {
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProvidersMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserProvidersMinFields = {
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProvidersMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProvidersMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProvidersOnConflict = {
  constraint: AuthUserProvidersConstraint;
  update_columns?: Array<AuthUserProvidersUpdateColumn>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProvidersOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  provider?: InputMaybe<AuthProvidersOrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProvidersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProvidersSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProvidersSetInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProvidersUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRolesAggregate = {
  aggregate?: Maybe<AuthUserRolesAggregateFields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<AuthUserRolesMaxFields>;
  min?: Maybe<AuthUserRolesMinFields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserRolesMaxOrderBy>;
  min?: InputMaybe<AuthUserRolesMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRolesArrRelInsertInput = {
  data: Array<AuthUserRolesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRolesBoolExp = {
  _and?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  _not?: InputMaybe<AuthUserRolesBoolExp>;
  _or?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  roleByRole?: InputMaybe<AuthRolesBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRolesConstraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "role", "user_id" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRolesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRolesMaxFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRolesMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserRolesMinFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRolesMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRolesMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRolesOnConflict = {
  constraint: AuthUserRolesConstraint;
  update_columns?: Array<AuthUserRolesUpdateColumn>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRolesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<AuthRolesOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRolesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRolesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRolesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRolesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: FilesAggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

/** aggregated selection of "storage.buckets" */
export type BucketsAggregate = {
  aggregate?: Maybe<BucketsAggregateFields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFields = {
  avg?: Maybe<BucketsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BucketsMaxFields>;
  min?: Maybe<BucketsMinFields>;
  stddev?: Maybe<BucketsStddevFields>;
  stddev_pop?: Maybe<BucketsStddevPopFields>;
  stddev_samp?: Maybe<BucketsStddevSampFields>;
  sum?: Maybe<BucketsSumFields>;
  var_pop?: Maybe<BucketsVarPopFields>;
  var_samp?: Maybe<BucketsVarSampFields>;
  variance?: Maybe<BucketsVarianceFields>;
};


/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BucketsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BucketsAvgFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type BucketsBoolExp = {
  _and?: InputMaybe<Array<BucketsBoolExp>>;
  _not?: InputMaybe<BucketsBoolExp>;
  _or?: InputMaybe<Array<BucketsBoolExp>>;
  cacheControl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  downloadExpiration?: InputMaybe<IntComparisonExp>;
  files?: InputMaybe<FilesBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  maxUploadFileSize?: InputMaybe<IntComparisonExp>;
  minUploadFileSize?: InputMaybe<IntComparisonExp>;
  presignedUrlsEnabled?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum BucketsConstraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type BucketsIncInput = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type BucketsInsertInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<FilesArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type BucketsMaxFields = {
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type BucketsMinFields = {
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type BucketsMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type BucketsObjRelInsertInput = {
  data: BucketsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<BucketsOnConflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type BucketsOnConflict = {
  constraint: BucketsConstraint;
  update_columns?: Array<BucketsUpdateColumn>;
  where?: InputMaybe<BucketsBoolExp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type BucketsOrderBy = {
  cacheControl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  downloadExpiration?: InputMaybe<OrderBy>;
  files_aggregate?: InputMaybe<FilesAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  maxUploadFileSize?: InputMaybe<OrderBy>;
  minUploadFileSize?: InputMaybe<OrderBy>;
  presignedUrlsEnabled?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: buckets */
export type BucketsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum BucketsSelectColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type BucketsSetInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type BucketsStddevFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BucketsStddevPopFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BucketsStddevSampFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type BucketsSumFields = {
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum BucketsUpdateColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type BucketsVarPopFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BucketsVarSampFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BucketsVarianceFields = {
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type ByteaComparisonExp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type FilesAggregate = {
  aggregate?: Maybe<FilesAggregateFields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type FilesAggregateFields = {
  avg?: Maybe<FilesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FilesMaxFields>;
  min?: Maybe<FilesMinFields>;
  stddev?: Maybe<FilesStddevFields>;
  stddev_pop?: Maybe<FilesStddevPopFields>;
  stddev_samp?: Maybe<FilesStddevSampFields>;
  sum?: Maybe<FilesSumFields>;
  var_pop?: Maybe<FilesVarPopFields>;
  var_samp?: Maybe<FilesVarSampFields>;
  variance?: Maybe<FilesVarianceFields>;
};


/** aggregate fields of "storage.files" */
export type FilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FilesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type FilesAggregateOrderBy = {
  avg?: InputMaybe<FilesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FilesMaxOrderBy>;
  min?: InputMaybe<FilesMinOrderBy>;
  stddev?: InputMaybe<FilesStddevOrderBy>;
  stddev_pop?: InputMaybe<FilesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<FilesStddevSampOrderBy>;
  sum?: InputMaybe<FilesSumOrderBy>;
  var_pop?: InputMaybe<FilesVarPopOrderBy>;
  var_samp?: InputMaybe<FilesVarSampOrderBy>;
  variance?: InputMaybe<FilesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type FilesArrRelInsertInput = {
  data: Array<FilesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<FilesOnConflict>;
};

/** aggregate avg on columns */
export type FilesAvgFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type FilesAvgOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type FilesBoolExp = {
  _and?: InputMaybe<Array<FilesBoolExp>>;
  _not?: InputMaybe<FilesBoolExp>;
  _or?: InputMaybe<Array<FilesBoolExp>>;
  bucket?: InputMaybe<BucketsBoolExp>;
  bucketId?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  etag?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isUploaded?: InputMaybe<BooleanComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uploadedByUserId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum FilesConstraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type FilesIncInput = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type FilesInsertInput = {
  bucket?: InputMaybe<BucketsObjRelInsertInput>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FilesMaxFields = {
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type FilesMaxOrderBy = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FilesMinFields = {
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type FilesMinOrderBy = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "storage.files" */
export type FilesMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type FilesOnConflict = {
  constraint: FilesConstraint;
  update_columns?: Array<FilesUpdateColumn>;
  where?: InputMaybe<FilesBoolExp>;
};

/** Ordering options when selecting data from "storage.files". */
export type FilesOrderBy = {
  bucket?: InputMaybe<BucketsOrderBy>;
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isUploaded?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: files */
export type FilesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum FilesSelectColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type FilesSetInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FilesStddevFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type FilesStddevOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type FilesStddevPopFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type FilesStddevPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type FilesStddevSampFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type FilesStddevSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type FilesSumFields = {
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type FilesSumOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** update columns of table "storage.files" */
export enum FilesUpdateColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** aggregate var_pop on columns */
export type FilesVarPopFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type FilesVarPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type FilesVarSampFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type FilesVarSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FilesVarianceFields = {
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type FilesVarianceOrderBy = {
  size?: InputMaybe<OrderBy>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type MutationRoot = {
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** delete single row from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** delete data from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<BucketsMutationResponse>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<FilesMutationResponse>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete data from the table: "album" */
  delete_album?: Maybe<AlbumMutationResponse>;
  /** delete single row from the table: "album" */
  delete_album_by_pk?: Maybe<Album>;
  /** delete data from the table: "artist" */
  delete_artist?: Maybe<ArtistMutationResponse>;
  /** delete single row from the table: "artist" */
  delete_artist_by_pk?: Maybe<Artist>;
  /** delete data from the table: "profile" */
  delete_profile?: Maybe<ProfileMutationResponse>;
  /** delete single row from the table: "profile" */
  delete_profile_by_pk?: Maybe<Profile>;
  /** delete data from the table: "review" */
  delete_review?: Maybe<ReviewMutationResponse>;
  /** delete single row from the table: "review" */
  delete_review_by_pk?: Maybe<Review>;
  /** delete data from the table: "visit" */
  delete_visit?: Maybe<VisitMutationResponse>;
  /** delete single row from the table: "visit" */
  delete_visit_by_pk?: Maybe<Visit>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** insert a single row into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** insert data into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<BucketsMutationResponse>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<FilesMutationResponse>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert data into the table: "album" */
  insert_album?: Maybe<AlbumMutationResponse>;
  /** insert a single row into the table: "album" */
  insert_album_one?: Maybe<Album>;
  /** insert data into the table: "artist" */
  insert_artist?: Maybe<ArtistMutationResponse>;
  /** insert a single row into the table: "artist" */
  insert_artist_one?: Maybe<Artist>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<ProfileMutationResponse>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** insert data into the table: "review" */
  insert_review?: Maybe<ReviewMutationResponse>;
  /** insert a single row into the table: "review" */
  insert_review_one?: Maybe<Review>;
  /** insert data into the table: "visit" */
  insert_visit?: Maybe<VisitMutationResponse>;
  /** insert a single row into the table: "visit" */
  insert_visit_one?: Maybe<Visit>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** update single row of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** update data of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<BucketsMutationResponse>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<FilesMutationResponse>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update data of the table: "album" */
  update_album?: Maybe<AlbumMutationResponse>;
  /** update single row of the table: "album" */
  update_album_by_pk?: Maybe<Album>;
  /** update data of the table: "artist" */
  update_artist?: Maybe<ArtistMutationResponse>;
  /** update single row of the table: "artist" */
  update_artist_by_pk?: Maybe<Artist>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<ProfileMutationResponse>;
  /** update single row of the table: "profile" */
  update_profile_by_pk?: Maybe<Profile>;
  /** update data of the table: "review" */
  update_review?: Maybe<ReviewMutationResponse>;
  /** update single row of the table: "review" */
  update_review_by_pk?: Maybe<Review>;
  /** update data of the table: "visit" */
  update_visit?: Maybe<VisitMutationResponse>;
  /** update single row of the table: "visit" */
  update_visit_by_pk?: Maybe<Visit>;
};


/** mutation root */
export type MutationRootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserAuthenticatorsArgs = {
  where: AuthUserAuthenticatorsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserProvidersArgs = {
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserRolesArgs = {
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteBucketsArgs = {
  where: BucketsBoolExp;
};


/** mutation root */
export type MutationRootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFilesArgs = {
  where: FilesBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAlbumArgs = {
  where: AlbumBoolExp;
};


/** mutation root */
export type MutationRootDeleteAlbumByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteArtistArgs = {
  where: ArtistBoolExp;
};


/** mutation root */
export type MutationRootDeleteArtistByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteProfileArgs = {
  where: ProfileBoolExp;
};


/** mutation root */
export type MutationRootDeleteProfileByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteReviewArgs = {
  where: ReviewBoolExp;
};


/** mutation root */
export type MutationRootDeleteReviewByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteVisitArgs = {
  where: VisitBoolExp;
};


/** mutation root */
export type MutationRootDeleteVisitByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertAuthProviderArgs = {
  object: AuthProvidersInsertInput;
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequestsInsertInput;
  on_conflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequestsInsertInput>;
  on_conflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokensInsertInput;
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRoleArgs = {
  object: AuthRolesInsertInput;
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserAuthenticatorArgs = {
  object: AuthUserAuthenticatorsInsertInput;
  on_conflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserAuthenticatorsArgs = {
  objects: Array<AuthUserAuthenticatorsInsertInput>;
  on_conflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserProviderArgs = {
  object: AuthUserProvidersInsertInput;
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProvidersInsertInput>;
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserRoleArgs = {
  object: AuthUserRolesInsertInput;
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRolesInsertInput>;
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertBucketArgs = {
  object: BucketsInsertInput;
  on_conflict?: InputMaybe<BucketsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBucketsArgs = {
  objects: Array<BucketsInsertInput>;
  on_conflict?: InputMaybe<BucketsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFileArgs = {
  object: FilesInsertInput;
  on_conflict?: InputMaybe<FilesOnConflict>;
};


/** mutation root */
export type MutationRootInsertFilesArgs = {
  objects: Array<FilesInsertInput>;
  on_conflict?: InputMaybe<FilesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAlbumArgs = {
  objects: Array<AlbumInsertInput>;
  on_conflict?: InputMaybe<AlbumOnConflict>;
};


/** mutation root */
export type MutationRootInsertAlbumOneArgs = {
  object: AlbumInsertInput;
  on_conflict?: InputMaybe<AlbumOnConflict>;
};


/** mutation root */
export type MutationRootInsertArtistArgs = {
  objects: Array<ArtistInsertInput>;
  on_conflict?: InputMaybe<ArtistOnConflict>;
};


/** mutation root */
export type MutationRootInsertArtistOneArgs = {
  object: ArtistInsertInput;
  on_conflict?: InputMaybe<ArtistOnConflict>;
};


/** mutation root */
export type MutationRootInsertProfileArgs = {
  objects: Array<ProfileInsertInput>;
  on_conflict?: InputMaybe<ProfileOnConflict>;
};


/** mutation root */
export type MutationRootInsertProfileOneArgs = {
  object: ProfileInsertInput;
  on_conflict?: InputMaybe<ProfileOnConflict>;
};


/** mutation root */
export type MutationRootInsertReviewArgs = {
  objects: Array<ReviewInsertInput>;
  on_conflict?: InputMaybe<ReviewOnConflict>;
};


/** mutation root */
export type MutationRootInsertReviewOneArgs = {
  object: ReviewInsertInput;
  on_conflict?: InputMaybe<ReviewOnConflict>;
};


/** mutation root */
export type MutationRootInsertVisitArgs = {
  objects: Array<VisitInsertInput>;
  on_conflict?: InputMaybe<VisitOnConflict>;
};


/** mutation root */
export type MutationRootInsertVisitOneArgs = {
  object: VisitInsertInput;
  on_conflict?: InputMaybe<VisitOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _delete_at_path?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _delete_key?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  pk_columns: AuthProviderRequestsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _delete_at_path?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _delete_key?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserAuthenticatorArgs = {
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  pk_columns: AuthUserAuthenticatorsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserAuthenticatorsArgs = {
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  where: AuthUserAuthenticatorsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  pk_columns: AuthUserProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  pk_columns: AuthUserRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateBucketArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  pk_columns: BucketsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBucketsArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  where: BucketsBoolExp;
};


/** mutation root */
export type MutationRootUpdateFileArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  pk_columns: FilesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFilesArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAlbumArgs = {
  _inc?: InputMaybe<AlbumIncInput>;
  _set?: InputMaybe<AlbumSetInput>;
  where: AlbumBoolExp;
};


/** mutation root */
export type MutationRootUpdateAlbumByPkArgs = {
  _inc?: InputMaybe<AlbumIncInput>;
  _set?: InputMaybe<AlbumSetInput>;
  pk_columns: AlbumPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateArtistArgs = {
  _inc?: InputMaybe<ArtistIncInput>;
  _set?: InputMaybe<ArtistSetInput>;
  where: ArtistBoolExp;
};


/** mutation root */
export type MutationRootUpdateArtistByPkArgs = {
  _inc?: InputMaybe<ArtistIncInput>;
  _set?: InputMaybe<ArtistSetInput>;
  pk_columns: ArtistPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateProfileArgs = {
  _inc?: InputMaybe<ProfileIncInput>;
  _set?: InputMaybe<ProfileSetInput>;
  where: ProfileBoolExp;
};


/** mutation root */
export type MutationRootUpdateProfileByPkArgs = {
  _inc?: InputMaybe<ProfileIncInput>;
  _set?: InputMaybe<ProfileSetInput>;
  pk_columns: ProfilePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateReviewArgs = {
  _inc?: InputMaybe<ReviewIncInput>;
  _set?: InputMaybe<ReviewSetInput>;
  where: ReviewBoolExp;
};


/** mutation root */
export type MutationRootUpdateReviewByPkArgs = {
  _inc?: InputMaybe<ReviewIncInput>;
  _set?: InputMaybe<ReviewSetInput>;
  pk_columns: ReviewPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateVisitArgs = {
  _inc?: InputMaybe<VisitIncInput>;
  _set?: InputMaybe<VisitSetInput>;
  where: VisitBoolExp;
};


/** mutation root */
export type MutationRootUpdateVisitByPkArgs = {
  _inc?: InputMaybe<VisitIncInput>;
  _set?: InputMaybe<VisitSetInput>;
  pk_columns: VisitPkColumnsInput;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile" */
export type Profile = {
  ToUser?: Maybe<Users>;
  /** An array relationship */
  albums: Array<Album>;
  /** An aggregate relationship */
  albums_aggregate: AlbumAggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  reviews: Array<Review>;
  /** An aggregate relationship */
  reviews_aggregate: ReviewAggregate;
  role?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['String'];
  /** An array relationship */
  visits: Array<Visit>;
  /** An aggregate relationship */
  visits_aggregate: VisitAggregate;
};


/** columns and relationships of "profile" */
export type ProfileAlbumsArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileAlbumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileReviewsArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileReviewsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileVisitsArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileVisitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};

/** aggregated selection of "profile" */
export type ProfileAggregate = {
  aggregate?: Maybe<ProfileAggregateFields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type ProfileAggregateFields = {
  avg?: Maybe<ProfileAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ProfileMaxFields>;
  min?: Maybe<ProfileMinFields>;
  stddev?: Maybe<ProfileStddevFields>;
  stddev_pop?: Maybe<ProfileStddevPopFields>;
  stddev_samp?: Maybe<ProfileStddevSampFields>;
  sum?: Maybe<ProfileSumFields>;
  var_pop?: Maybe<ProfileVarPopFields>;
  var_samp?: Maybe<ProfileVarSampFields>;
  variance?: Maybe<ProfileVarianceFields>;
};


/** aggregate fields of "profile" */
export type ProfileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProfileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ProfileAvgFields = {
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type ProfileBoolExp = {
  _and?: InputMaybe<Array<ProfileBoolExp>>;
  _not?: InputMaybe<ProfileBoolExp>;
  _or?: InputMaybe<Array<ProfileBoolExp>>;
  albums?: InputMaybe<AlbumBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  reviews?: InputMaybe<ReviewBoolExp>;
  role?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
  visits?: InputMaybe<VisitBoolExp>;
};

/** unique or primary key constraints on table "profile" */
export enum ProfileConstraint {
  /** unique or primary key constraint on columns "id" */
  ProfilePkey = 'profile_pkey',
  /** unique or primary key constraint on columns "user_id" */
  ProfileUserIdKey = 'profile_user_id_key'
}

/** input type for incrementing numeric columns in table "profile" */
export type ProfileIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "profile" */
export type ProfileInsertInput = {
  albums?: InputMaybe<AlbumArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewArrRelInsertInput>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
  visits?: InputMaybe<VisitArrRelInsertInput>;
};

/** aggregate max on columns */
export type ProfileMaxFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ProfileMinFields = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profile" */
export type ProfileMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile>;
};

/** input type for inserting object relation for remote table "profile" */
export type ProfileObjRelInsertInput = {
  data: ProfileInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ProfileOnConflict>;
};

/** on_conflict condition type for table "profile" */
export type ProfileOnConflict = {
  constraint: ProfileConstraint;
  update_columns?: Array<ProfileUpdateColumn>;
  where?: InputMaybe<ProfileBoolExp>;
};

/** Ordering options when selecting data from "profile". */
export type ProfileOrderBy = {
  albums_aggregate?: InputMaybe<AlbumAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  reviews_aggregate?: InputMaybe<ReviewAggregateOrderBy>;
  role?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  visits_aggregate?: InputMaybe<VisitAggregateOrderBy>;
};

/** primary key columns input for table: profile */
export type ProfilePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "profile" */
export enum ProfileSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "profile" */
export type ProfileSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ProfileStddevFields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ProfileStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ProfileStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type ProfileSumFields = {
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "profile" */
export enum ProfileUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type ProfileVarPopFields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ProfileVarSampFields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ProfileVarianceFields = {
  id?: Maybe<Scalars['Float']>;
};

export type QueryRoot = {
  /** fetch data from the table: "album" */
  album: Array<Album>;
  /** fetch aggregated fields from the table: "album" */
  album_aggregate: AlbumAggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table: "artist" */
  artist: Array<Artist>;
  /** fetch aggregated fields from the table: "artist" */
  artist_aggregate: ArtistAggregate;
  /** fetch data from the table: "artist" using primary key columns */
  artist_by_pk?: Maybe<Artist>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: ProfileAggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "random_albums" */
  random_albums: Array<RandomAlbums>;
  /** fetch aggregated fields from the table: "random_albums" */
  random_albums_aggregate: RandomAlbumsAggregate;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: ReviewAggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** fetch data from the table: "review_grid" */
  review_grid: Array<ReviewGrid>;
  /** fetch aggregated fields from the table: "review_grid" */
  review_grid_aggregate: ReviewGridAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "visit" */
  visit: Array<Visit>;
  /** fetch aggregated fields from the table: "visit" */
  visit_aggregate: VisitAggregate;
  /** fetch data from the table: "visit" using primary key columns */
  visit_by_pk?: Maybe<Visit>;
};


export type QueryRootAlbumArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


export type QueryRootAlbumAggregateArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


export type QueryRootAlbumByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootArtistArgs = {
  distinct_on?: InputMaybe<Array<ArtistSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArtistOrderBy>>;
  where?: InputMaybe<ArtistBoolExp>;
};


export type QueryRootArtistAggregateArgs = {
  distinct_on?: InputMaybe<Array<ArtistSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArtistOrderBy>>;
  where?: InputMaybe<ArtistBoolExp>;
};


export type QueryRootArtistByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootAuthProviderArgs = {
  id: Scalars['String'];
};


export type QueryRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type QueryRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type QueryRootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type QueryRootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type QueryRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type QueryRootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type QueryRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type QueryRootAuthRoleArgs = {
  role: Scalars['String'];
};


export type QueryRootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type QueryRootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type QueryRootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type QueryRootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type QueryRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type QueryRootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type QueryRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type QueryRootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type QueryRootBucketArgs = {
  id: Scalars['String'];
};


export type QueryRootBucketsArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type QueryRootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type QueryRootFileArgs = {
  id: Scalars['uuid'];
};


export type QueryRootFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type QueryRootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type QueryRootProfileArgs = {
  distinct_on?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type QueryRootProfileAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type QueryRootProfileByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootRandomAlbumsArgs = {
  distinct_on?: InputMaybe<Array<RandomAlbumsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RandomAlbumsOrderBy>>;
  where?: InputMaybe<RandomAlbumsBoolExp>;
};


export type QueryRootRandomAlbumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RandomAlbumsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RandomAlbumsOrderBy>>;
  where?: InputMaybe<RandomAlbumsBoolExp>;
};


export type QueryRootReviewArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


export type QueryRootReviewAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


export type QueryRootReviewByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootReviewGridArgs = {
  distinct_on?: InputMaybe<Array<ReviewGridSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewGridOrderBy>>;
  where?: InputMaybe<ReviewGridBoolExp>;
};


export type QueryRootReviewGridAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReviewGridSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewGridOrderBy>>;
  where?: InputMaybe<ReviewGridBoolExp>;
};


export type QueryRootUserArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootVisitArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};


export type QueryRootVisitAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};


export type QueryRootVisitByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "random_albums" */
export type RandomAlbums = {
  artist?: Maybe<Scalars['Int']>;
  /** An object relationship */
  artistByArtist?: Maybe<Artist>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "random_albums" */
export type RandomAlbumsAggregate = {
  aggregate?: Maybe<RandomAlbumsAggregateFields>;
  nodes: Array<RandomAlbums>;
};

/** aggregate fields of "random_albums" */
export type RandomAlbumsAggregateFields = {
  avg?: Maybe<RandomAlbumsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<RandomAlbumsMaxFields>;
  min?: Maybe<RandomAlbumsMinFields>;
  stddev?: Maybe<RandomAlbumsStddevFields>;
  stddev_pop?: Maybe<RandomAlbumsStddevPopFields>;
  stddev_samp?: Maybe<RandomAlbumsStddevSampFields>;
  sum?: Maybe<RandomAlbumsSumFields>;
  var_pop?: Maybe<RandomAlbumsVarPopFields>;
  var_samp?: Maybe<RandomAlbumsVarSampFields>;
  variance?: Maybe<RandomAlbumsVarianceFields>;
};


/** aggregate fields of "random_albums" */
export type RandomAlbumsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RandomAlbumsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type RandomAlbumsAvgFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "random_albums". All fields are combined with a logical 'AND'. */
export type RandomAlbumsBoolExp = {
  _and?: InputMaybe<Array<RandomAlbumsBoolExp>>;
  _not?: InputMaybe<RandomAlbumsBoolExp>;
  _or?: InputMaybe<Array<RandomAlbumsBoolExp>>;
  artist?: InputMaybe<IntComparisonExp>;
  artistByArtist?: InputMaybe<ArtistBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  sid?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  year?: InputMaybe<IntComparisonExp>;
};

/** aggregate max on columns */
export type RandomAlbumsMaxFields = {
  artist?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type RandomAlbumsMinFields = {
  artist?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "random_albums". */
export type RandomAlbumsOrderBy = {
  artist?: InputMaybe<OrderBy>;
  artistByArtist?: InputMaybe<ArtistOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sid?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** select columns of table "random_albums" */
export enum RandomAlbumsSelectColumn {
  /** column name */
  Artist = 'artist',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Sid = 'sid',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type RandomAlbumsStddevFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type RandomAlbumsStddevPopFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type RandomAlbumsStddevSampFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type RandomAlbumsSumFields = {
  artist?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type RandomAlbumsVarPopFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type RandomAlbumsVarSampFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type RandomAlbumsVarianceFields = {
  artist?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "review" */
export type Review = {
  album: Scalars['Int'];
  /** An object relationship */
  albumByAlbum: Album;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  profile: Scalars['Int'];
  /** An object relationship */
  profileByProfile: Profile;
  rate: Scalars['numeric'];
  text: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "review" */
export type ReviewAggregate = {
  aggregate?: Maybe<ReviewAggregateFields>;
  nodes: Array<Review>;
};

/** aggregate fields of "review" */
export type ReviewAggregateFields = {
  avg?: Maybe<ReviewAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ReviewMaxFields>;
  min?: Maybe<ReviewMinFields>;
  stddev?: Maybe<ReviewStddevFields>;
  stddev_pop?: Maybe<ReviewStddevPopFields>;
  stddev_samp?: Maybe<ReviewStddevSampFields>;
  sum?: Maybe<ReviewSumFields>;
  var_pop?: Maybe<ReviewVarPopFields>;
  var_samp?: Maybe<ReviewVarSampFields>;
  variance?: Maybe<ReviewVarianceFields>;
};


/** aggregate fields of "review" */
export type ReviewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ReviewSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "review" */
export type ReviewAggregateOrderBy = {
  avg?: InputMaybe<ReviewAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ReviewMaxOrderBy>;
  min?: InputMaybe<ReviewMinOrderBy>;
  stddev?: InputMaybe<ReviewStddevOrderBy>;
  stddev_pop?: InputMaybe<ReviewStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ReviewStddevSampOrderBy>;
  sum?: InputMaybe<ReviewSumOrderBy>;
  var_pop?: InputMaybe<ReviewVarPopOrderBy>;
  var_samp?: InputMaybe<ReviewVarSampOrderBy>;
  variance?: InputMaybe<ReviewVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "review" */
export type ReviewArrRelInsertInput = {
  data: Array<ReviewInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ReviewOnConflict>;
};

/** aggregate avg on columns */
export type ReviewAvgFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "review" */
export type ReviewAvgOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'. */
export type ReviewBoolExp = {
  _and?: InputMaybe<Array<ReviewBoolExp>>;
  _not?: InputMaybe<ReviewBoolExp>;
  _or?: InputMaybe<Array<ReviewBoolExp>>;
  album?: InputMaybe<IntComparisonExp>;
  albumByAlbum?: InputMaybe<AlbumBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  profile?: InputMaybe<IntComparisonExp>;
  profileByProfile?: InputMaybe<ProfileBoolExp>;
  rate?: InputMaybe<NumericComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "review" */
export enum ReviewConstraint {
  /** unique or primary key constraint on columns "id" */
  ReviewPkey = 'review_pkey'
}

/** columns and relationships of "review_grid" */
export type ReviewGrid = {
  avg?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  day?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "review_grid" */
export type ReviewGridAggregate = {
  aggregate?: Maybe<ReviewGridAggregateFields>;
  nodes: Array<ReviewGrid>;
};

/** aggregate fields of "review_grid" */
export type ReviewGridAggregateFields = {
  avg?: Maybe<ReviewGridAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ReviewGridMaxFields>;
  min?: Maybe<ReviewGridMinFields>;
  stddev?: Maybe<ReviewGridStddevFields>;
  stddev_pop?: Maybe<ReviewGridStddevPopFields>;
  stddev_samp?: Maybe<ReviewGridStddevSampFields>;
  sum?: Maybe<ReviewGridSumFields>;
  var_pop?: Maybe<ReviewGridVarPopFields>;
  var_samp?: Maybe<ReviewGridVarSampFields>;
  variance?: Maybe<ReviewGridVarianceFields>;
};


/** aggregate fields of "review_grid" */
export type ReviewGridAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ReviewGridSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ReviewGridAvgFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "review_grid". All fields are combined with a logical 'AND'. */
export type ReviewGridBoolExp = {
  _and?: InputMaybe<Array<ReviewGridBoolExp>>;
  _not?: InputMaybe<ReviewGridBoolExp>;
  _or?: InputMaybe<Array<ReviewGridBoolExp>>;
  avg?: InputMaybe<NumericComparisonExp>;
  count?: InputMaybe<BigintComparisonExp>;
  day?: InputMaybe<TimestamptzComparisonExp>;
};

/** aggregate max on columns */
export type ReviewGridMaxFields = {
  avg?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  day?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ReviewGridMinFields = {
  avg?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
  day?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "review_grid". */
export type ReviewGridOrderBy = {
  avg?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  day?: InputMaybe<OrderBy>;
};

/** select columns of table "review_grid" */
export enum ReviewGridSelectColumn {
  /** column name */
  Avg = 'avg',
  /** column name */
  Count = 'count',
  /** column name */
  Day = 'day'
}

/** aggregate stddev on columns */
export type ReviewGridStddevFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ReviewGridStddevPopFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ReviewGridStddevSampFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type ReviewGridSumFields = {
  avg?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type ReviewGridVarPopFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ReviewGridVarSampFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ReviewGridVarianceFields = {
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "review" */
export type ReviewIncInput = {
  album?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "review" */
export type ReviewInsertInput = {
  album?: InputMaybe<Scalars['Int']>;
  albumByAlbum?: InputMaybe<AlbumObjRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  profileByProfile?: InputMaybe<ProfileObjRelInsertInput>;
  rate?: InputMaybe<Scalars['numeric']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ReviewMaxFields = {
  album?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['numeric']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "review" */
export type ReviewMaxOrderBy = {
  album?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ReviewMinFields = {
  album?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['numeric']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "review" */
export type ReviewMinOrderBy = {
  album?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "review" */
export type ReviewMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review>;
};

/** on_conflict condition type for table "review" */
export type ReviewOnConflict = {
  constraint: ReviewConstraint;
  update_columns?: Array<ReviewUpdateColumn>;
  where?: InputMaybe<ReviewBoolExp>;
};

/** Ordering options when selecting data from "review". */
export type ReviewOrderBy = {
  album?: InputMaybe<OrderBy>;
  albumByAlbum?: InputMaybe<AlbumOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  profileByProfile?: InputMaybe<ProfileOrderBy>;
  rate?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: review */
export type ReviewPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "review" */
export enum ReviewSelectColumn {
  /** column name */
  Album = 'album',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile = 'profile',
  /** column name */
  Rate = 'rate',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "review" */
export type ReviewSetInput = {
  album?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<Scalars['numeric']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type ReviewStddevFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "review" */
export type ReviewStddevOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ReviewStddevPopFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "review" */
export type ReviewStddevPopOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ReviewStddevSampFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "review" */
export type ReviewStddevSampOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type ReviewSumFields = {
  album?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "review" */
export type ReviewSumOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** update columns of table "review" */
export enum ReviewUpdateColumn {
  /** column name */
  Album = 'album',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile = 'profile',
  /** column name */
  Rate = 'rate',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type ReviewVarPopFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "review" */
export type ReviewVarPopOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ReviewVarSampFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "review" */
export type ReviewVarSampOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ReviewVarianceFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "review" */
export type ReviewVarianceOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
};

export type SubscriptionRoot = {
  /** fetch data from the table: "album" */
  album: Array<Album>;
  /** fetch aggregated fields from the table: "album" */
  album_aggregate: AlbumAggregate;
  /** fetch data from the table: "album" using primary key columns */
  album_by_pk?: Maybe<Album>;
  /** fetch data from the table: "artist" */
  artist: Array<Artist>;
  /** fetch aggregated fields from the table: "artist" */
  artist_aggregate: ArtistAggregate;
  /** fetch data from the table: "artist" using primary key columns */
  artist_by_pk?: Maybe<Artist>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: ProfileAggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "random_albums" */
  random_albums: Array<RandomAlbums>;
  /** fetch aggregated fields from the table: "random_albums" */
  random_albums_aggregate: RandomAlbumsAggregate;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: ReviewAggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** fetch data from the table: "review_grid" */
  review_grid: Array<ReviewGrid>;
  /** fetch aggregated fields from the table: "review_grid" */
  review_grid_aggregate: ReviewGridAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "visit" */
  visit: Array<Visit>;
  /** fetch aggregated fields from the table: "visit" */
  visit_aggregate: VisitAggregate;
  /** fetch data from the table: "visit" using primary key columns */
  visit_by_pk?: Maybe<Visit>;
};


export type SubscriptionRootAlbumArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


export type SubscriptionRootAlbumAggregateArgs = {
  distinct_on?: InputMaybe<Array<AlbumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AlbumOrderBy>>;
  where?: InputMaybe<AlbumBoolExp>;
};


export type SubscriptionRootAlbumByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootArtistArgs = {
  distinct_on?: InputMaybe<Array<ArtistSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArtistOrderBy>>;
  where?: InputMaybe<ArtistBoolExp>;
};


export type SubscriptionRootArtistAggregateArgs = {
  distinct_on?: InputMaybe<Array<ArtistSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArtistOrderBy>>;
  where?: InputMaybe<ArtistBoolExp>;
};


export type SubscriptionRootArtistByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootAuthProviderArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type SubscriptionRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type SubscriptionRootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type SubscriptionRootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type SubscriptionRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type SubscriptionRootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type SubscriptionRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type SubscriptionRootAuthRoleArgs = {
  role: Scalars['String'];
};


export type SubscriptionRootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type SubscriptionRootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type SubscriptionRootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type SubscriptionRootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type SubscriptionRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type SubscriptionRootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type SubscriptionRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type SubscriptionRootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type SubscriptionRootBucketArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootBucketsArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type SubscriptionRootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type SubscriptionRootFileArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type SubscriptionRootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type SubscriptionRootProfileArgs = {
  distinct_on?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type SubscriptionRootProfileAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type SubscriptionRootProfileByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootRandomAlbumsArgs = {
  distinct_on?: InputMaybe<Array<RandomAlbumsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RandomAlbumsOrderBy>>;
  where?: InputMaybe<RandomAlbumsBoolExp>;
};


export type SubscriptionRootRandomAlbumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RandomAlbumsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RandomAlbumsOrderBy>>;
  where?: InputMaybe<RandomAlbumsBoolExp>;
};


export type SubscriptionRootReviewArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


export type SubscriptionRootReviewAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReviewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewOrderBy>>;
  where?: InputMaybe<ReviewBoolExp>;
};


export type SubscriptionRootReviewByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootReviewGridArgs = {
  distinct_on?: InputMaybe<Array<ReviewGridSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewGridOrderBy>>;
  where?: InputMaybe<ReviewGridBoolExp>;
};


export type SubscriptionRootReviewGridAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReviewGridSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ReviewGridOrderBy>>;
  where?: InputMaybe<ReviewGridBoolExp>;
};


export type SubscriptionRootUserArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootVisitArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};


export type SubscriptionRootVisitAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisitSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisitOrderBy>>;
  where?: InputMaybe<VisitBoolExp>;
};


export type SubscriptionRootVisitByPkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  authenticators: Array<AuthUserAuthenticators>;
  /** An aggregate relationship */
  authenticators_aggregate: AuthUserAuthenticatorsAggregate;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokensAggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRolesAggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.users" */
export type UsersAggregate = {
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFields = {
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "auth.users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  activeMfaType?: InputMaybe<StringComparisonExp>;
  authenticators?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currentChallenge?: InputMaybe<StringComparisonExp>;
  defaultRole?: InputMaybe<StringComparisonExp>;
  defaultRoleByRole?: InputMaybe<AuthRolesBoolExp>;
  disabled?: InputMaybe<BooleanComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<CitextComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isAnonymous?: InputMaybe<BooleanComparisonExp>;
  lastSeen?: InputMaybe<TimestamptzComparisonExp>;
  locale?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  newEmail?: InputMaybe<CitextComparisonExp>;
  otpHash?: InputMaybe<StringComparisonExp>;
  otpHashExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  otpMethodLastUsed?: InputMaybe<StringComparisonExp>;
  passwordHash?: InputMaybe<StringComparisonExp>;
  phoneNumber?: InputMaybe<StringComparisonExp>;
  phoneNumberVerified?: InputMaybe<BooleanComparisonExp>;
  refreshTokens?: InputMaybe<AuthRefreshTokensBoolExp>;
  roles?: InputMaybe<AuthUserRolesBoolExp>;
  ticket?: InputMaybe<StringComparisonExp>;
  ticketExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  totpSecret?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type UsersInsertInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  authenticators?: InputMaybe<AuthUserAuthenticatorsArrRelInsertInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokensArrRelInsertInput>;
  roles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type UsersMaxOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type UsersMinOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.users" */
export type UsersMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "auth.users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "auth.users". */
export type UsersOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  authenticators_aggregate?: InputMaybe<AuthUserAuthenticatorsAggregateOrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  defaultRoleByRole?: InputMaybe<AuthRolesOrderBy>;
  disabled?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isAnonymous?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  phoneNumberVerified?: InputMaybe<OrderBy>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokensAggregateOrderBy>;
  roles_aggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userProviders_aggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum UsersSelectColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type UsersSetInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum UsersUpdateColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "visit" */
export type Visit = {
  album: Scalars['Int'];
  /** An object relationship */
  albumByAlbum: Album;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  profile: Scalars['Int'];
  /** An object relationship */
  profileByProfile: Profile;
  updatedAt: Scalars['timestamptz'];
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "visit" */
export type VisitAggregate = {
  aggregate?: Maybe<VisitAggregateFields>;
  nodes: Array<Visit>;
};

/** aggregate fields of "visit" */
export type VisitAggregateFields = {
  avg?: Maybe<VisitAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<VisitMaxFields>;
  min?: Maybe<VisitMinFields>;
  stddev?: Maybe<VisitStddevFields>;
  stddev_pop?: Maybe<VisitStddevPopFields>;
  stddev_samp?: Maybe<VisitStddevSampFields>;
  sum?: Maybe<VisitSumFields>;
  var_pop?: Maybe<VisitVarPopFields>;
  var_samp?: Maybe<VisitVarSampFields>;
  variance?: Maybe<VisitVarianceFields>;
};


/** aggregate fields of "visit" */
export type VisitAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VisitSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "visit" */
export type VisitAggregateOrderBy = {
  avg?: InputMaybe<VisitAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<VisitMaxOrderBy>;
  min?: InputMaybe<VisitMinOrderBy>;
  stddev?: InputMaybe<VisitStddevOrderBy>;
  stddev_pop?: InputMaybe<VisitStddevPopOrderBy>;
  stddev_samp?: InputMaybe<VisitStddevSampOrderBy>;
  sum?: InputMaybe<VisitSumOrderBy>;
  var_pop?: InputMaybe<VisitVarPopOrderBy>;
  var_samp?: InputMaybe<VisitVarSampOrderBy>;
  variance?: InputMaybe<VisitVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "visit" */
export type VisitArrRelInsertInput = {
  data: Array<VisitInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<VisitOnConflict>;
};

/** aggregate avg on columns */
export type VisitAvgFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "visit" */
export type VisitAvgOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "visit". All fields are combined with a logical 'AND'. */
export type VisitBoolExp = {
  _and?: InputMaybe<Array<VisitBoolExp>>;
  _not?: InputMaybe<VisitBoolExp>;
  _or?: InputMaybe<Array<VisitBoolExp>>;
  album?: InputMaybe<IntComparisonExp>;
  albumByAlbum?: InputMaybe<AlbumBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  profile?: InputMaybe<IntComparisonExp>;
  profileByProfile?: InputMaybe<ProfileBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "visit" */
export enum VisitConstraint {
  /** unique or primary key constraint on columns "profile", "album" */
  UniqueAlbumProfile = 'unique_album_profile',
  /** unique or primary key constraint on columns "id" */
  VisitPkey = 'visit_pkey'
}

/** input type for incrementing numeric columns in table "visit" */
export type VisitIncInput = {
  album?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "visit" */
export type VisitInsertInput = {
  album?: InputMaybe<Scalars['Int']>;
  albumByAlbum?: InputMaybe<AlbumObjRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  profileByProfile?: InputMaybe<ProfileObjRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type VisitMaxFields = {
  album?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "visit" */
export type VisitMaxOrderBy = {
  album?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type VisitMinFields = {
  album?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "visit" */
export type VisitMinOrderBy = {
  album?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "visit" */
export type VisitMutationResponse = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Visit>;
};

/** on_conflict condition type for table "visit" */
export type VisitOnConflict = {
  constraint: VisitConstraint;
  update_columns?: Array<VisitUpdateColumn>;
  where?: InputMaybe<VisitBoolExp>;
};

/** Ordering options when selecting data from "visit". */
export type VisitOrderBy = {
  album?: InputMaybe<OrderBy>;
  albumByAlbum?: InputMaybe<AlbumOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
  profileByProfile?: InputMaybe<ProfileOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: visit */
export type VisitPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "visit" */
export enum VisitSelectColumn {
  /** column name */
  Album = 'album',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile = 'profile',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "visit" */
export type VisitSetInput = {
  album?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type VisitStddevFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "visit" */
export type VisitStddevOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type VisitStddevPopFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "visit" */
export type VisitStddevPopOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type VisitStddevSampFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "visit" */
export type VisitStddevSampOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type VisitSumFields = {
  album?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "visit" */
export type VisitSumOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** update columns of table "visit" */
export enum VisitUpdateColumn {
  /** column name */
  Album = 'album',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile = 'profile',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type VisitVarPopFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "visit" */
export type VisitVarPopOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type VisitVarSampFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "visit" */
export type VisitVarSampOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type VisitVarianceFields = {
  album?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  profile?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "visit" */
export type VisitVarianceOrderBy = {
  album?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profile?: InputMaybe<OrderBy>;
};

export type RandomAlbumWithArtistFragment = { id?: number | null, sid?: string | null, title?: string | null, year?: number | null, artistByArtist?: { id: number, sid?: string | null, name: string } | null };

export type AlbumFragment = { id: number, sid: string, title: string, year: number };

export type AlbumWithArtistFragment = { id: number, sid: string, title: string, year: number, artistByArtist: { id: number, sid?: string | null, name: string } };

export type AlbumWithReviewsFragment = { id: number, sid: string, title: string, year: number, reviews: Array<{ id: number, rate: any, text: string, createdAt: any }> };

export type RandomAlbumsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type RandomAlbumsQuery = { randomAlbums: Array<{ id?: number | null, sid?: string | null, title?: string | null, year?: number | null, artistByArtist?: { id: number, sid?: string | null, name: string } | null }> };

export type SelectAlbumQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SelectAlbumQuery = { albumByPk?: { id: number, sid: string, title: string, year: number, artistByArtist: { id: number, sid?: string | null, name: string } } | null };

export type SelectAlbumsWithArtistQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlbumBoolExp>;
}>;


export type SelectAlbumsWithArtistQuery = { album: Array<{ id: number, sid: string, title: string, year: number, artistByArtist: { id: number, sid?: string | null, name: string } }>, albumAggregate: { aggregate?: { count: number } | null } };

export type SelectAlbumsWithReviewsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlbumBoolExp>;
}>;


export type SelectAlbumsWithReviewsQuery = { album: Array<{ id: number, sid: string, title: string, year: number, reviews: Array<{ id: number, rate: any, text: string, createdAt: any }> }>, albumAggregate: { aggregate?: { count: number } | null } };

export type DeleteAlbumMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type DeleteAlbumMutation = { deleteAlbum?: { returning: Array<{ artist: number }> } | null };

export type UpdateAlbumMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<AlbumSetInput>;
}>;


export type UpdateAlbumMutation = { updateAlbum?: { returning: Array<{ id: number }> } | null };

export type ArtistFragment = { id: number, sid?: string | null, name: string };

export type DeleteArtistMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type DeleteArtistMutation = { deleteArtist?: { returning: Array<{ id: number }> } | null };

export type UpdateArtistMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<ArtistSetInput>;
}>;


export type UpdateArtistMutation = { updateArtist?: { returning: Array<{ id: number }> } | null };

export type ReviewFragment = { id: number, rate: any, text: string, createdAt: any };

export type ReviewWithAlbumAndArtistFragment = { id: number, rate: any, text: string, createdAt: any, albumByAlbum: { id: number, sid: string, title: string, year: number, artistByArtist: { id: number, sid?: string | null, name: string } } };

export type ReviewWithAlbumFragment = { id: number, rate: any, text: string, createdAt: any, albumByAlbum: { id: number, sid: string, title: string, year: number } };

export type SelectReviewsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewBoolExp>;
}>;


export type SelectReviewsQuery = { review: Array<{ id: number, rate: any, text: string, createdAt: any }>, reviewAggregate: { aggregate?: { count: number } | null } };

export type SelectReviewsWithAlbumAndArtistQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewBoolExp>;
}>;


export type SelectReviewsWithAlbumAndArtistQuery = { review: Array<{ id: number, rate: any, text: string, createdAt: any, albumByAlbum: { id: number, sid: string, title: string, year: number, artistByArtist: { id: number, sid?: string | null, name: string } } }>, reviewAggregate: { aggregate?: { count: number } | null } };

export type InsertReviewMutationVariables = Exact<{
  review: ReviewInsertInput;
}>;


export type InsertReviewMutation = { insertReviewOne?: { id: number } | null };

export type UpdateReviewMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<ReviewSetInput>;
}>;


export type UpdateReviewMutation = { updateReview?: { returning: Array<{ id: number }> } | null };

export type DeleteReviewMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type DeleteReviewMutation = { deleteReview?: { returning: Array<{ album: number }> } | null };

export type SelectReviewsGridQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['timestamptz']>;
}>;


export type SelectReviewsGridQuery = { __typename: 'query_root', review_grid: Array<{ count?: any | null, day?: any | null, avg?: any | null }> };

export const Artist = gql`
    fragment Artist on artist {
  id
  sid
  name
}
    `;
export const RandomAlbumWithArtist = gql`
    fragment RandomAlbumWithArtist on random_albums {
  id
  sid
  title
  year
  artistByArtist {
    ...Artist
  }
}
    ${Artist}`;
export const Album = gql`
    fragment Album on album {
  id
  sid
  title
  year
}
    `;
export const Review = gql`
    fragment Review on review {
  id
  rate
  text
  createdAt
}
    `;
export const AlbumWithReviews = gql`
    fragment AlbumWithReviews on album {
  ...Album
  reviews {
    ...Review
  }
}
    ${Album}
${Review}`;
export const AlbumWithArtist = gql`
    fragment AlbumWithArtist on album {
  ...Album
  artistByArtist {
    ...Artist
  }
}
    ${Album}
${Artist}`;
export const ReviewWithAlbumAndArtist = gql`
    fragment ReviewWithAlbumAndArtist on review {
  ...Review
  albumByAlbum {
    ...AlbumWithArtist
  }
}
    ${Review}
${AlbumWithArtist}`;
export const ReviewWithAlbum = gql`
    fragment ReviewWithAlbum on review {
  ...Review
  albumByAlbum {
    ...Album
  }
}
    ${Review}
${Album}`;
export const RandomAlbums = gql`
    query RandomAlbums($limit: Int) {
  randomAlbums: random_albums(limit: $limit) {
    ...RandomAlbumWithArtist
  }
}
    ${RandomAlbumWithArtist}`;
export const SelectAlbum = gql`
    query SelectAlbum($id: Int!) {
  albumByPk: album_by_pk(id: $id) {
    ...AlbumWithArtist
  }
}
    ${AlbumWithArtist}`;
export const SelectAlbumsWithArtist = gql`
    query SelectAlbumsWithArtist($limit: Int, $offset: Int, $where: album_bool_exp) {
  album(limit: $limit, offset: $offset, where: $where) {
    ...AlbumWithArtist
  }
  albumAggregate: album_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${AlbumWithArtist}`;
export const SelectAlbumsWithReviews = gql`
    query SelectAlbumsWithReviews($limit: Int, $offset: Int, $where: album_bool_exp) {
  album(limit: $limit, offset: $offset, where: $where) {
    ...AlbumWithReviews
  }
  albumAggregate: album_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${AlbumWithReviews}`;
export const DeleteAlbum = gql`
    mutation DeleteAlbum($id: Int) {
  deleteAlbum: delete_album(where: {id: {_eq: $id}}) {
    returning {
      artist
    }
  }
}
    `;
export const UpdateAlbum = gql`
    mutation UpdateAlbum($id: Int, $input: album_set_input) {
  updateAlbum: update_album(where: {id: {_eq: $id}}, _set: $input) {
    returning {
      id
    }
  }
}
    `;
export const DeleteArtist = gql`
    mutation DeleteArtist($id: Int) {
  deleteArtist: delete_artist(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export const UpdateArtist = gql`
    mutation UpdateArtist($id: Int, $input: artist_set_input) {
  updateArtist: update_artist(where: {id: {_eq: $id}}, _set: $input) {
    returning {
      id
    }
  }
}
    `;
export const SelectReviews = gql`
    query SelectReviews($limit: Int, $offset: Int, $where: review_bool_exp) {
  review(
    limit: $limit
    offset: $offset
    where: $where
    order_by: {createdAt: desc}
  ) {
    ...Review
  }
  reviewAggregate: review_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${Review}`;
export const SelectReviewsWithAlbumAndArtist = gql`
    query SelectReviewsWithAlbumAndArtist($limit: Int, $offset: Int, $where: review_bool_exp) {
  review(
    limit: $limit
    offset: $offset
    where: $where
    order_by: {createdAt: desc}
  ) {
    ...ReviewWithAlbumAndArtist
  }
  reviewAggregate: review_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${ReviewWithAlbumAndArtist}`;
export const InsertReview = gql`
    mutation InsertReview($review: review_insert_input!) {
  insertReviewOne: insert_review_one(object: $review) {
    id
  }
}
    `;
export const UpdateReview = gql`
    mutation UpdateReview($id: Int, $input: review_set_input) {
  updateReview: update_review(where: {id: {_eq: $id}}, _set: $input) {
    returning {
      id
    }
  }
}
    `;
export const DeleteReview = gql`
    mutation DeleteReview($id: Int) {
  deleteReview: delete_review(where: {id: {_eq: $id}}) {
    returning {
      album
    }
  }
}
    `;
export const SelectReviewsGrid = gql`
    query SelectReviewsGrid($limit: Int, $start: timestamptz) {
  __typename
  review_grid(
    limit: $limit
    order_by: [{day: desc}]
    where: {day: {_gte: $start}}
  ) {
    count
    day
    avg
  }
}
    `;
export const ArtistFragmentDoc = gql`
    fragment Artist on artist {
  id
  sid
  name
}
    `;
export const RandomAlbumWithArtistFragmentDoc = gql`
    fragment RandomAlbumWithArtist on random_albums {
  id
  sid
  title
  year
  artistByArtist {
    ...Artist
  }
}
    ${ArtistFragmentDoc}`;
export const AlbumFragmentDoc = gql`
    fragment Album on album {
  id
  sid
  title
  year
}
    `;
export const ReviewFragmentDoc = gql`
    fragment Review on review {
  id
  rate
  text
  createdAt
}
    `;
export const AlbumWithReviewsFragmentDoc = gql`
    fragment AlbumWithReviews on album {
  ...Album
  reviews {
    ...Review
  }
}
    ${AlbumFragmentDoc}
${ReviewFragmentDoc}`;
export const AlbumWithArtistFragmentDoc = gql`
    fragment AlbumWithArtist on album {
  ...Album
  artistByArtist {
    ...Artist
  }
}
    ${AlbumFragmentDoc}
${ArtistFragmentDoc}`;
export const ReviewWithAlbumAndArtistFragmentDoc = gql`
    fragment ReviewWithAlbumAndArtist on review {
  ...Review
  albumByAlbum {
    ...AlbumWithArtist
  }
}
    ${ReviewFragmentDoc}
${AlbumWithArtistFragmentDoc}`;
export const ReviewWithAlbumFragmentDoc = gql`
    fragment ReviewWithAlbum on review {
  ...Review
  albumByAlbum {
    ...Album
  }
}
    ${ReviewFragmentDoc}
${AlbumFragmentDoc}`;
export const RandomAlbumsDocument = gql`
    query RandomAlbums($limit: Int) {
  randomAlbums: random_albums(limit: $limit) {
    ...RandomAlbumWithArtist
  }
}
    ${RandomAlbumWithArtistFragmentDoc}`;
export const SelectAlbumDocument = gql`
    query SelectAlbum($id: Int!) {
  albumByPk: album_by_pk(id: $id) {
    ...AlbumWithArtist
  }
}
    ${AlbumWithArtistFragmentDoc}`;
export const SelectAlbumsWithArtistDocument = gql`
    query SelectAlbumsWithArtist($limit: Int, $offset: Int, $where: album_bool_exp) {
  album(limit: $limit, offset: $offset, where: $where) {
    ...AlbumWithArtist
  }
  albumAggregate: album_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${AlbumWithArtistFragmentDoc}`;
export const SelectAlbumsWithReviewsDocument = gql`
    query SelectAlbumsWithReviews($limit: Int, $offset: Int, $where: album_bool_exp) {
  album(limit: $limit, offset: $offset, where: $where) {
    ...AlbumWithReviews
  }
  albumAggregate: album_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${AlbumWithReviewsFragmentDoc}`;
export const DeleteAlbumDocument = gql`
    mutation DeleteAlbum($id: Int) {
  deleteAlbum: delete_album(where: {id: {_eq: $id}}) {
    returning {
      artist
    }
  }
}
    `;
export const UpdateAlbumDocument = gql`
    mutation UpdateAlbum($id: Int, $input: album_set_input) {
  updateAlbum: update_album(where: {id: {_eq: $id}}, _set: $input) {
    returning {
      id
    }
  }
}
    `;
export const DeleteArtistDocument = gql`
    mutation DeleteArtist($id: Int) {
  deleteArtist: delete_artist(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export const UpdateArtistDocument = gql`
    mutation UpdateArtist($id: Int, $input: artist_set_input) {
  updateArtist: update_artist(where: {id: {_eq: $id}}, _set: $input) {
    returning {
      id
    }
  }
}
    `;
export const SelectReviewsDocument = gql`
    query SelectReviews($limit: Int, $offset: Int, $where: review_bool_exp) {
  review(
    limit: $limit
    offset: $offset
    where: $where
    order_by: {createdAt: desc}
  ) {
    ...Review
  }
  reviewAggregate: review_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${ReviewFragmentDoc}`;
export const SelectReviewsWithAlbumAndArtistDocument = gql`
    query SelectReviewsWithAlbumAndArtist($limit: Int, $offset: Int, $where: review_bool_exp) {
  review(
    limit: $limit
    offset: $offset
    where: $where
    order_by: {createdAt: desc}
  ) {
    ...ReviewWithAlbumAndArtist
  }
  reviewAggregate: review_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${ReviewWithAlbumAndArtistFragmentDoc}`;
export const InsertReviewDocument = gql`
    mutation InsertReview($review: review_insert_input!) {
  insertReviewOne: insert_review_one(object: $review) {
    id
  }
}
    `;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($id: Int, $input: review_set_input) {
  updateReview: update_review(where: {id: {_eq: $id}}, _set: $input) {
    returning {
      id
    }
  }
}
    `;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: Int) {
  deleteReview: delete_review(where: {id: {_eq: $id}}) {
    returning {
      album
    }
  }
}
    `;
export const SelectReviewsGridDocument = gql`
    query SelectReviewsGrid($limit: Int, $start: timestamptz) {
  __typename
  review_grid(
    limit: $limit
    order_by: [{day: desc}]
    where: {day: {_gte: $start}}
  ) {
    count
    day
    avg
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<{ data?: R, errors?: Array<{ message: string; extensions?: unknown }> }>
export function getSdk<C>(requester: Requester<C>) {
  return {
    RandomAlbums(variables?: RandomAlbumsQueryVariables, options?: C): Promise<{ data?: RandomAlbumsQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RandomAlbumsQuery, RandomAlbumsQueryVariables>(RandomAlbumsDocument, variables, options);
    },
    SelectAlbum(variables: SelectAlbumQueryVariables, options?: C): Promise<{ data?: SelectAlbumQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<SelectAlbumQuery, SelectAlbumQueryVariables>(SelectAlbumDocument, variables, options);
    },
    SelectAlbumsWithArtist(variables?: SelectAlbumsWithArtistQueryVariables, options?: C): Promise<{ data?: SelectAlbumsWithArtistQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<SelectAlbumsWithArtistQuery, SelectAlbumsWithArtistQueryVariables>(SelectAlbumsWithArtistDocument, variables, options);
    },
    SelectAlbumsWithReviews(variables?: SelectAlbumsWithReviewsQueryVariables, options?: C): Promise<{ data?: SelectAlbumsWithReviewsQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<SelectAlbumsWithReviewsQuery, SelectAlbumsWithReviewsQueryVariables>(SelectAlbumsWithReviewsDocument, variables, options);
    },
    DeleteAlbum(variables?: DeleteAlbumMutationVariables, options?: C): Promise<{ data?: DeleteAlbumMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<DeleteAlbumMutation, DeleteAlbumMutationVariables>(DeleteAlbumDocument, variables, options);
    },
    UpdateAlbum(variables?: UpdateAlbumMutationVariables, options?: C): Promise<{ data?: UpdateAlbumMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateAlbumMutation, UpdateAlbumMutationVariables>(UpdateAlbumDocument, variables, options);
    },
    DeleteArtist(variables?: DeleteArtistMutationVariables, options?: C): Promise<{ data?: DeleteArtistMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<DeleteArtistMutation, DeleteArtistMutationVariables>(DeleteArtistDocument, variables, options);
    },
    UpdateArtist(variables?: UpdateArtistMutationVariables, options?: C): Promise<{ data?: UpdateArtistMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateArtistMutation, UpdateArtistMutationVariables>(UpdateArtistDocument, variables, options);
    },
    SelectReviews(variables?: SelectReviewsQueryVariables, options?: C): Promise<{ data?: SelectReviewsQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<SelectReviewsQuery, SelectReviewsQueryVariables>(SelectReviewsDocument, variables, options);
    },
    SelectReviewsWithAlbumAndArtist(variables?: SelectReviewsWithAlbumAndArtistQueryVariables, options?: C): Promise<{ data?: SelectReviewsWithAlbumAndArtistQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<SelectReviewsWithAlbumAndArtistQuery, SelectReviewsWithAlbumAndArtistQueryVariables>(SelectReviewsWithAlbumAndArtistDocument, variables, options);
    },
    InsertReview(variables: InsertReviewMutationVariables, options?: C): Promise<{ data?: InsertReviewMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<InsertReviewMutation, InsertReviewMutationVariables>(InsertReviewDocument, variables, options);
    },
    UpdateReview(variables?: UpdateReviewMutationVariables, options?: C): Promise<{ data?: UpdateReviewMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, variables, options);
    },
    DeleteReview(variables?: DeleteReviewMutationVariables, options?: C): Promise<{ data?: DeleteReviewMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, variables, options);
    },
    SelectReviewsGrid(variables?: SelectReviewsGridQueryVariables, options?: C): Promise<{ data?: SelectReviewsGridQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<SelectReviewsGridQuery, SelectReviewsGridQueryVariables>(SelectReviewsGridDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;