import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    avatarUrl: string | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    avatarUrl: string | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    name: number;
    avatarUrl: number;
    isActive: number;
    lastLoginAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    avatarUrl?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    avatarUrl?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    avatarUrl?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string | null;
    name: string | null;
    avatarUrl: string | null;
    isActive: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableFilter<"User"> | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    roles?: Prisma.UserRoleListRelationFilter;
    oauthAccounts?: Prisma.OAuthAccountListRelationFilter;
    contents?: Prisma.ContentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    viewEvents?: Prisma.ViewEventListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    loginAttempts?: Prisma.LoginAttemptListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    roles?: Prisma.UserRoleOrderByRelationAggregateInput;
    oauthAccounts?: Prisma.OAuthAccountOrderByRelationAggregateInput;
    contents?: Prisma.ContentOrderByRelationAggregateInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    likes?: Prisma.LikeOrderByRelationAggregateInput;
    viewEvents?: Prisma.ViewEventOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    loginAttempts?: Prisma.LoginAttemptOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringNullableFilter<"User"> | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    roles?: Prisma.UserRoleListRelationFilter;
    oauthAccounts?: Prisma.OAuthAccountListRelationFilter;
    contents?: Prisma.ContentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    viewEvents?: Prisma.ViewEventListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    loginAttempts?: Prisma.LoginAttemptListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.UserUpsertWithoutRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRolesInput, Prisma.UserUpdateWithoutRolesInput>, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOauthAccountsInput, Prisma.UserUncheckedCreateWithoutOauthAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOauthAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOauthAccountsInput, Prisma.UserUncheckedCreateWithoutOauthAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOauthAccountsInput;
    upsert?: Prisma.UserUpsertWithoutOauthAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOauthAccountsInput, Prisma.UserUpdateWithoutOauthAccountsInput>, Prisma.UserUncheckedUpdateWithoutOauthAccountsInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutLoginAttemptsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoginAttemptsInput, Prisma.UserUncheckedCreateWithoutLoginAttemptsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoginAttemptsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutLoginAttemptsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoginAttemptsInput, Prisma.UserUncheckedCreateWithoutLoginAttemptsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoginAttemptsInput;
    upsert?: Prisma.UserUpsertWithoutLoginAttemptsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLoginAttemptsInput, Prisma.UserUpdateWithoutLoginAttemptsInput>, Prisma.UserUncheckedUpdateWithoutLoginAttemptsInput>;
};
export type UserCreateNestedOneWithoutContentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutContentsInput, Prisma.UserUncheckedCreateWithoutContentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutContentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutContentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutContentsInput, Prisma.UserUncheckedCreateWithoutContentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutContentsInput;
    upsert?: Prisma.UserUpsertWithoutContentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutContentsInput, Prisma.UserUpdateWithoutContentsInput>, Prisma.UserUncheckedUpdateWithoutContentsInput>;
};
export type UserCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.UserUpsertWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput, Prisma.UserUpdateWithoutCommentsInput>, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLikesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.UserUpsertWithoutLikesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLikesInput, Prisma.UserUpdateWithoutLikesInput>, Prisma.UserUncheckedUpdateWithoutLikesInput>;
};
export type UserCreateNestedOneWithoutViewEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutViewEventsInput, Prisma.UserUncheckedCreateWithoutViewEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutViewEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutViewEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutViewEventsInput, Prisma.UserUncheckedCreateWithoutViewEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutViewEventsInput;
    upsert?: Prisma.UserUpsertWithoutViewEventsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutViewEventsInput, Prisma.UserUpdateWithoutViewEventsInput>, Prisma.UserUncheckedUpdateWithoutViewEventsInput>;
};
export type UserCreateWithoutRolesInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRolesInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOauthAccountsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOauthAccountsInput, Prisma.UserUncheckedCreateWithoutOauthAccountsInput>;
};
export type UserUpsertWithoutOauthAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOauthAccountsInput, Prisma.UserUncheckedUpdateWithoutOauthAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOauthAccountsInput, Prisma.UserUncheckedCreateWithoutOauthAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOauthAccountsInput, Prisma.UserUncheckedUpdateWithoutOauthAccountsInput>;
};
export type UserUpdateWithoutOauthAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLoginAttemptsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLoginAttemptsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLoginAttemptsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoginAttemptsInput, Prisma.UserUncheckedCreateWithoutLoginAttemptsInput>;
};
export type UserUpsertWithoutLoginAttemptsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLoginAttemptsInput, Prisma.UserUncheckedUpdateWithoutLoginAttemptsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoginAttemptsInput, Prisma.UserUncheckedCreateWithoutLoginAttemptsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLoginAttemptsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLoginAttemptsInput, Prisma.UserUncheckedUpdateWithoutLoginAttemptsInput>;
};
export type UserUpdateWithoutLoginAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLoginAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutContentsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutContentsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutContentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutContentsInput, Prisma.UserUncheckedCreateWithoutContentsInput>;
};
export type UserUpsertWithoutContentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutContentsInput, Prisma.UserUncheckedUpdateWithoutContentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutContentsInput, Prisma.UserUncheckedCreateWithoutContentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutContentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutContentsInput, Prisma.UserUncheckedUpdateWithoutContentsInput>;
};
export type UserUpdateWithoutContentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutContentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
};
export type UserUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLikesInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLikesInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    viewEvents?: Prisma.ViewEventUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLikesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
};
export type UserUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLikesInput, Prisma.UserUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLikesInput, Prisma.UserUncheckedUpdateWithoutLikesInput>;
};
export type UserUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    viewEvents?: Prisma.ViewEventUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutViewEventsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutViewEventsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    roles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedCreateNestedManyWithoutUserInput;
    contents?: Prisma.ContentUncheckedCreateNestedManyWithoutAuthorInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutViewEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutViewEventsInput, Prisma.UserUncheckedCreateWithoutViewEventsInput>;
};
export type UserUpsertWithoutViewEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutViewEventsInput, Prisma.UserUncheckedUpdateWithoutViewEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutViewEventsInput, Prisma.UserUncheckedCreateWithoutViewEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutViewEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutViewEventsInput, Prisma.UserUncheckedUpdateWithoutViewEventsInput>;
};
export type UserUpdateWithoutViewEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutViewEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    roles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    oauthAccounts?: Prisma.OAuthAccountUncheckedUpdateManyWithoutUserNestedInput;
    contents?: Prisma.ContentUncheckedUpdateManyWithoutAuthorNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    loginAttempts?: Prisma.LoginAttemptUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    roles: number;
    oauthAccounts: number;
    contents: number;
    comments: number;
    likes: number;
    viewEvents: number;
    sessions: number;
    loginAttempts: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs;
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs;
    contents?: boolean | UserCountOutputTypeCountContentsArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    likes?: boolean | UserCountOutputTypeCountLikesArgs;
    viewEvents?: boolean | UserCountOutputTypeCountViewEventsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    loginAttempts?: boolean | UserCountOutputTypeCountLoginAttemptsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleWhereInput;
};
export type UserCountOutputTypeCountOauthAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OAuthAccountWhereInput;
};
export type UserCountOutputTypeCountContentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentWhereInput;
};
export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type UserCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
};
export type UserCountOutputTypeCountViewEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ViewEventWhereInput;
};
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountLoginAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoginAttemptWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    oauthAccounts?: boolean | Prisma.User$oauthAccountsArgs<ExtArgs>;
    contents?: boolean | Prisma.User$contentsArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.User$likesArgs<ExtArgs>;
    viewEvents?: boolean | Prisma.User$viewEventsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    loginAttempts?: boolean | Prisma.User$loginAttemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "avatarUrl" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    oauthAccounts?: boolean | Prisma.User$oauthAccountsArgs<ExtArgs>;
    contents?: boolean | Prisma.User$contentsArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.User$likesArgs<ExtArgs>;
    viewEvents?: boolean | Prisma.User$viewEventsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    loginAttempts?: boolean | Prisma.User$loginAttemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        roles: Prisma.$UserRolePayload<ExtArgs>[];
        oauthAccounts: Prisma.$OAuthAccountPayload<ExtArgs>[];
        contents: Prisma.$ContentPayload<ExtArgs>[];
        comments: Prisma.$CommentPayload<ExtArgs>[];
        likes: Prisma.$LikePayload<ExtArgs>[];
        viewEvents: Prisma.$ViewEventPayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        loginAttempts: Prisma.$LoginAttemptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string | null;
        name: string | null;
        avatarUrl: string | null;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.User$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    oauthAccounts<T extends Prisma.User$oauthAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$oauthAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contents<T extends Prisma.User$contentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.User$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    likes<T extends Prisma.User$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    viewEvents<T extends Prisma.User$viewEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$viewEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    loginAttempts<T extends Prisma.User$loginAttemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$loginAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoginAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleOmit<ExtArgs> | null;
    include?: Prisma.UserRoleInclude<ExtArgs> | null;
    where?: Prisma.UserRoleWhereInput;
    orderBy?: Prisma.UserRoleOrderByWithRelationInput | Prisma.UserRoleOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleScalarFieldEnum | Prisma.UserRoleScalarFieldEnum[];
};
export type User$oauthAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OAuthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OAuthAccountOmit<ExtArgs> | null;
    include?: Prisma.OAuthAccountInclude<ExtArgs> | null;
    where?: Prisma.OAuthAccountWhereInput;
    orderBy?: Prisma.OAuthAccountOrderByWithRelationInput | Prisma.OAuthAccountOrderByWithRelationInput[];
    cursor?: Prisma.OAuthAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OAuthAccountScalarFieldEnum | Prisma.OAuthAccountScalarFieldEnum[];
};
export type User$contentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    where?: Prisma.ContentWhereInput;
    orderBy?: Prisma.ContentOrderByWithRelationInput | Prisma.ContentOrderByWithRelationInput[];
    cursor?: Prisma.ContentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentScalarFieldEnum | Prisma.ContentScalarFieldEnum[];
};
export type User$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentSelect<ExtArgs> | null;
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
export type User$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
export type User$viewEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    where?: Prisma.ViewEventWhereInput;
    orderBy?: Prisma.ViewEventOrderByWithRelationInput | Prisma.ViewEventOrderByWithRelationInput[];
    cursor?: Prisma.ViewEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ViewEventScalarFieldEnum | Prisma.ViewEventScalarFieldEnum[];
};
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$loginAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoginAttemptSelect<ExtArgs> | null;
    omit?: Prisma.LoginAttemptOmit<ExtArgs> | null;
    include?: Prisma.LoginAttemptInclude<ExtArgs> | null;
    where?: Prisma.LoginAttemptWhereInput;
    orderBy?: Prisma.LoginAttemptOrderByWithRelationInput | Prisma.LoginAttemptOrderByWithRelationInput[];
    cursor?: Prisma.LoginAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoginAttemptScalarFieldEnum | Prisma.LoginAttemptScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
