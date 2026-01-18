import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContentStatusHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentStatusHistoryPayload>;
export type AggregateContentStatusHistory = {
    _count: ContentStatusHistoryCountAggregateOutputType | null;
    _min: ContentStatusHistoryMinAggregateOutputType | null;
    _max: ContentStatusHistoryMaxAggregateOutputType | null;
};
export type ContentStatusHistoryMinAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    status: $Enums.ContentStatus | null;
    effectiveAt: Date | null;
    createdAt: Date | null;
};
export type ContentStatusHistoryMaxAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    status: $Enums.ContentStatus | null;
    effectiveAt: Date | null;
    createdAt: Date | null;
};
export type ContentStatusHistoryCountAggregateOutputType = {
    id: number;
    contentId: number;
    status: number;
    effectiveAt: number;
    createdAt: number;
    _all: number;
};
export type ContentStatusHistoryMinAggregateInputType = {
    id?: true;
    contentId?: true;
    status?: true;
    effectiveAt?: true;
    createdAt?: true;
};
export type ContentStatusHistoryMaxAggregateInputType = {
    id?: true;
    contentId?: true;
    status?: true;
    effectiveAt?: true;
    createdAt?: true;
};
export type ContentStatusHistoryCountAggregateInputType = {
    id?: true;
    contentId?: true;
    status?: true;
    effectiveAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ContentStatusHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentStatusHistoryWhereInput;
    orderBy?: Prisma.ContentStatusHistoryOrderByWithRelationInput | Prisma.ContentStatusHistoryOrderByWithRelationInput[];
    cursor?: Prisma.ContentStatusHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContentStatusHistoryCountAggregateInputType;
    _min?: ContentStatusHistoryMinAggregateInputType;
    _max?: ContentStatusHistoryMaxAggregateInputType;
};
export type GetContentStatusHistoryAggregateType<T extends ContentStatusHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateContentStatusHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentStatusHistory[P]> : Prisma.GetScalarType<T[P], AggregateContentStatusHistory[P]>;
};
export type ContentStatusHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentStatusHistoryWhereInput;
    orderBy?: Prisma.ContentStatusHistoryOrderByWithAggregationInput | Prisma.ContentStatusHistoryOrderByWithAggregationInput[];
    by: Prisma.ContentStatusHistoryScalarFieldEnum[] | Prisma.ContentStatusHistoryScalarFieldEnum;
    having?: Prisma.ContentStatusHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentStatusHistoryCountAggregateInputType | true;
    _min?: ContentStatusHistoryMinAggregateInputType;
    _max?: ContentStatusHistoryMaxAggregateInputType;
};
export type ContentStatusHistoryGroupByOutputType = {
    id: string;
    contentId: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date;
    createdAt: Date;
    _count: ContentStatusHistoryCountAggregateOutputType | null;
    _min: ContentStatusHistoryMinAggregateOutputType | null;
    _max: ContentStatusHistoryMaxAggregateOutputType | null;
};
type GetContentStatusHistoryGroupByPayload<T extends ContentStatusHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentStatusHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentStatusHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentStatusHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentStatusHistoryGroupByOutputType[P]>;
}>>;
export type ContentStatusHistoryWhereInput = {
    AND?: Prisma.ContentStatusHistoryWhereInput | Prisma.ContentStatusHistoryWhereInput[];
    OR?: Prisma.ContentStatusHistoryWhereInput[];
    NOT?: Prisma.ContentStatusHistoryWhereInput | Prisma.ContentStatusHistoryWhereInput[];
    id?: Prisma.StringFilter<"ContentStatusHistory"> | string;
    contentId?: Prisma.StringFilter<"ContentStatusHistory"> | string;
    status?: Prisma.EnumContentStatusFilter<"ContentStatusHistory"> | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFilter<"ContentStatusHistory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ContentStatusHistory"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
};
export type ContentStatusHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.ContentOrderByWithRelationInput;
};
export type ContentStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ContentStatusHistoryWhereInput | Prisma.ContentStatusHistoryWhereInput[];
    OR?: Prisma.ContentStatusHistoryWhereInput[];
    NOT?: Prisma.ContentStatusHistoryWhereInput | Prisma.ContentStatusHistoryWhereInput[];
    contentId?: Prisma.StringFilter<"ContentStatusHistory"> | string;
    status?: Prisma.EnumContentStatusFilter<"ContentStatusHistory"> | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFilter<"ContentStatusHistory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ContentStatusHistory"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
}, "id">;
export type ContentStatusHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ContentStatusHistoryCountOrderByAggregateInput;
    _max?: Prisma.ContentStatusHistoryMaxOrderByAggregateInput;
    _min?: Prisma.ContentStatusHistoryMinOrderByAggregateInput;
};
export type ContentStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentStatusHistoryScalarWhereWithAggregatesInput | Prisma.ContentStatusHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentStatusHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentStatusHistoryScalarWhereWithAggregatesInput | Prisma.ContentStatusHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContentStatusHistory"> | string;
    contentId?: Prisma.StringWithAggregatesFilter<"ContentStatusHistory"> | string;
    status?: Prisma.EnumContentStatusWithAggregatesFilter<"ContentStatusHistory"> | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeWithAggregatesFilter<"ContentStatusHistory"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContentStatusHistory"> | Date | string;
};
export type ContentStatusHistoryCreateInput = {
    id?: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date | string;
    createdAt?: Date | string;
    content: Prisma.ContentCreateNestedOneWithoutStatusInput;
};
export type ContentStatusHistoryUncheckedCreateInput = {
    id?: string;
    contentId: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date | string;
    createdAt?: Date | string;
};
export type ContentStatusHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.ContentUpdateOneRequiredWithoutStatusNestedInput;
};
export type ContentStatusHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentStatusHistoryCreateManyInput = {
    id?: string;
    contentId: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date | string;
    createdAt?: Date | string;
};
export type ContentStatusHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentStatusHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentStatusHistoryListRelationFilter = {
    every?: Prisma.ContentStatusHistoryWhereInput;
    some?: Prisma.ContentStatusHistoryWhereInput;
    none?: Prisma.ContentStatusHistoryWhereInput;
};
export type ContentStatusHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentStatusHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentStatusHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentStatusHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentStatusHistoryCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentStatusHistoryCreateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput> | Prisma.ContentStatusHistoryCreateWithoutContentInput[] | Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput | Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentStatusHistoryCreateManyContentInputEnvelope;
    connect?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
};
export type ContentStatusHistoryUncheckedCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentStatusHistoryCreateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput> | Prisma.ContentStatusHistoryCreateWithoutContentInput[] | Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput | Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentStatusHistoryCreateManyContentInputEnvelope;
    connect?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
};
export type ContentStatusHistoryUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentStatusHistoryCreateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput> | Prisma.ContentStatusHistoryCreateWithoutContentInput[] | Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput | Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentStatusHistoryUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentStatusHistoryUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentStatusHistoryCreateManyContentInputEnvelope;
    set?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    disconnect?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    delete?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    connect?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    update?: Prisma.ContentStatusHistoryUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentStatusHistoryUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentStatusHistoryUpdateManyWithWhereWithoutContentInput | Prisma.ContentStatusHistoryUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentStatusHistoryScalarWhereInput | Prisma.ContentStatusHistoryScalarWhereInput[];
};
export type ContentStatusHistoryUncheckedUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentStatusHistoryCreateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput> | Prisma.ContentStatusHistoryCreateWithoutContentInput[] | Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput | Prisma.ContentStatusHistoryCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentStatusHistoryUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentStatusHistoryUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentStatusHistoryCreateManyContentInputEnvelope;
    set?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    disconnect?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    delete?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    connect?: Prisma.ContentStatusHistoryWhereUniqueInput | Prisma.ContentStatusHistoryWhereUniqueInput[];
    update?: Prisma.ContentStatusHistoryUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentStatusHistoryUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentStatusHistoryUpdateManyWithWhereWithoutContentInput | Prisma.ContentStatusHistoryUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentStatusHistoryScalarWhereInput | Prisma.ContentStatusHistoryScalarWhereInput[];
};
export type EnumContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContentStatus;
};
export type ContentStatusHistoryCreateWithoutContentInput = {
    id?: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date | string;
    createdAt?: Date | string;
};
export type ContentStatusHistoryUncheckedCreateWithoutContentInput = {
    id?: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date | string;
    createdAt?: Date | string;
};
export type ContentStatusHistoryCreateOrConnectWithoutContentInput = {
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentStatusHistoryCreateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput>;
};
export type ContentStatusHistoryCreateManyContentInputEnvelope = {
    data: Prisma.ContentStatusHistoryCreateManyContentInput | Prisma.ContentStatusHistoryCreateManyContentInput[];
    skipDuplicates?: boolean;
};
export type ContentStatusHistoryUpsertWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentStatusHistoryUpdateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.ContentStatusHistoryCreateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedCreateWithoutContentInput>;
};
export type ContentStatusHistoryUpdateWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentStatusHistoryUpdateWithoutContentInput, Prisma.ContentStatusHistoryUncheckedUpdateWithoutContentInput>;
};
export type ContentStatusHistoryUpdateManyWithWhereWithoutContentInput = {
    where: Prisma.ContentStatusHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentStatusHistoryUpdateManyMutationInput, Prisma.ContentStatusHistoryUncheckedUpdateManyWithoutContentInput>;
};
export type ContentStatusHistoryScalarWhereInput = {
    AND?: Prisma.ContentStatusHistoryScalarWhereInput | Prisma.ContentStatusHistoryScalarWhereInput[];
    OR?: Prisma.ContentStatusHistoryScalarWhereInput[];
    NOT?: Prisma.ContentStatusHistoryScalarWhereInput | Prisma.ContentStatusHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ContentStatusHistory"> | string;
    contentId?: Prisma.StringFilter<"ContentStatusHistory"> | string;
    status?: Prisma.EnumContentStatusFilter<"ContentStatusHistory"> | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFilter<"ContentStatusHistory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ContentStatusHistory"> | Date | string;
};
export type ContentStatusHistoryCreateManyContentInput = {
    id?: string;
    status: $Enums.ContentStatus;
    effectiveAt: Date | string;
    createdAt?: Date | string;
};
export type ContentStatusHistoryUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentStatusHistoryUncheckedUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentStatusHistoryUncheckedUpdateManyWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus;
    effectiveAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentStatusHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    status?: boolean;
    effectiveAt?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentStatusHistory"]>;
export type ContentStatusHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    status?: boolean;
    effectiveAt?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentStatusHistory"]>;
export type ContentStatusHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    status?: boolean;
    effectiveAt?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentStatusHistory"]>;
export type ContentStatusHistorySelectScalar = {
    id?: boolean;
    contentId?: boolean;
    status?: boolean;
    effectiveAt?: boolean;
    createdAt?: boolean;
};
export type ContentStatusHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contentId" | "status" | "effectiveAt" | "createdAt", ExtArgs["result"]["contentStatusHistory"]>;
export type ContentStatusHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type $ContentStatusHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentStatusHistory";
    objects: {
        content: Prisma.$ContentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contentId: string;
        status: $Enums.ContentStatus;
        effectiveAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["contentStatusHistory"]>;
    composites: {};
};
export type ContentStatusHistoryGetPayload<S extends boolean | null | undefined | ContentStatusHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload, S>;
export type ContentStatusHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentStatusHistoryCountAggregateInputType | true;
};
export interface ContentStatusHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentStatusHistory'];
        meta: {
            name: 'ContentStatusHistory';
        };
    };
    findUnique<T extends ContentStatusHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContentStatusHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContentStatusHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentStatusHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContentStatusHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContentStatusHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, ContentStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContentStatusHistoryCreateArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContentStatusHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContentStatusHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContentStatusHistoryDeleteArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContentStatusHistoryUpdateArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContentStatusHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContentStatusHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContentStatusHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContentStatusHistoryUpsertArgs>(args: Prisma.SelectSubset<T, ContentStatusHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentStatusHistoryClient<runtime.Types.Result.GetResult<Prisma.$ContentStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContentStatusHistoryCountArgs>(args?: Prisma.Subset<T, ContentStatusHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentStatusHistoryCountAggregateOutputType> : number>;
    aggregate<T extends ContentStatusHistoryAggregateArgs>(args: Prisma.Subset<T, ContentStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetContentStatusHistoryAggregateType<T>>;
    groupBy<T extends ContentStatusHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentStatusHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentStatusHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContentStatusHistoryFieldRefs;
}
export interface Prisma__ContentStatusHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContentStatusHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"ContentStatusHistory", 'String'>;
    readonly contentId: Prisma.FieldRef<"ContentStatusHistory", 'String'>;
    readonly status: Prisma.FieldRef<"ContentStatusHistory", 'ContentStatus'>;
    readonly effectiveAt: Prisma.FieldRef<"ContentStatusHistory", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ContentStatusHistory", 'DateTime'>;
}
export type ContentStatusHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
};
export type ContentStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
};
export type ContentStatusHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentStatusHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentStatusHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentStatusHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentStatusHistoryCreateInput, Prisma.ContentStatusHistoryUncheckedCreateInput>;
};
export type ContentStatusHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContentStatusHistoryCreateManyInput | Prisma.ContentStatusHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContentStatusHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    data: Prisma.ContentStatusHistoryCreateManyInput | Prisma.ContentStatusHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContentStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContentStatusHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentStatusHistoryUpdateInput, Prisma.ContentStatusHistoryUncheckedUpdateInput>;
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
};
export type ContentStatusHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContentStatusHistoryUpdateManyMutationInput, Prisma.ContentStatusHistoryUncheckedUpdateManyInput>;
    where?: Prisma.ContentStatusHistoryWhereInput;
    limit?: number;
};
export type ContentStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentStatusHistoryUpdateManyMutationInput, Prisma.ContentStatusHistoryUncheckedUpdateManyInput>;
    where?: Prisma.ContentStatusHistoryWhereInput;
    limit?: number;
    include?: Prisma.ContentStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContentStatusHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentStatusHistoryCreateInput, Prisma.ContentStatusHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContentStatusHistoryUpdateInput, Prisma.ContentStatusHistoryUncheckedUpdateInput>;
};
export type ContentStatusHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
    where: Prisma.ContentStatusHistoryWhereUniqueInput;
};
export type ContentStatusHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentStatusHistoryWhereInput;
    limit?: number;
};
export type ContentStatusHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentStatusHistorySelect<ExtArgs> | null;
    omit?: Prisma.ContentStatusHistoryOmit<ExtArgs> | null;
    include?: Prisma.ContentStatusHistoryInclude<ExtArgs> | null;
};
export {};
