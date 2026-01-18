import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContentSEOModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentSEOPayload>;
export type AggregateContentSEO = {
    _count: ContentSEOCountAggregateOutputType | null;
    _min: ContentSEOMinAggregateOutputType | null;
    _max: ContentSEOMaxAggregateOutputType | null;
};
export type ContentSEOMinAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
};
export type ContentSEOMaxAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
};
export type ContentSEOCountAggregateOutputType = {
    id: number;
    contentId: number;
    metaTitle: number;
    metaDescription: number;
    canonicalUrl: number;
    _all: number;
};
export type ContentSEOMinAggregateInputType = {
    id?: true;
    contentId?: true;
    metaTitle?: true;
    metaDescription?: true;
    canonicalUrl?: true;
};
export type ContentSEOMaxAggregateInputType = {
    id?: true;
    contentId?: true;
    metaTitle?: true;
    metaDescription?: true;
    canonicalUrl?: true;
};
export type ContentSEOCountAggregateInputType = {
    id?: true;
    contentId?: true;
    metaTitle?: true;
    metaDescription?: true;
    canonicalUrl?: true;
    _all?: true;
};
export type ContentSEOAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSEOWhereInput;
    orderBy?: Prisma.ContentSEOOrderByWithRelationInput | Prisma.ContentSEOOrderByWithRelationInput[];
    cursor?: Prisma.ContentSEOWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContentSEOCountAggregateInputType;
    _min?: ContentSEOMinAggregateInputType;
    _max?: ContentSEOMaxAggregateInputType;
};
export type GetContentSEOAggregateType<T extends ContentSEOAggregateArgs> = {
    [P in keyof T & keyof AggregateContentSEO]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentSEO[P]> : Prisma.GetScalarType<T[P], AggregateContentSEO[P]>;
};
export type ContentSEOGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSEOWhereInput;
    orderBy?: Prisma.ContentSEOOrderByWithAggregationInput | Prisma.ContentSEOOrderByWithAggregationInput[];
    by: Prisma.ContentSEOScalarFieldEnum[] | Prisma.ContentSEOScalarFieldEnum;
    having?: Prisma.ContentSEOScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentSEOCountAggregateInputType | true;
    _min?: ContentSEOMinAggregateInputType;
    _max?: ContentSEOMaxAggregateInputType;
};
export type ContentSEOGroupByOutputType = {
    id: string;
    contentId: string;
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
    _count: ContentSEOCountAggregateOutputType | null;
    _min: ContentSEOMinAggregateOutputType | null;
    _max: ContentSEOMaxAggregateOutputType | null;
};
type GetContentSEOGroupByPayload<T extends ContentSEOGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentSEOGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentSEOGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentSEOGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentSEOGroupByOutputType[P]>;
}>>;
export type ContentSEOWhereInput = {
    AND?: Prisma.ContentSEOWhereInput | Prisma.ContentSEOWhereInput[];
    OR?: Prisma.ContentSEOWhereInput[];
    NOT?: Prisma.ContentSEOWhereInput | Prisma.ContentSEOWhereInput[];
    id?: Prisma.StringFilter<"ContentSEO"> | string;
    contentId?: Prisma.StringFilter<"ContentSEO"> | string;
    metaTitle?: Prisma.StringNullableFilter<"ContentSEO"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"ContentSEO"> | string | null;
    canonicalUrl?: Prisma.StringNullableFilter<"ContentSEO"> | string | null;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
};
export type ContentSEOOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    canonicalUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.ContentOrderByWithRelationInput;
};
export type ContentSEOWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    contentId?: string;
    AND?: Prisma.ContentSEOWhereInput | Prisma.ContentSEOWhereInput[];
    OR?: Prisma.ContentSEOWhereInput[];
    NOT?: Prisma.ContentSEOWhereInput | Prisma.ContentSEOWhereInput[];
    metaTitle?: Prisma.StringNullableFilter<"ContentSEO"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"ContentSEO"> | string | null;
    canonicalUrl?: Prisma.StringNullableFilter<"ContentSEO"> | string | null;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
}, "id" | "contentId">;
export type ContentSEOOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    canonicalUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ContentSEOCountOrderByAggregateInput;
    _max?: Prisma.ContentSEOMaxOrderByAggregateInput;
    _min?: Prisma.ContentSEOMinOrderByAggregateInput;
};
export type ContentSEOScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentSEOScalarWhereWithAggregatesInput | Prisma.ContentSEOScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentSEOScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentSEOScalarWhereWithAggregatesInput | Prisma.ContentSEOScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContentSEO"> | string;
    contentId?: Prisma.StringWithAggregatesFilter<"ContentSEO"> | string;
    metaTitle?: Prisma.StringNullableWithAggregatesFilter<"ContentSEO"> | string | null;
    metaDescription?: Prisma.StringNullableWithAggregatesFilter<"ContentSEO"> | string | null;
    canonicalUrl?: Prisma.StringNullableWithAggregatesFilter<"ContentSEO"> | string | null;
};
export type ContentSEOCreateInput = {
    id?: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    canonicalUrl?: string | null;
    content: Prisma.ContentCreateNestedOneWithoutSeoInput;
};
export type ContentSEOUncheckedCreateInput = {
    id?: string;
    contentId: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    canonicalUrl?: string | null;
};
export type ContentSEOUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonicalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.ContentUpdateOneRequiredWithoutSeoNestedInput;
};
export type ContentSEOUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonicalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContentSEOCreateManyInput = {
    id?: string;
    contentId: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    canonicalUrl?: string | null;
};
export type ContentSEOUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonicalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContentSEOUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonicalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContentSEONullableScalarRelationFilter = {
    is?: Prisma.ContentSEOWhereInput | null;
    isNot?: Prisma.ContentSEOWhereInput | null;
};
export type ContentSEOCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    canonicalUrl?: Prisma.SortOrder;
};
export type ContentSEOMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    canonicalUrl?: Prisma.SortOrder;
};
export type ContentSEOMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    canonicalUrl?: Prisma.SortOrder;
};
export type ContentSEOCreateNestedOneWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentSEOCreateWithoutContentInput, Prisma.ContentSEOUncheckedCreateWithoutContentInput>;
    connectOrCreate?: Prisma.ContentSEOCreateOrConnectWithoutContentInput;
    connect?: Prisma.ContentSEOWhereUniqueInput;
};
export type ContentSEOUncheckedCreateNestedOneWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentSEOCreateWithoutContentInput, Prisma.ContentSEOUncheckedCreateWithoutContentInput>;
    connectOrCreate?: Prisma.ContentSEOCreateOrConnectWithoutContentInput;
    connect?: Prisma.ContentSEOWhereUniqueInput;
};
export type ContentSEOUpdateOneWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentSEOCreateWithoutContentInput, Prisma.ContentSEOUncheckedCreateWithoutContentInput>;
    connectOrCreate?: Prisma.ContentSEOCreateOrConnectWithoutContentInput;
    upsert?: Prisma.ContentSEOUpsertWithoutContentInput;
    disconnect?: Prisma.ContentSEOWhereInput | boolean;
    delete?: Prisma.ContentSEOWhereInput | boolean;
    connect?: Prisma.ContentSEOWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentSEOUpdateToOneWithWhereWithoutContentInput, Prisma.ContentSEOUpdateWithoutContentInput>, Prisma.ContentSEOUncheckedUpdateWithoutContentInput>;
};
export type ContentSEOUncheckedUpdateOneWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentSEOCreateWithoutContentInput, Prisma.ContentSEOUncheckedCreateWithoutContentInput>;
    connectOrCreate?: Prisma.ContentSEOCreateOrConnectWithoutContentInput;
    upsert?: Prisma.ContentSEOUpsertWithoutContentInput;
    disconnect?: Prisma.ContentSEOWhereInput | boolean;
    delete?: Prisma.ContentSEOWhereInput | boolean;
    connect?: Prisma.ContentSEOWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContentSEOUpdateToOneWithWhereWithoutContentInput, Prisma.ContentSEOUpdateWithoutContentInput>, Prisma.ContentSEOUncheckedUpdateWithoutContentInput>;
};
export type ContentSEOCreateWithoutContentInput = {
    id?: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    canonicalUrl?: string | null;
};
export type ContentSEOUncheckedCreateWithoutContentInput = {
    id?: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    canonicalUrl?: string | null;
};
export type ContentSEOCreateOrConnectWithoutContentInput = {
    where: Prisma.ContentSEOWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentSEOCreateWithoutContentInput, Prisma.ContentSEOUncheckedCreateWithoutContentInput>;
};
export type ContentSEOUpsertWithoutContentInput = {
    update: Prisma.XOR<Prisma.ContentSEOUpdateWithoutContentInput, Prisma.ContentSEOUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.ContentSEOCreateWithoutContentInput, Prisma.ContentSEOUncheckedCreateWithoutContentInput>;
    where?: Prisma.ContentSEOWhereInput;
};
export type ContentSEOUpdateToOneWithWhereWithoutContentInput = {
    where?: Prisma.ContentSEOWhereInput;
    data: Prisma.XOR<Prisma.ContentSEOUpdateWithoutContentInput, Prisma.ContentSEOUncheckedUpdateWithoutContentInput>;
};
export type ContentSEOUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonicalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContentSEOUncheckedUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonicalUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContentSEOSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    canonicalUrl?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentSEO"]>;
export type ContentSEOSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    canonicalUrl?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentSEO"]>;
export type ContentSEOSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    canonicalUrl?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentSEO"]>;
export type ContentSEOSelectScalar = {
    id?: boolean;
    contentId?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    canonicalUrl?: boolean;
};
export type ContentSEOOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contentId" | "metaTitle" | "metaDescription" | "canonicalUrl", ExtArgs["result"]["contentSEO"]>;
export type ContentSEOInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentSEOIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentSEOIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type $ContentSEOPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentSEO";
    objects: {
        content: Prisma.$ContentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contentId: string;
        metaTitle: string | null;
        metaDescription: string | null;
        canonicalUrl: string | null;
    }, ExtArgs["result"]["contentSEO"]>;
    composites: {};
};
export type ContentSEOGetPayload<S extends boolean | null | undefined | ContentSEODefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload, S>;
export type ContentSEOCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentSEOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentSEOCountAggregateInputType | true;
};
export interface ContentSEODelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentSEO'];
        meta: {
            name: 'ContentSEO';
        };
    };
    findUnique<T extends ContentSEOFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentSEOFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContentSEOFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentSEOFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContentSEOFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentSEOFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContentSEOFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentSEOFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContentSEOFindManyArgs>(args?: Prisma.SelectSubset<T, ContentSEOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContentSEOCreateArgs>(args: Prisma.SelectSubset<T, ContentSEOCreateArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContentSEOCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentSEOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContentSEOCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentSEOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContentSEODeleteArgs>(args: Prisma.SelectSubset<T, ContentSEODeleteArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContentSEOUpdateArgs>(args: Prisma.SelectSubset<T, ContentSEOUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContentSEODeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentSEODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContentSEOUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentSEOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContentSEOUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentSEOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContentSEOUpsertArgs>(args: Prisma.SelectSubset<T, ContentSEOUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentSEOClient<runtime.Types.Result.GetResult<Prisma.$ContentSEOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContentSEOCountArgs>(args?: Prisma.Subset<T, ContentSEOCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentSEOCountAggregateOutputType> : number>;
    aggregate<T extends ContentSEOAggregateArgs>(args: Prisma.Subset<T, ContentSEOAggregateArgs>): Prisma.PrismaPromise<GetContentSEOAggregateType<T>>;
    groupBy<T extends ContentSEOGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentSEOGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentSEOGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentSEOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentSEOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContentSEOFieldRefs;
}
export interface Prisma__ContentSEOClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContentSEOFieldRefs {
    readonly id: Prisma.FieldRef<"ContentSEO", 'String'>;
    readonly contentId: Prisma.FieldRef<"ContentSEO", 'String'>;
    readonly metaTitle: Prisma.FieldRef<"ContentSEO", 'String'>;
    readonly metaDescription: Prisma.FieldRef<"ContentSEO", 'String'>;
    readonly canonicalUrl: Prisma.FieldRef<"ContentSEO", 'String'>;
}
export type ContentSEOFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where: Prisma.ContentSEOWhereUniqueInput;
};
export type ContentSEOFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where: Prisma.ContentSEOWhereUniqueInput;
};
export type ContentSEOFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where?: Prisma.ContentSEOWhereInput;
    orderBy?: Prisma.ContentSEOOrderByWithRelationInput | Prisma.ContentSEOOrderByWithRelationInput[];
    cursor?: Prisma.ContentSEOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentSEOScalarFieldEnum | Prisma.ContentSEOScalarFieldEnum[];
};
export type ContentSEOFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where?: Prisma.ContentSEOWhereInput;
    orderBy?: Prisma.ContentSEOOrderByWithRelationInput | Prisma.ContentSEOOrderByWithRelationInput[];
    cursor?: Prisma.ContentSEOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentSEOScalarFieldEnum | Prisma.ContentSEOScalarFieldEnum[];
};
export type ContentSEOFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where?: Prisma.ContentSEOWhereInput;
    orderBy?: Prisma.ContentSEOOrderByWithRelationInput | Prisma.ContentSEOOrderByWithRelationInput[];
    cursor?: Prisma.ContentSEOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentSEOScalarFieldEnum | Prisma.ContentSEOScalarFieldEnum[];
};
export type ContentSEOCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentSEOCreateInput, Prisma.ContentSEOUncheckedCreateInput>;
};
export type ContentSEOCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContentSEOCreateManyInput | Prisma.ContentSEOCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContentSEOCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    data: Prisma.ContentSEOCreateManyInput | Prisma.ContentSEOCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContentSEOIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContentSEOUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentSEOUpdateInput, Prisma.ContentSEOUncheckedUpdateInput>;
    where: Prisma.ContentSEOWhereUniqueInput;
};
export type ContentSEOUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContentSEOUpdateManyMutationInput, Prisma.ContentSEOUncheckedUpdateManyInput>;
    where?: Prisma.ContentSEOWhereInput;
    limit?: number;
};
export type ContentSEOUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentSEOUpdateManyMutationInput, Prisma.ContentSEOUncheckedUpdateManyInput>;
    where?: Prisma.ContentSEOWhereInput;
    limit?: number;
    include?: Prisma.ContentSEOIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContentSEOUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where: Prisma.ContentSEOWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentSEOCreateInput, Prisma.ContentSEOUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContentSEOUpdateInput, Prisma.ContentSEOUncheckedUpdateInput>;
};
export type ContentSEODeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
    where: Prisma.ContentSEOWhereUniqueInput;
};
export type ContentSEODeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentSEOWhereInput;
    limit?: number;
};
export type ContentSEODefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentSEOSelect<ExtArgs> | null;
    omit?: Prisma.ContentSEOOmit<ExtArgs> | null;
    include?: Prisma.ContentSEOInclude<ExtArgs> | null;
};
export {};
