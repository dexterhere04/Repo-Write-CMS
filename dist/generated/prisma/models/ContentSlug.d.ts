import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContentSlugModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentSlugPayload>;
export type AggregateContentSlug = {
    _count: ContentSlugCountAggregateOutputType | null;
    _min: ContentSlugMinAggregateOutputType | null;
    _max: ContentSlugMaxAggregateOutputType | null;
};
export type ContentSlugMinAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type ContentSlugMaxAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type ContentSlugCountAggregateOutputType = {
    id: number;
    contentId: number;
    slug: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type ContentSlugMinAggregateInputType = {
    id?: true;
    contentId?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
};
export type ContentSlugMaxAggregateInputType = {
    id?: true;
    contentId?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
};
export type ContentSlugCountAggregateInputType = {
    id?: true;
    contentId?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type ContentSlugAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSlugWhereInput;
    orderBy?: Prisma.ContentSlugOrderByWithRelationInput | Prisma.ContentSlugOrderByWithRelationInput[];
    cursor?: Prisma.ContentSlugWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContentSlugCountAggregateInputType;
    _min?: ContentSlugMinAggregateInputType;
    _max?: ContentSlugMaxAggregateInputType;
};
export type GetContentSlugAggregateType<T extends ContentSlugAggregateArgs> = {
    [P in keyof T & keyof AggregateContentSlug]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentSlug[P]> : Prisma.GetScalarType<T[P], AggregateContentSlug[P]>;
};
export type ContentSlugGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSlugWhereInput;
    orderBy?: Prisma.ContentSlugOrderByWithAggregationInput | Prisma.ContentSlugOrderByWithAggregationInput[];
    by: Prisma.ContentSlugScalarFieldEnum[] | Prisma.ContentSlugScalarFieldEnum;
    having?: Prisma.ContentSlugScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentSlugCountAggregateInputType | true;
    _min?: ContentSlugMinAggregateInputType;
    _max?: ContentSlugMaxAggregateInputType;
};
export type ContentSlugGroupByOutputType = {
    id: string;
    contentId: string;
    slug: string;
    isActive: boolean;
    createdAt: Date;
    _count: ContentSlugCountAggregateOutputType | null;
    _min: ContentSlugMinAggregateOutputType | null;
    _max: ContentSlugMaxAggregateOutputType | null;
};
type GetContentSlugGroupByPayload<T extends ContentSlugGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentSlugGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentSlugGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentSlugGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentSlugGroupByOutputType[P]>;
}>>;
export type ContentSlugWhereInput = {
    AND?: Prisma.ContentSlugWhereInput | Prisma.ContentSlugWhereInput[];
    OR?: Prisma.ContentSlugWhereInput[];
    NOT?: Prisma.ContentSlugWhereInput | Prisma.ContentSlugWhereInput[];
    id?: Prisma.StringFilter<"ContentSlug"> | string;
    contentId?: Prisma.StringFilter<"ContentSlug"> | string;
    slug?: Prisma.StringFilter<"ContentSlug"> | string;
    isActive?: Prisma.BoolFilter<"ContentSlug"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContentSlug"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
};
export type ContentSlugOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.ContentOrderByWithRelationInput;
};
export type ContentSlugWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ContentSlugWhereInput | Prisma.ContentSlugWhereInput[];
    OR?: Prisma.ContentSlugWhereInput[];
    NOT?: Prisma.ContentSlugWhereInput | Prisma.ContentSlugWhereInput[];
    contentId?: Prisma.StringFilter<"ContentSlug"> | string;
    isActive?: Prisma.BoolFilter<"ContentSlug"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContentSlug"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
}, "id" | "slug">;
export type ContentSlugOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ContentSlugCountOrderByAggregateInput;
    _max?: Prisma.ContentSlugMaxOrderByAggregateInput;
    _min?: Prisma.ContentSlugMinOrderByAggregateInput;
};
export type ContentSlugScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentSlugScalarWhereWithAggregatesInput | Prisma.ContentSlugScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentSlugScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentSlugScalarWhereWithAggregatesInput | Prisma.ContentSlugScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContentSlug"> | string;
    contentId?: Prisma.StringWithAggregatesFilter<"ContentSlug"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"ContentSlug"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"ContentSlug"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContentSlug"> | Date | string;
};
export type ContentSlugCreateInput = {
    id?: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    content: Prisma.ContentCreateNestedOneWithoutSlugsInput;
};
export type ContentSlugUncheckedCreateInput = {
    id?: string;
    contentId: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ContentSlugUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.ContentUpdateOneRequiredWithoutSlugsNestedInput;
};
export type ContentSlugUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentSlugCreateManyInput = {
    id?: string;
    contentId: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ContentSlugUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentSlugUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentSlugListRelationFilter = {
    every?: Prisma.ContentSlugWhereInput;
    some?: Prisma.ContentSlugWhereInput;
    none?: Prisma.ContentSlugWhereInput;
};
export type ContentSlugOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentSlugCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentSlugMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentSlugMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentSlugCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentSlugCreateWithoutContentInput, Prisma.ContentSlugUncheckedCreateWithoutContentInput> | Prisma.ContentSlugCreateWithoutContentInput[] | Prisma.ContentSlugUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentSlugCreateOrConnectWithoutContentInput | Prisma.ContentSlugCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentSlugCreateManyContentInputEnvelope;
    connect?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
};
export type ContentSlugUncheckedCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentSlugCreateWithoutContentInput, Prisma.ContentSlugUncheckedCreateWithoutContentInput> | Prisma.ContentSlugCreateWithoutContentInput[] | Prisma.ContentSlugUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentSlugCreateOrConnectWithoutContentInput | Prisma.ContentSlugCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentSlugCreateManyContentInputEnvelope;
    connect?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
};
export type ContentSlugUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentSlugCreateWithoutContentInput, Prisma.ContentSlugUncheckedCreateWithoutContentInput> | Prisma.ContentSlugCreateWithoutContentInput[] | Prisma.ContentSlugUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentSlugCreateOrConnectWithoutContentInput | Prisma.ContentSlugCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentSlugUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentSlugUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentSlugCreateManyContentInputEnvelope;
    set?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    disconnect?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    delete?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    connect?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    update?: Prisma.ContentSlugUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentSlugUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentSlugUpdateManyWithWhereWithoutContentInput | Prisma.ContentSlugUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentSlugScalarWhereInput | Prisma.ContentSlugScalarWhereInput[];
};
export type ContentSlugUncheckedUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentSlugCreateWithoutContentInput, Prisma.ContentSlugUncheckedCreateWithoutContentInput> | Prisma.ContentSlugCreateWithoutContentInput[] | Prisma.ContentSlugUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentSlugCreateOrConnectWithoutContentInput | Prisma.ContentSlugCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentSlugUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentSlugUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentSlugCreateManyContentInputEnvelope;
    set?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    disconnect?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    delete?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    connect?: Prisma.ContentSlugWhereUniqueInput | Prisma.ContentSlugWhereUniqueInput[];
    update?: Prisma.ContentSlugUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentSlugUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentSlugUpdateManyWithWhereWithoutContentInput | Prisma.ContentSlugUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentSlugScalarWhereInput | Prisma.ContentSlugScalarWhereInput[];
};
export type ContentSlugCreateWithoutContentInput = {
    id?: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ContentSlugUncheckedCreateWithoutContentInput = {
    id?: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ContentSlugCreateOrConnectWithoutContentInput = {
    where: Prisma.ContentSlugWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentSlugCreateWithoutContentInput, Prisma.ContentSlugUncheckedCreateWithoutContentInput>;
};
export type ContentSlugCreateManyContentInputEnvelope = {
    data: Prisma.ContentSlugCreateManyContentInput | Prisma.ContentSlugCreateManyContentInput[];
    skipDuplicates?: boolean;
};
export type ContentSlugUpsertWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentSlugWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentSlugUpdateWithoutContentInput, Prisma.ContentSlugUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.ContentSlugCreateWithoutContentInput, Prisma.ContentSlugUncheckedCreateWithoutContentInput>;
};
export type ContentSlugUpdateWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentSlugWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentSlugUpdateWithoutContentInput, Prisma.ContentSlugUncheckedUpdateWithoutContentInput>;
};
export type ContentSlugUpdateManyWithWhereWithoutContentInput = {
    where: Prisma.ContentSlugScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentSlugUpdateManyMutationInput, Prisma.ContentSlugUncheckedUpdateManyWithoutContentInput>;
};
export type ContentSlugScalarWhereInput = {
    AND?: Prisma.ContentSlugScalarWhereInput | Prisma.ContentSlugScalarWhereInput[];
    OR?: Prisma.ContentSlugScalarWhereInput[];
    NOT?: Prisma.ContentSlugScalarWhereInput | Prisma.ContentSlugScalarWhereInput[];
    id?: Prisma.StringFilter<"ContentSlug"> | string;
    contentId?: Prisma.StringFilter<"ContentSlug"> | string;
    slug?: Prisma.StringFilter<"ContentSlug"> | string;
    isActive?: Prisma.BoolFilter<"ContentSlug"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContentSlug"> | Date | string;
};
export type ContentSlugCreateManyContentInput = {
    id?: string;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ContentSlugUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentSlugUncheckedUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentSlugUncheckedUpdateManyWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentSlugSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentSlug"]>;
export type ContentSlugSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentSlug"]>;
export type ContentSlugSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentSlug"]>;
export type ContentSlugSelectScalar = {
    id?: boolean;
    contentId?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type ContentSlugOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contentId" | "slug" | "isActive" | "createdAt", ExtArgs["result"]["contentSlug"]>;
export type ContentSlugInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentSlugIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentSlugIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type $ContentSlugPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentSlug";
    objects: {
        content: Prisma.$ContentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contentId: string;
        slug: string;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["contentSlug"]>;
    composites: {};
};
export type ContentSlugGetPayload<S extends boolean | null | undefined | ContentSlugDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload, S>;
export type ContentSlugCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentSlugFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentSlugCountAggregateInputType | true;
};
export interface ContentSlugDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentSlug'];
        meta: {
            name: 'ContentSlug';
        };
    };
    findUnique<T extends ContentSlugFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentSlugFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContentSlugFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentSlugFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContentSlugFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentSlugFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContentSlugFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentSlugFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContentSlugFindManyArgs>(args?: Prisma.SelectSubset<T, ContentSlugFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContentSlugCreateArgs>(args: Prisma.SelectSubset<T, ContentSlugCreateArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContentSlugCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentSlugCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContentSlugCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentSlugCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContentSlugDeleteArgs>(args: Prisma.SelectSubset<T, ContentSlugDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContentSlugUpdateArgs>(args: Prisma.SelectSubset<T, ContentSlugUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContentSlugDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentSlugDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContentSlugUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentSlugUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContentSlugUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentSlugUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContentSlugUpsertArgs>(args: Prisma.SelectSubset<T, ContentSlugUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentSlugClient<runtime.Types.Result.GetResult<Prisma.$ContentSlugPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContentSlugCountArgs>(args?: Prisma.Subset<T, ContentSlugCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentSlugCountAggregateOutputType> : number>;
    aggregate<T extends ContentSlugAggregateArgs>(args: Prisma.Subset<T, ContentSlugAggregateArgs>): Prisma.PrismaPromise<GetContentSlugAggregateType<T>>;
    groupBy<T extends ContentSlugGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentSlugGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentSlugGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentSlugGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentSlugGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContentSlugFieldRefs;
}
export interface Prisma__ContentSlugClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContentSlugFieldRefs {
    readonly id: Prisma.FieldRef<"ContentSlug", 'String'>;
    readonly contentId: Prisma.FieldRef<"ContentSlug", 'String'>;
    readonly slug: Prisma.FieldRef<"ContentSlug", 'String'>;
    readonly isActive: Prisma.FieldRef<"ContentSlug", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ContentSlug", 'DateTime'>;
}
export type ContentSlugFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    where: Prisma.ContentSlugWhereUniqueInput;
};
export type ContentSlugFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    where: Prisma.ContentSlugWhereUniqueInput;
};
export type ContentSlugFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentSlugFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentSlugFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContentSlugCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentSlugCreateInput, Prisma.ContentSlugUncheckedCreateInput>;
};
export type ContentSlugCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContentSlugCreateManyInput | Prisma.ContentSlugCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContentSlugCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    data: Prisma.ContentSlugCreateManyInput | Prisma.ContentSlugCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContentSlugIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContentSlugUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentSlugUpdateInput, Prisma.ContentSlugUncheckedUpdateInput>;
    where: Prisma.ContentSlugWhereUniqueInput;
};
export type ContentSlugUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContentSlugUpdateManyMutationInput, Prisma.ContentSlugUncheckedUpdateManyInput>;
    where?: Prisma.ContentSlugWhereInput;
    limit?: number;
};
export type ContentSlugUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentSlugUpdateManyMutationInput, Prisma.ContentSlugUncheckedUpdateManyInput>;
    where?: Prisma.ContentSlugWhereInput;
    limit?: number;
    include?: Prisma.ContentSlugIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContentSlugUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    where: Prisma.ContentSlugWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentSlugCreateInput, Prisma.ContentSlugUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContentSlugUpdateInput, Prisma.ContentSlugUncheckedUpdateInput>;
};
export type ContentSlugDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
    where: Prisma.ContentSlugWhereUniqueInput;
};
export type ContentSlugDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSlugWhereInput;
    limit?: number;
};
export type ContentSlugDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSlugSelect<ExtArgs> | null;
    omit?: Prisma.ContentSlugOmit<ExtArgs> | null;
    include?: Prisma.ContentSlugInclude<ExtArgs> | null;
};
export {};
