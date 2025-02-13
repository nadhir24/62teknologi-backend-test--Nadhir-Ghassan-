PGDMP  :                
    {         	   Devtest62    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 	   Devtest62    DATABASE     �   CREATE DATABASE "Devtest62" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "Devtest62";
                postgres    false            �            1259    16400    restaurants    TABLE     O  CREATE TABLE public.restaurants (
    id integer NOT NULL,
    name character varying(255),
    location character varying(255),
    latitude numeric,
    longitude numeric,
    radius integer,
    categories jsonb,
    locale character varying(255),
    "limit" integer,
    "offset" integer,
    sort_by character varying(255),
    price character varying(255),
    open_now boolean,
    open_at timestamp without time zone,
    attributes jsonb,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.restaurants;
       public         heap    postgres    false            �            1259    16399    restaurants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.restaurants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.restaurants_id_seq;
       public          postgres    false    216            �           0    0    restaurants_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.restaurants.id;
          public          postgres    false    215            P           2604    16403    restaurants id    DEFAULT     p   ALTER TABLE ONLY public.restaurants ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);
 =   ALTER TABLE public.restaurants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16400    restaurants 
   TABLE DATA           �   COPY public.restaurants (id, name, location, latitude, longitude, radius, categories, locale, "limit", "offset", sort_by, price, open_now, open_at, attributes, created_at, updated_at) FROM stdin;
    public          postgres    false    216   (       �           0    0    restaurants_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.restaurants_id_seq', 27, true);
          public          postgres    false    215            T           2606    16409    restaurants restaurants_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.restaurants DROP CONSTRAINT restaurants_pkey;
       public            postgres    false    216            �   �  x�ŗoO�:�_�~
�B��Y#۱��h�6vH��2�i��%n����qK� {�$Dn��?�wN8t�@W��l15U���\Mvˑ)L����Z���F��汹�]6ߐ���������J{[�`��o�mŔ��M)�����m��7��W�����w������g���`m*p���♥F�*�_�47��i�u��*e�JU��,���y�ǹ��f��I�?��������x�D�7�cP(�9Յ�!��Ԧ�b���S��}7"���tٷuN�.���W(�������`��$�1�s���7�4��p������Z�A�p��+�J?��й�6����X$t��E�÷�Q	�V_[�2R	S������p�����k�y재o�=	�\5te��׵�k�(���b�L�*tݚ��^^������*N"�d�d��X�`gR�L��&�논� �É-�dO0���M��Mq�٬(NsmW��]m�@);;�%�) ]aUT�(`wR�ӈ'
�gX"f ��_�_9�N�Υ�q�c����gJ|"�Y��,$��e4��r��y���!��߲[�Ȼ����K�wW{W�@�$��6�4���;���^*V���"�a>�A>�p�*_�rBF�J6�v�$��#������%Ӎ�a-�S[G�K���3��Y��*�bR�(�
[X{h����u��5���<�Ť@��]M	'�-4f�&�:�;�<A� �gnyڝ�׀28��%x��Q��4\��C�J"��O�oz�]�A��0��e�Hx���rv�Ij�#J*���[O�F¥��uh�`Q�H���Ԗȓ�P�-#�3��Q��tf�'��q�y)�
�wyyG>���)�m�+ޅ��#���|�Z6��4�� ö�z��ߑs�5���	�D%h�m�):�7���2� z7��	b�R_b!�!w�
[���T��c���P������8H�U�×�7d>��d̕�s�("^��p	����<�6t���CB�����nmr����ɩI���^��W��$,,t/W�ꂶE��)&NI�>�����Ǖ߫&�,/Ē�R%ޅM9�D��Yj`)�0���㏈���?6��9Y�<÷Ɵ/5�Q����#K     