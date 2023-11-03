import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

export interface restaurantsAttributes {
    id?: number;
    name?: string;
    location?: string;
    latitude?: string;
    longitude?: string;
    radius?: number;
    categories?: object;
    locale?: string;
    limit?: number;
    offset?: number;
    sort_by?: string;
    price?: string;
    open_now?: boolean;
    open_at?: Date;
    attributes?: object;
    created_at?: Date;
    updated_at?: Date;
}

@Table({ tableName: "restaurants", schema: "public", timestamps: false })
export class restaurants extends Model<restaurantsAttributes, restaurantsAttributes> implements restaurantsAttributes {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER, defaultValue: Sequelize.literal("nextval('restaurants_id_seq'::regclass)") })
    @Index({ name: "restaurants_pkey", using: "btree", unique: true })
    id?: number;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    name?: string;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    location?: string;
    @Column({ allowNull: true, type: DataType.DECIMAL })
    latitude?: string;
    @Column({ allowNull: true, type: DataType.DECIMAL })
    longitude?: string;
    @Column({ allowNull: true, type: DataType.INTEGER })
    radius?: number;
    @Column({ allowNull: true, type: DataType.JSONB })
    categories?: object;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    locale?: string;
    @Column({ allowNull: true, type: DataType.INTEGER })
    limit?: number;
    @Column({ allowNull: true, type: DataType.INTEGER })
    offset?: number;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    sort_by?: string;
    @Column({ allowNull: true, type: DataType.STRING(255) })
    price?: string;
    @Column({ allowNull: true, type: DataType.BOOLEAN })
    open_now?: boolean;
    @Column({ allowNull: true, type: DataType.DATE(6) })
    open_at?: Date;
    @Column({ allowNull: true, type: DataType.JSONB })
    attributes?: object;
    @Column({ allowNull: true, type: DataType.DATE(6), defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") })
    created_at?: Date;
    @Column({ allowNull: true, type: DataType.DATE(6), defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") })
    updated_at?: Date;
}