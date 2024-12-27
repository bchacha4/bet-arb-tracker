export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      arb_props: {
        Row: {
          Arbitrage_Margin: number | null
          Away_Team: string | null
          Bookmaker_1: string | null
          Bookmaker_2: string | null
          created_at: string
          Home_Team: string | null
          id: number
          Line: number | null
          Link_1: string | null
          Link_2: string | null
          Odds_1: number | null
          Odds_2: number | null
          Outcome_1: string | null
          Outcome_2: string | null
          Player: string | null
          Prop: string | null
          Sport: string | null
        }
        Insert: {
          Arbitrage_Margin?: number | null
          Away_Team?: string | null
          Bookmaker_1?: string | null
          Bookmaker_2?: string | null
          created_at?: string
          Home_Team?: string | null
          id?: number
          Line?: number | null
          Link_1?: string | null
          Link_2?: string | null
          Odds_1?: number | null
          Odds_2?: number | null
          Outcome_1?: string | null
          Outcome_2?: string | null
          Player?: string | null
          Prop?: string | null
          Sport?: string | null
        }
        Update: {
          Arbitrage_Margin?: number | null
          Away_Team?: string | null
          Bookmaker_1?: string | null
          Bookmaker_2?: string | null
          created_at?: string
          Home_Team?: string | null
          id?: number
          Line?: number | null
          Link_1?: string | null
          Link_2?: string | null
          Odds_1?: number | null
          Odds_2?: number | null
          Outcome_1?: string | null
          Outcome_2?: string | null
          Player?: string | null
          Prop?: string | null
          Sport?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string | null
          email_sent: boolean | null
          id: string
          message: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email_sent?: boolean | null
          id?: string
          message: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          email_sent?: boolean | null
          id?: string
          message?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email_notifications: boolean | null
          id: string
        }
        Insert: {
          created_at?: string
          email_notifications?: boolean | null
          id: string
        }
        Update: {
          created_at?: string
          email_notifications?: boolean | null
          id?: string
        }
        Relationships: []
      }
      test_arb_props: {
        Row: {
          Arbitrage_Margin: number | null
          Away_Team: string | null
          Bookmaker_1: string | null
          Bookmaker_2: string | null
          created_at: string
          Home_Team: string | null
          id: number
          Line: number | null
          Link_1: string | null
          Link_2: string | null
          Odds_1: number | null
          Odds_2: number | null
          Outcome_1: string | null
          Outcome_2: string | null
          Player: string | null
          Player_Prop: string | null
          Sport: string | null
        }
        Insert: {
          Arbitrage_Margin?: number | null
          Away_Team?: string | null
          Bookmaker_1?: string | null
          Bookmaker_2?: string | null
          created_at?: string
          Home_Team?: string | null
          id?: number
          Line?: number | null
          Link_1?: string | null
          Link_2?: string | null
          Odds_1?: number | null
          Odds_2?: number | null
          Outcome_1?: string | null
          Outcome_2?: string | null
          Player?: string | null
          Player_Prop?: string | null
          Sport?: string | null
        }
        Update: {
          Arbitrage_Margin?: number | null
          Away_Team?: string | null
          Bookmaker_1?: string | null
          Bookmaker_2?: string | null
          created_at?: string
          Home_Team?: string | null
          id?: number
          Line?: number | null
          Link_1?: string | null
          Link_2?: string | null
          Odds_1?: number | null
          Odds_2?: number | null
          Outcome_1?: string | null
          Outcome_2?: string | null
          Player?: string | null
          Player_Prop?: string | null
          Sport?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
