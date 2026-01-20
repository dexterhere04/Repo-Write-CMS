import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContentModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentPayload>;
export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
};
export type ContentMinAggregateOutputType = {
    id: string | null;
    type: $Enums.ContentType | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ContentMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.ContentType | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ContentCountAggregateOutputType = {
    id: number;
    type: number;
    authorId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type ContentMinAggregateInputType = {
    id?: true;
    type?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ContentMaxAggregateInputType = {
    id?: true;
    type?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ContentCountAggregateInputType = {
    id?: true;
    type?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type ContentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentWhereInput;
    orderBy?: Prisma.ContentOrderByWithRelationInput | Prisma.ContentOrderByWithRelationInput[];
    cursor?: Prisma.ContentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContentCountAggregateInputType;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
};
export type GetContentAggregateType<T extends ContentAggregateArgs> = {
    [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContent[P]> : Prisma.GetScalarType<T[P], AggregateContent[P]>;
};
export type ContentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentWhereInput;
    orderBy?: Prisma.ContentOrderByWithAggregationInput | Prisma.ContentOrderByWithAggregationInput[];
    by: Prisma.ContentScalarFieldEnum[] | Prisma.ContentScalarFieldEnum;
    having?: Prisma.ContentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentCountAggregateInputType | true;
    _min?: ContentMinAggregateInputType;
    _max?: ContentMaxAggregateInputType;
};
export type ContentGroupByOutputType = {
    id: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: ContentCountAggregateOutputType | null;
    _min: ContentMinAggregateOutputType | null;
    _max: ContentMaxAggregateOutputType | null;
};
type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentGroupByOutputType[P]>;
}>>;
export type ContentWhereInput = {
    AND?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    OR?: Prisma.ContentWhereInput[];
    NOT?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    id?: Prisma.StringFilter<"Content"> | string;
    type?: Prisma.EnumContentTypeFilter<"Content"> | $Enums.ContentType;
    authorId?: Prisma.StringFilter<"Content"> | string;
    createdAt?: Prisma.DateTimeFilter<"Content"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Content"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Content"> | Date | string | null;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    versions?: Prisma.ContentVersionListRelationFilter;
    status?: Prisma.ContentStatusHistoryListRelationFilter;
    slugs?: Prisma.ContentSlugListRelationFilter;
    tags?: Prisma.ContentTagListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    views?: Prisma.ViewEventListRelationFilter;
    seo?: Prisma.XOR<Prisma.ContentSEONullableScalarRelationFilter, Prisma.ContentSEOWhereInput> | null;
};
export type ContentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    versions?: Prisma.ContentVersionOrderByRelationAggregateInput;
    status?: Prisma.ContentStatusHistoryOrderByRelationAggregateInput;
    slugs?: Prisma.ContentSlugOrderByRelationAggregateInput;
    tags?: Prisma.ContentTagOrderByRelationAggregateInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    likes?: Prisma.LikeOrderByRelationAggregateInput;
    views?: Prisma.ViewEventOrderByRelationAggregateInput;
    seo?: Prisma.ContentSEOOrderByWithRelationInput;
};
export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    OR?: Prisma.ContentWhereInput[];
    NOT?: Prisma.ContentWhereInput | Prisma.ContentWhereInput[];
    type?: Prisma.EnumContentTypeFilter<"Content"> | $Enums.ContentType;
    authorId?: Prisma.StringFilter<"Content"> | string;
    createdAt?: Prisma.DateTimeFilter<"Content"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Content"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Content"> | Date | string | null;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    versions?: Prisma.ContentVersionListRelationFilter;
    status?: Prisma.ContentStatusHistoryListRelationFilter;
    slugs?: Prisma.ContentSlugListRelationFilter;
    tags?: Prisma.ContentTagListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    views?: Prisma.ViewEventListRelationFilter;
    seo?: Prisma.XOR<Prisma.ContentSEONullableScalarRelationFilter, Prisma.ContentSEOWhereInput> | null;
}, "id">;
export type ContentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ContentCountOrderByAggregateInput;
    _max?: Prisma.ContentMaxOrderByAggregateInput;
    _min?: Prisma.ContentMinOrderByAggregateInput;
};
export type ContentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentScalarWhereWithAggregatesInput | Prisma.ContentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentScalarWhereWithAggregatesInput | Prisma.ContentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Content"> | string;
    type?: Prisma.EnumContentTypeWithAggregatesFilter<"Content"> | $Enums.ContentType;
    authorId?: Prisma.StringWithAggregatesFilter<"Content"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Content"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Content"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null;
};
export type ContentCreateInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateManyInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ContentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContentListRelationFilter = {
    every?: Prisma.ContentWhereInput;
    some?: Prisma.ContentWhereInput;
    none?: Prisma.ContentWhereInput;
};
export type ContentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ContentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ContentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ContentScalarRelationFilter = {
    is?: Prisma.ContentWhereInput;
    isNot?: Prisma.ContentWhereInput;
};
export type ContentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutAuthorInput, Prisma.ContentUncheckedCreateWithoutAuthorInput> | Prisma.ContentCreateWithoutAuthorInput[] | Prisma.ContentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutAuthorInput | Prisma.ContentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ContentCreateManyAuthorInputEnvelope;
    connect?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
};
export type ContentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutAuthorInput, Prisma.ContentUncheckedCreateWithoutAuthorInput> | Prisma.ContentCreateWithoutAuthorInput[] | Prisma.ContentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutAuthorInput | Prisma.ContentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.ContentCreateManyAuthorInputEnvelope;
    connect?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
};
export type ContentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutAuthorInput, Prisma.ContentUncheckedCreateWithoutAuthorInput> | Prisma.ContentCreateWithoutAuthorInput[] | Prisma.ContentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutAuthorInput | Prisma.ContentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ContentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ContentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ContentCreateManyAuthorInputEnvelope;
    set?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    disconnect?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    delete?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    connect?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    update?: Prisma.ContentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ContentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ContentUpdateManyWithWhereWithoutAuthorInput | Prisma.ContentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ContentScalarWhereInput | Prisma.ContentScalarWhereInput[];
};
export type ContentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutAuthorInput, Prisma.ContentUncheckedCreateWithoutAuthorInput> | Prisma.ContentCreateWithoutAuthorInput[] | Prisma.ContentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutAuthorInput | Prisma.ContentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.ContentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.ContentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.ContentCreateManyAuthorInputEnvelope;
    set?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    disconnect?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    delete?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    connect?: Prisma.ContentWhereUniqueInput | Prisma.ContentWhereUniqueInput[];
    update?: Prisma.ContentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.ContentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.ContentUpdateManyWithWhereWithoutAuthorInput | Prisma.ContentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.ContentScalarWhereInput | Prisma.ContentScalarWhereInput[];
};
export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType;
};
export type ContentCreateNestedOneWithoutVersionsInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutVersionsInput, Prisma.ContentUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutVersionsInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutVersionsInput, Prisma.ContentUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutVersionsInput;
    upsert?: Prisma.ContentUpsertWithoutVersionsInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutVersionsInput, Prisma.ContentUpdateWithoutVersionsInput>, Prisma.ContentUncheckedUpdateWithoutVersionsInput>;
};
export type ContentCreateNestedOneWithoutStatusInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutStatusInput, Prisma.ContentUncheckedCreateWithoutStatusInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutStatusInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutStatusNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutStatusInput, Prisma.ContentUncheckedCreateWithoutStatusInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutStatusInput;
    upsert?: Prisma.ContentUpsertWithoutStatusInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutStatusInput, Prisma.ContentUpdateWithoutStatusInput>, Prisma.ContentUncheckedUpdateWithoutStatusInput>;
};
export type ContentCreateNestedOneWithoutSlugsInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutSlugsInput, Prisma.ContentUncheckedCreateWithoutSlugsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutSlugsInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutSlugsNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutSlugsInput, Prisma.ContentUncheckedCreateWithoutSlugsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutSlugsInput;
    upsert?: Prisma.ContentUpsertWithoutSlugsInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutSlugsInput, Prisma.ContentUpdateWithoutSlugsInput>, Prisma.ContentUncheckedUpdateWithoutSlugsInput>;
};
export type ContentCreateNestedOneWithoutSeoInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutSeoInput, Prisma.ContentUncheckedCreateWithoutSeoInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutSeoInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutSeoNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutSeoInput, Prisma.ContentUncheckedCreateWithoutSeoInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutSeoInput;
    upsert?: Prisma.ContentUpsertWithoutSeoInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutSeoInput, Prisma.ContentUpdateWithoutSeoInput>, Prisma.ContentUncheckedUpdateWithoutSeoInput>;
};
export type ContentCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutTagsInput, Prisma.ContentUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutTagsInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutTagsInput, Prisma.ContentUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.ContentUpsertWithoutTagsInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutTagsInput, Prisma.ContentUpdateWithoutTagsInput>, Prisma.ContentUncheckedUpdateWithoutTagsInput>;
};
export type ContentCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutCommentsInput, Prisma.ContentUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutCommentsInput, Prisma.ContentUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.ContentUpsertWithoutCommentsInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutCommentsInput, Prisma.ContentUpdateWithoutCommentsInput>, Prisma.ContentUncheckedUpdateWithoutCommentsInput>;
};
export type ContentCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutLikesInput, Prisma.ContentUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutLikesInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutLikesInput, Prisma.ContentUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.ContentUpsertWithoutLikesInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutLikesInput, Prisma.ContentUpdateWithoutLikesInput>, Prisma.ContentUncheckedUpdateWithoutLikesInput>;
};
export type ContentCreateNestedOneWithoutViewsInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutViewsInput, Prisma.ContentUncheckedCreateWithoutViewsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutViewsInput;
    connect?: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateOneRequiredWithoutViewsNestedInput = {
    create?: Prisma.XOR<Prisma.ContentCreateWithoutViewsInput, Prisma.ContentUncheckedCreateWithoutViewsInput>;
    connectOrCreate?: Prisma.ContentCreateOrConnectWithoutViewsInput;
    upsert?: Prisma.ContentUpsertWithoutViewsInput;
    connect?: Prisma.ContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentUpdateToOneWithWhereWithoutViewsInput, Prisma.ContentUpdateWithoutViewsInput>, Prisma.ContentUncheckedUpdateWithoutViewsInput>;
};
export type ContentCreateWithoutAuthorInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutAuthorInput, Prisma.ContentUncheckedCreateWithoutAuthorInput>;
};
export type ContentCreateManyAuthorInputEnvelope = {
    data: Prisma.ContentCreateManyAuthorInput | Prisma.ContentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type ContentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ContentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentUpdateWithoutAuthorInput, Prisma.ContentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutAuthorInput, Prisma.ContentUncheckedCreateWithoutAuthorInput>;
};
export type ContentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.ContentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutAuthorInput, Prisma.ContentUncheckedUpdateWithoutAuthorInput>;
};
export type ContentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.ContentScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateManyMutationInput, Prisma.ContentUncheckedUpdateManyWithoutAuthorInput>;
};
export type ContentScalarWhereInput = {
    AND?: Prisma.ContentScalarWhereInput | Prisma.ContentScalarWhereInput[];
    OR?: Prisma.ContentScalarWhereInput[];
    NOT?: Prisma.ContentScalarWhereInput | Prisma.ContentScalarWhereInput[];
    id?: Prisma.StringFilter<"Content"> | string;
    type?: Prisma.EnumContentTypeFilter<"Content"> | $Enums.ContentType;
    authorId?: Prisma.StringFilter<"Content"> | string;
    createdAt?: Prisma.DateTimeFilter<"Content"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Content"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Content"> | Date | string | null;
};
export type ContentCreateWithoutVersionsInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutVersionsInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutVersionsInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutVersionsInput, Prisma.ContentUncheckedCreateWithoutVersionsInput>;
};
export type ContentUpsertWithoutVersionsInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutVersionsInput, Prisma.ContentUncheckedUpdateWithoutVersionsInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutVersionsInput, Prisma.ContentUncheckedCreateWithoutVersionsInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutVersionsInput, Prisma.ContentUncheckedUpdateWithoutVersionsInput>;
};
export type ContentUpdateWithoutVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateWithoutStatusInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutStatusInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutStatusInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutStatusInput, Prisma.ContentUncheckedCreateWithoutStatusInput>;
};
export type ContentUpsertWithoutStatusInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutStatusInput, Prisma.ContentUncheckedUpdateWithoutStatusInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutStatusInput, Prisma.ContentUncheckedCreateWithoutStatusInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutStatusInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutStatusInput, Prisma.ContentUncheckedUpdateWithoutStatusInput>;
};
export type ContentUpdateWithoutStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutStatusInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateWithoutSlugsInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutSlugsInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutSlugsInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutSlugsInput, Prisma.ContentUncheckedCreateWithoutSlugsInput>;
};
export type ContentUpsertWithoutSlugsInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutSlugsInput, Prisma.ContentUncheckedUpdateWithoutSlugsInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutSlugsInput, Prisma.ContentUncheckedCreateWithoutSlugsInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutSlugsInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutSlugsInput, Prisma.ContentUncheckedUpdateWithoutSlugsInput>;
};
export type ContentUpdateWithoutSlugsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutSlugsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateWithoutSeoInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
};
export type ContentUncheckedCreateWithoutSeoInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
};
export type ContentCreateOrConnectWithoutSeoInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutSeoInput, Prisma.ContentUncheckedCreateWithoutSeoInput>;
};
export type ContentUpsertWithoutSeoInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutSeoInput, Prisma.ContentUncheckedUpdateWithoutSeoInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutSeoInput, Prisma.ContentUncheckedCreateWithoutSeoInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutSeoInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutSeoInput, Prisma.ContentUncheckedUpdateWithoutSeoInput>;
};
export type ContentUpdateWithoutSeoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutSeoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
};
export type ContentCreateWithoutTagsInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutTagsInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutTagsInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutTagsInput, Prisma.ContentUncheckedCreateWithoutTagsInput>;
};
export type ContentUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutTagsInput, Prisma.ContentUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutTagsInput, Prisma.ContentUncheckedCreateWithoutTagsInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutTagsInput, Prisma.ContentUncheckedUpdateWithoutTagsInput>;
};
export type ContentUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateWithoutCommentsInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutCommentsInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutCommentsInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutCommentsInput, Prisma.ContentUncheckedCreateWithoutCommentsInput>;
};
export type ContentUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutCommentsInput, Prisma.ContentUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutCommentsInput, Prisma.ContentUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutCommentsInput, Prisma.ContentUncheckedUpdateWithoutCommentsInput>;
};
export type ContentUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateWithoutLikesInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutLikesInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    views?: Prisma.ViewEventUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutLikesInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutLikesInput, Prisma.ContentUncheckedCreateWithoutLikesInput>;
};
export type ContentUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutLikesInput, Prisma.ContentUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutLikesInput, Prisma.ContentUncheckedCreateWithoutLikesInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutLikesInput, Prisma.ContentUncheckedUpdateWithoutLikesInput>;
};
export type ContentUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateWithoutViewsInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutContentsInput;
    versions?: Prisma.ContentVersionCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOCreateNestedOneWithoutContentInput;
};
export type ContentUncheckedCreateWithoutViewsInput = {
    id?: string;
    type: $Enums.ContentType;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    versions?: Prisma.ContentVersionUncheckedCreateNestedManyWithoutContentInput;
    status?: Prisma.ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput;
    slugs?: Prisma.ContentSlugUncheckedCreateNestedManyWithoutContentInput;
    tags?: Prisma.ContentTagUncheckedCreateNestedManyWithoutContentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutContentInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutContentInput;
    seo?: Prisma.ContentSEOUncheckedCreateNestedOneWithoutContentInput;
};
export type ContentCreateOrConnectWithoutViewsInput = {
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateWithoutViewsInput, Prisma.ContentUncheckedCreateWithoutViewsInput>;
};
export type ContentUpsertWithoutViewsInput = {
    update: Prisma.XOR<Prisma.ContentUpdateWithoutViewsInput, Prisma.ContentUncheckedUpdateWithoutViewsInput>;
    create: Prisma.XOR<Prisma.ContentCreateWithoutViewsInput, Prisma.ContentUncheckedCreateWithoutViewsInput>;
    where?: Prisma.ContentWhereInput;
};
export type ContentUpdateToOneWithWhereWithoutViewsInput = {
    where?: Prisma.ContentWhereInput;
    data: Prisma.XOR<Prisma.ContentUpdateWithoutViewsInput, Prisma.ContentUncheckedUpdateWithoutViewsInput>;
};
export type ContentUpdateWithoutViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutContentsNestedInput;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutViewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentCreateManyAuthorInput = {
    id?: string;
    type: $Enums.ContentType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ContentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    versions?: Prisma.ContentVersionUncheckedUpdateManyWithoutContentNestedInput;
    status?: Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput;
    slugs?: Prisma.ContentSlugUncheckedUpdateManyWithoutContentNestedInput;
    tags?: Prisma.ContentTagUncheckedUpdateManyWithoutContentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutContentNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutContentNestedInput;
    views?: Prisma.ViewEventUncheckedUpdateManyWithoutContentNestedInput;
    seo?: Prisma.ContentSEOUncheckedUpdateOneWithoutContentNestedInput;
};
export type ContentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContentCountOutputType = {
    versions: number;
    status: number;
    slugs: number;
    tags: number;
    comments: number;
    likes: number;
    views: number;
};
export type ContentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    versions?: boolean | ContentCountOutputTypeCountVersionsArgs;
    status?: boolean | ContentCountOutputTypeCountStatusArgs;
    slugs?: boolean | ContentCountOutputTypeCountSlugsArgs;
    tags?: boolean | ContentCountOutputTypeCountTagsArgs;
    comments?: boolean | ContentCountOutputTypeCountCommentsArgs;
    likes?: boolean | ContentCountOutputTypeCountLikesArgs;
    views?: boolean | ContentCountOutputTypeCountViewsArgs;
};
export type ContentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentCountOutputTypeSelect<ExtArgs> | null;
};
export type ContentCountOutputTypeCountVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentVersionWhereInput;
};
export type ContentCountOutputTypeCountStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentStatusHistoryWhereInput;
};
export type ContentCountOutputTypeCountSlugsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSlugWhereInput;
};
export type ContentCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentTagWhereInput;
};
export type ContentCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type ContentCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
};
export type ContentCountOutputTypeCountViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ViewEventWhereInput;
};
export type ContentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.Content$versionsArgs<ExtArgs>;
    status?: boolean | Prisma.Content$statusArgs<ExtArgs>;
    slugs?: boolean | Prisma.Content$slugsArgs<ExtArgs>;
    tags?: boolean | Prisma.Content$tagsArgs<ExtArgs>;
    comments?: boolean | Prisma.Content$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.Content$likesArgs<ExtArgs>;
    views?: boolean | Prisma.Content$viewsArgs<ExtArgs>;
    seo?: boolean | Prisma.Content$seoArgs<ExtArgs>;
    _count?: boolean | Prisma.ContentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["content"]>;
export type ContentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["content"]>;
export type ContentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["content"]>;
export type ContentSelectScalar = {
    id?: boolean;
    type?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type ContentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "authorId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["content"]>;
export type ContentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.Content$versionsArgs<ExtArgs>;
    status?: boolean | Prisma.Content$statusArgs<ExtArgs>;
    slugs?: boolean | Prisma.Content$slugsArgs<ExtArgs>;
    tags?: boolean | Prisma.Content$tagsArgs<ExtArgs>;
    comments?: boolean | Prisma.Content$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.Content$likesArgs<ExtArgs>;
    views?: boolean | Prisma.Content$viewsArgs<ExtArgs>;
    seo?: boolean | Prisma.Content$seoArgs<ExtArgs>;
    _count?: boolean | Prisma.ContentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ContentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ContentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Content";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        versions: Prisma.$ContentVersionPayload<ExtArgs>[];
        status: Prisma.$ContentStatusHistoryPayload<ExtArgs>[];
        slugs: Prisma.$ContentSlugPayload<ExtArgs>[];
        tags: Prisma.$ContentTagPayload<ExtArgs>[];
        comments: Prisma.$CommentPayload<ExtArgs>[];
        likes: Prisma.$LikePayload<ExtArgs>[];
        views: Prisma.$ViewEventPayload<ExtArgs>[];
        seo: Prisma.$ContentSEOPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.ContentType;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["content"]>;
    composites: {};
};
export type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentPayload, S>;
export type ContentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentCountAggregateInputType | true;
};
export interface ContentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Content'];
        meta: {
            name: 'Content';
        };
    };
    findUnique<T extends ContentFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContentFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContentFindManyArgs>(args?: Prisma.SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContentCreateArgs>(args: Prisma.SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContentCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContentDeleteArgs>(args: Prisma.SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContentUpdateArgs>(args: Prisma.SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContentUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContentUpsertArgs>(args: Prisma.SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContentCountArgs>(args?: Prisma.Subset<T, ContentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentCountAggregateOutputType> : number>;
    aggregate<T extends ContentAggregateArgs>(args: Prisma.Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>;
    groupBy<T extends ContentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContentFieldRefs;
}
export interface Prisma__ContentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    versions<T extends Prisma.Content$versionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    status<T extends Prisma.Content$statusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$statusArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    slugs<T extends Prisma.Content$slugsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$slugsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tags<T extends Prisma.Content$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.Content$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    likes<T extends Prisma.Content$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    views<T extends Prisma.Content$viewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    seo<T extends Prisma.Content$seoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Content$seoArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContentFieldRefs {
    readonly id: Prisma.FieldRef<"Content", 'String'>;
    readonly type: Prisma.FieldRef<"Content", 'ContentType'>;
    readonly authorId: Prisma.FieldRef<"Content", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Content", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Content", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Content", 'DateTime'>;
}
export type ContentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    where: Prisma.ContentWhereUniqueInput;
};
export type ContentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    where: Prisma.ContentWhereUniqueInput;
};
export type ContentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentCreateInput, Prisma.ContentUncheckedCreateInput>;
};
export type ContentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContentCreateManyInput | Prisma.ContentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    data: Prisma.ContentCreateManyInput | Prisma.ContentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentUpdateInput, Prisma.ContentUncheckedUpdateInput>;
    where: Prisma.ContentWhereUniqueInput;
};
export type ContentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContentUpdateManyMutationInput, Prisma.ContentUncheckedUpdateManyInput>;
    where?: Prisma.ContentWhereInput;
    limit?: number;
};
export type ContentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentUpdateManyMutationInput, Prisma.ContentUncheckedUpdateManyInput>;
    where?: Prisma.ContentWhereInput;
    limit?: number;
    include?: Prisma.ContentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    where: Prisma.ContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentCreateInput, Prisma.ContentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContentUpdateInput, Prisma.ContentUncheckedUpdateInput>;
};
export type ContentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
    where: Prisma.ContentWhereUniqueInput;
};
export type ContentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentWhereInput;
    limit?: number;
};
export type Content$versionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where?: Prisma.ContentVersionWhereInput;
    orderBy?: Prisma.ContentVersionOrderByWithRelationInput | Prisma.ContentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ContentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentVersionScalarFieldEnum | Prisma.ContentVersionScalarFieldEnum[];
};
export type Content$statusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    where?: Prisma.ContentStatusHistoryWhereInput;
    orderBy?: Prisma.ContentStatusHistoryOrderByWithRelationInput | Prisma.ContentStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.ContentStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentStatusHistoryScalarFieldEnum | Prisma.ContentStatusHistoryScalarFieldEnum[];
};
export type Content$slugsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    where?: Prisma.ContentSlugWhereInput;
    orderBy?: Prisma.ContentSlugOrderByWithRelationInput | Prisma.ContentSlugOrderByWithRelationInput[];
    cursor?: Prisma.ContentSlugWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentSlugScalarFieldEnum | Prisma.ContentSlugScalarFieldEnum[];
};
export type Content$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where?: Prisma.ContentTagWhereInput;
    orderBy?: Prisma.ContentTagOrderByWithRelationInput | Prisma.ContentTagOrderByWithRelationInput[];
    cursor?: Prisma.ContentTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentTagScalarFieldEnum | Prisma.ContentTagScalarFieldEnum[];
};
export type Content$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Content$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Content$viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Content$seoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where?: Prisma.ContentSEOWhereInput;
};
export type ContentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSelect<ExtArgs> | null;
    omit?: Prisma.ContentOmit<ExtArgs> | null;
    include?: Prisma.ContentInclude<ExtArgs> | null;
};
export {};
