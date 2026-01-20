import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ViewEventModel = runtime.Types.Result.DefaultSelection<Prisma.$ViewEventPayload>;
export type AggregateViewEvent = {
    _count: ViewEventCountAggregateOutputType | null;
    _min: ViewEventMinAggregateOutputType | null;
    _max: ViewEventMaxAggregateOutputType | null;
};
export type ViewEventMinAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    userId: string | null;
    sessionId: string | null;
    ipHash: string | null;
    userAgent: string | null;
    referrer: string | null;
    createdAt: Date | null;
};
export type ViewEventMaxAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    userId: string | null;
    sessionId: string | null;
    ipHash: string | null;
    userAgent: string | null;
    referrer: string | null;
    createdAt: Date | null;
};
export type ViewEventCountAggregateOutputType = {
    id: number;
    contentId: number;
    userId: number;
    sessionId: number;
    ipHash: number;
    userAgent: number;
    referrer: number;
    createdAt: number;
    _all: number;
};
export type ViewEventMinAggregateInputType = {
    id?: true;
    contentId?: true;
    userId?: true;
    sessionId?: true;
    ipHash?: true;
    userAgent?: true;
    referrer?: true;
    createdAt?: true;
};
export type ViewEventMaxAggregateInputType = {
    id?: true;
    contentId?: true;
    userId?: true;
    sessionId?: true;
    ipHash?: true;
    userAgent?: true;
    referrer?: true;
    createdAt?: true;
};
export type ViewEventCountAggregateInputType = {
    id?: true;
    contentId?: true;
    userId?: true;
    sessionId?: true;
    ipHash?: true;
    userAgent?: true;
    referrer?: true;
    createdAt?: true;
    _all?: true;
};
export type ViewEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ViewEventWhereInput;
    orderBy?: Prisma.ViewEventOrderByWithRelationInput | Prisma.ViewEventOrderByWithRelationInput[];
    cursor?: Prisma.ViewEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ViewEventCountAggregateInputType;
    _min?: ViewEventMinAggregateInputType;
    _max?: ViewEventMaxAggregateInputType;
};
export type GetViewEventAggregateType<T extends ViewEventAggregateArgs> = {
    [P in keyof T & keyof AggregateViewEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateViewEvent[P]> : Prisma.GetScalarType<T[P], AggregateViewEvent[P]>;
};
export type ViewEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ViewEventWhereInput;
    orderBy?: Prisma.ViewEventOrderByWithAggregationInput | Prisma.ViewEventOrderByWithAggregationInput[];
    by: Prisma.ViewEventScalarFieldEnum[] | Prisma.ViewEventScalarFieldEnum;
    having?: Prisma.ViewEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ViewEventCountAggregateInputType | true;
    _min?: ViewEventMinAggregateInputType;
    _max?: ViewEventMaxAggregateInputType;
};
export type ViewEventGroupByOutputType = {
    id: string;
    contentId: string;
    userId: string | null;
    sessionId: string | null;
    ipHash: string;
    userAgent: string | null;
    referrer: string | null;
    createdAt: Date;
    _count: ViewEventCountAggregateOutputType | null;
    _min: ViewEventMinAggregateOutputType | null;
    _max: ViewEventMaxAggregateOutputType | null;
};
type GetViewEventGroupByPayload<T extends ViewEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ViewEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ViewEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ViewEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ViewEventGroupByOutputType[P]>;
}>>;
export type ViewEventWhereInput = {
    AND?: Prisma.ViewEventWhereInput | Prisma.ViewEventWhereInput[];
    OR?: Prisma.ViewEventWhereInput[];
    NOT?: Prisma.ViewEventWhereInput | Prisma.ViewEventWhereInput[];
    id?: Prisma.StringFilter<"ViewEvent"> | string;
    contentId?: Prisma.StringFilter<"ViewEvent"> | string;
    userId?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    ipHash?: Prisma.StringFilter<"ViewEvent"> | string;
    userAgent?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    referrer?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ViewEvent"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ViewEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.ContentOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ViewEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ViewEventWhereInput | Prisma.ViewEventWhereInput[];
    OR?: Prisma.ViewEventWhereInput[];
    NOT?: Prisma.ViewEventWhereInput | Prisma.ViewEventWhereInput[];
    contentId?: Prisma.StringFilter<"ViewEvent"> | string;
    userId?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    ipHash?: Prisma.StringFilter<"ViewEvent"> | string;
    userAgent?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    referrer?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ViewEvent"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type ViewEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ViewEventCountOrderByAggregateInput;
    _max?: Prisma.ViewEventMaxOrderByAggregateInput;
    _min?: Prisma.ViewEventMinOrderByAggregateInput;
};
export type ViewEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.ViewEventScalarWhereWithAggregatesInput | Prisma.ViewEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.ViewEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ViewEventScalarWhereWithAggregatesInput | Prisma.ViewEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ViewEvent"> | string;
    contentId?: Prisma.StringWithAggregatesFilter<"ViewEvent"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"ViewEvent"> | string | null;
    sessionId?: Prisma.StringNullableWithAggregatesFilter<"ViewEvent"> | string | null;
    ipHash?: Prisma.StringWithAggregatesFilter<"ViewEvent"> | string;
    userAgent?: Prisma.StringNullableWithAggregatesFilter<"ViewEvent"> | string | null;
    referrer?: Prisma.StringNullableWithAggregatesFilter<"ViewEvent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ViewEvent"> | Date | string;
};
export type ViewEventCreateInput = {
    id?: string;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
    content: Prisma.ContentCreateNestedOneWithoutViewsInput;
    user?: Prisma.UserCreateNestedOneWithoutViewEventsInput;
};
export type ViewEventUncheckedCreateInput = {
    id?: string;
    contentId: string;
    userId?: string | null;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type ViewEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.ContentUpdateOneRequiredWithoutViewsNestedInput;
    user?: Prisma.UserUpdateOneWithoutViewEventsNestedInput;
};
export type ViewEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventCreateManyInput = {
    id?: string;
    contentId: string;
    userId?: string | null;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type ViewEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventListRelationFilter = {
    every?: Prisma.ViewEventWhereInput;
    some?: Prisma.ViewEventWhereInput;
    none?: Prisma.ViewEventWhereInput;
};
export type ViewEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ViewEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ViewEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ViewEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    ipHash?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ViewEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutUserInput, Prisma.ViewEventUncheckedCreateWithoutUserInput> | Prisma.ViewEventCreateWithoutUserInput[] | Prisma.ViewEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutUserInput | Prisma.ViewEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ViewEventCreateManyUserInputEnvelope;
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
};
export type ViewEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutUserInput, Prisma.ViewEventUncheckedCreateWithoutUserInput> | Prisma.ViewEventCreateWithoutUserInput[] | Prisma.ViewEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutUserInput | Prisma.ViewEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ViewEventCreateManyUserInputEnvelope;
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
};
export type ViewEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutUserInput, Prisma.ViewEventUncheckedCreateWithoutUserInput> | Prisma.ViewEventCreateWithoutUserInput[] | Prisma.ViewEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutUserInput | Prisma.ViewEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ViewEventUpsertWithWhereUniqueWithoutUserInput | Prisma.ViewEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ViewEventCreateManyUserInputEnvelope;
    set?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    disconnect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    delete?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    update?: Prisma.ViewEventUpdateWithWhereUniqueWithoutUserInput | Prisma.ViewEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ViewEventUpdateManyWithWhereWithoutUserInput | Prisma.ViewEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ViewEventScalarWhereInput | Prisma.ViewEventScalarWhereInput[];
};
export type ViewEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutUserInput, Prisma.ViewEventUncheckedCreateWithoutUserInput> | Prisma.ViewEventCreateWithoutUserInput[] | Prisma.ViewEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutUserInput | Prisma.ViewEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ViewEventUpsertWithWhereUniqueWithoutUserInput | Prisma.ViewEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ViewEventCreateManyUserInputEnvelope;
    set?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    disconnect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    delete?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    update?: Prisma.ViewEventUpdateWithWhereUniqueWithoutUserInput | Prisma.ViewEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ViewEventUpdateManyWithWhereWithoutUserInput | Prisma.ViewEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ViewEventScalarWhereInput | Prisma.ViewEventScalarWhereInput[];
};
export type ViewEventCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutContentInput, Prisma.ViewEventUncheckedCreateWithoutContentInput> | Prisma.ViewEventCreateWithoutContentInput[] | Prisma.ViewEventUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutContentInput | Prisma.ViewEventCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ViewEventCreateManyContentInputEnvelope;
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
};
export type ViewEventUncheckedCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutContentInput, Prisma.ViewEventUncheckedCreateWithoutContentInput> | Prisma.ViewEventCreateWithoutContentInput[] | Prisma.ViewEventUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutContentInput | Prisma.ViewEventCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ViewEventCreateManyContentInputEnvelope;
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
};
export type ViewEventUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutContentInput, Prisma.ViewEventUncheckedCreateWithoutContentInput> | Prisma.ViewEventCreateWithoutContentInput[] | Prisma.ViewEventUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutContentInput | Prisma.ViewEventCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ViewEventUpsertWithWhereUniqueWithoutContentInput | Prisma.ViewEventUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ViewEventCreateManyContentInputEnvelope;
    set?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    disconnect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    delete?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    update?: Prisma.ViewEventUpdateWithWhereUniqueWithoutContentInput | Prisma.ViewEventUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ViewEventUpdateManyWithWhereWithoutContentInput | Prisma.ViewEventUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ViewEventScalarWhereInput | Prisma.ViewEventScalarWhereInput[];
};
export type ViewEventUncheckedUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ViewEventCreateWithoutContentInput, Prisma.ViewEventUncheckedCreateWithoutContentInput> | Prisma.ViewEventCreateWithoutContentInput[] | Prisma.ViewEventUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ViewEventCreateOrConnectWithoutContentInput | Prisma.ViewEventCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ViewEventUpsertWithWhereUniqueWithoutContentInput | Prisma.ViewEventUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ViewEventCreateManyContentInputEnvelope;
    set?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    disconnect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    delete?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    connect?: Prisma.ViewEventWhereUniqueInput | Prisma.ViewEventWhereUniqueInput[];
    update?: Prisma.ViewEventUpdateWithWhereUniqueWithoutContentInput | Prisma.ViewEventUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ViewEventUpdateManyWithWhereWithoutContentInput | Prisma.ViewEventUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ViewEventScalarWhereInput | Prisma.ViewEventScalarWhereInput[];
};
export type ViewEventCreateWithoutUserInput = {
    id?: string;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
    content: Prisma.ContentCreateNestedOneWithoutViewsInput;
};
export type ViewEventUncheckedCreateWithoutUserInput = {
    id?: string;
    contentId: string;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type ViewEventCreateOrConnectWithoutUserInput = {
    where: Prisma.ViewEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ViewEventCreateWithoutUserInput, Prisma.ViewEventUncheckedCreateWithoutUserInput>;
};
export type ViewEventCreateManyUserInputEnvelope = {
    data: Prisma.ViewEventCreateManyUserInput | Prisma.ViewEventCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ViewEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ViewEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ViewEventUpdateWithoutUserInput, Prisma.ViewEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ViewEventCreateWithoutUserInput, Prisma.ViewEventUncheckedCreateWithoutUserInput>;
};
export type ViewEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ViewEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ViewEventUpdateWithoutUserInput, Prisma.ViewEventUncheckedUpdateWithoutUserInput>;
};
export type ViewEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ViewEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ViewEventUpdateManyMutationInput, Prisma.ViewEventUncheckedUpdateManyWithoutUserInput>;
};
export type ViewEventScalarWhereInput = {
    AND?: Prisma.ViewEventScalarWhereInput | Prisma.ViewEventScalarWhereInput[];
    OR?: Prisma.ViewEventScalarWhereInput[];
    NOT?: Prisma.ViewEventScalarWhereInput | Prisma.ViewEventScalarWhereInput[];
    id?: Prisma.StringFilter<"ViewEvent"> | string;
    contentId?: Prisma.StringFilter<"ViewEvent"> | string;
    userId?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    sessionId?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    ipHash?: Prisma.StringFilter<"ViewEvent"> | string;
    userAgent?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    referrer?: Prisma.StringNullableFilter<"ViewEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ViewEvent"> | Date | string;
};
export type ViewEventCreateWithoutContentInput = {
    id?: string;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutViewEventsInput;
};
export type ViewEventUncheckedCreateWithoutContentInput = {
    id?: string;
    userId?: string | null;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type ViewEventCreateOrConnectWithoutContentInput = {
    where: Prisma.ViewEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ViewEventCreateWithoutContentInput, Prisma.ViewEventUncheckedCreateWithoutContentInput>;
};
export type ViewEventCreateManyContentInputEnvelope = {
    data: Prisma.ViewEventCreateManyContentInput | Prisma.ViewEventCreateManyContentInput[];
    skipDuplicates?: boolean;
};
export type ViewEventUpsertWithWhereUniqueWithoutContentInput = {
    where: Prisma.ViewEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ViewEventUpdateWithoutContentInput, Prisma.ViewEventUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.ViewEventCreateWithoutContentInput, Prisma.ViewEventUncheckedCreateWithoutContentInput>;
};
export type ViewEventUpdateWithWhereUniqueWithoutContentInput = {
    where: Prisma.ViewEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ViewEventUpdateWithoutContentInput, Prisma.ViewEventUncheckedUpdateWithoutContentInput>;
};
export type ViewEventUpdateManyWithWhereWithoutContentInput = {
    where: Prisma.ViewEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ViewEventUpdateManyMutationInput, Prisma.ViewEventUncheckedUpdateManyWithoutContentInput>;
};
export type ViewEventCreateManyUserInput = {
    id?: string;
    contentId: string;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type ViewEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.ContentUpdateOneRequiredWithoutViewsNestedInput;
};
export type ViewEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventCreateManyContentInput = {
    id?: string;
    userId?: string | null;
    sessionId?: string | null;
    ipHash: string;
    userAgent?: string | null;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type ViewEventUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutViewEventsNestedInput;
};
export type ViewEventUncheckedUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventUncheckedUpdateManyWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipHash?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ViewEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    userId?: boolean;
    sessionId?: boolean;
    ipHash?: boolean;
    userAgent?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ViewEvent$userArgs<ExtArgs>;
}, ExtArgs["result"]["viewEvent"]>;
export type ViewEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    userId?: boolean;
    sessionId?: boolean;
    ipHash?: boolean;
    userAgent?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ViewEvent$userArgs<ExtArgs>;
}, ExtArgs["result"]["viewEvent"]>;
export type ViewEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    userId?: boolean;
    sessionId?: boolean;
    ipHash?: boolean;
    userAgent?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ViewEvent$userArgs<ExtArgs>;
}, ExtArgs["result"]["viewEvent"]>;
export type ViewEventSelectScalar = {
    id?: boolean;
    contentId?: boolean;
    userId?: boolean;
    sessionId?: boolean;
    ipHash?: boolean;
    userAgent?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
};
export type ViewEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contentId" | "userId" | "sessionId" | "ipHash" | "userAgent" | "referrer" | "createdAt", ExtArgs["result"]["viewEvent"]>;
export type ViewEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ViewEvent$userArgs<ExtArgs>;
};
export type ViewEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ViewEvent$userArgs<ExtArgs>;
};
export type ViewEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.ViewEvent$userArgs<ExtArgs>;
};
export type $ViewEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ViewEvent";
    objects: {
        content: Prisma.$ContentPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contentId: string;
        userId: string | null;
        sessionId: string | null;
        ipHash: string;
        userAgent: string | null;
        referrer: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["viewEvent"]>;
    composites: {};
};
export type ViewEventGetPayload<S extends boolean | null | undefined | ViewEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ViewEventPayload, S>;
export type ViewEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ViewEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ViewEventCountAggregateInputType | true;
};
export interface ViewEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ViewEvent'];
        meta: {
            name: 'ViewEvent';
        };
    };
    findUnique<T extends ViewEventFindUniqueArgs>(args: Prisma.SelectSubset<T, ViewEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ViewEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ViewEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ViewEventFindFirstArgs>(args?: Prisma.SelectSubset<T, ViewEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ViewEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ViewEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ViewEventFindManyArgs>(args?: Prisma.SelectSubset<T, ViewEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ViewEventCreateArgs>(args: Prisma.SelectSubset<T, ViewEventCreateArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ViewEventCreateManyArgs>(args?: Prisma.SelectSubset<T, ViewEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ViewEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ViewEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ViewEventDeleteArgs>(args: Prisma.SelectSubset<T, ViewEventDeleteArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ViewEventUpdateArgs>(args: Prisma.SelectSubset<T, ViewEventUpdateArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ViewEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, ViewEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ViewEventUpdateManyArgs>(args: Prisma.SelectSubset<T, ViewEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ViewEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ViewEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ViewEventUpsertArgs>(args: Prisma.SelectSubset<T, ViewEventUpsertArgs<ExtArgs>>): Prisma.Prisma__ViewEventClient<runtime.Types.Result.GetResult<Prisma.$ViewEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ViewEventCountArgs>(args?: Prisma.Subset<T, ViewEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ViewEventCountAggregateOutputType> : number>;
    aggregate<T extends ViewEventAggregateArgs>(args: Prisma.Subset<T, ViewEventAggregateArgs>): Prisma.PrismaPromise<GetViewEventAggregateType<T>>;
    groupBy<T extends ViewEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ViewEventGroupByArgs['orderBy'];
    } : {
        orderBy?: ViewEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ViewEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ViewEventFieldRefs;
}
export interface Prisma__ViewEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.ViewEvent$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ViewEvent$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ViewEventFieldRefs {
    readonly id: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly contentId: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly sessionId: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly ipHash: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly userAgent: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly referrer: Prisma.FieldRef<"ViewEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ViewEvent", 'DateTime'>;
}
export type ViewEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    where: Prisma.ViewEventWhereUniqueInput;
};
export type ViewEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    where: Prisma.ViewEventWhereUniqueInput;
};
export type ViewEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ViewEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ViewEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ViewEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ViewEventCreateInput, Prisma.ViewEventUncheckedCreateInput>;
};
export type ViewEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ViewEventCreateManyInput | Prisma.ViewEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ViewEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    data: Prisma.ViewEventCreateManyInput | Prisma.ViewEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ViewEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ViewEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ViewEventUpdateInput, Prisma.ViewEventUncheckedUpdateInput>;
    where: Prisma.ViewEventWhereUniqueInput;
};
export type ViewEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ViewEventUpdateManyMutationInput, Prisma.ViewEventUncheckedUpdateManyInput>;
    where?: Prisma.ViewEventWhereInput;
    limit?: number;
};
export type ViewEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ViewEventUpdateManyMutationInput, Prisma.ViewEventUncheckedUpdateManyInput>;
    where?: Prisma.ViewEventWhereInput;
    limit?: number;
    include?: Prisma.ViewEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ViewEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    where: Prisma.ViewEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ViewEventCreateInput, Prisma.ViewEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ViewEventUpdateInput, Prisma.ViewEventUncheckedUpdateInput>;
};
export type ViewEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
    where: Prisma.ViewEventWhereUniqueInput;
};
export type ViewEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ViewEventWhereInput;
    limit?: number;
};
export type ViewEvent$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ViewEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ViewEventSelect<ExtArgs> | null;
    omit?: Prisma.ViewEventOmit<ExtArgs> | null;
    include?: Prisma.ViewEventInclude<ExtArgs> | null;
};
export {};
